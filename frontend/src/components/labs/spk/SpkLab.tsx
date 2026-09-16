// frontend/src/components/labs/spk/SpkLab.tsx
import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface Kriteria {
    id: string;
    kode: string;
    nama: string;
    atribut: 'benefit' | 'cost';
    bobot: number;
}

interface Pengepul {
    id: string;
    nama: string;
    deskripsi: string;
    lokasi: string;
}

interface NilaiEvaluasi {
    pengepulId: string;
    nilai: Record<string, number>;
}

const MOCK_PENGEPUL: Pengepul[] = [
    { id: 'p1', nama: 'Pengepul A (Bapak Budi)', deskripsi: 'Pengepul skala menengah dengan armada pickup.', lokasi: 'Tangerang Selatan' },
    { id: 'p2', nama: 'Pengepul B (Ibu Siti)', deskripsi: 'Pengepul lokal spesialis kertas dan plastik.', lokasi: 'Pondok Aren' },
    { id: 'p3', nama: 'Pengepul C (CV. Sampah Berkah)', deskripsi: 'Perusahaan daur ulang dengan kapasitas besar.', lokasi: 'Ciledug' },
];

const MOCK_NILAI: NilaiEvaluasi[] = [
    { pengepulId: 'p1', nilai: { k1: 80, k2: 5, k3: 100, k4: 80 } },
    { pengepulId: 'p2', nilai: { k1: 90, k2: 15, k3: 80, k4: 70 } },
    { pengepulId: 'p3', nilai: { k1: 70, k2: 2, k3: 150, k4: 90 } },
];

export const SpkLab: React.FC = () => {
    const { t } = useTranslation();

    const [activeTab, setActiveTab] = useState<'dashboard' | 'kriteria' | 'pengepul' | 'perhitungan'>('dashboard');
    const [activeMethod, setActiveMethod] = useState<'SAW' | 'TOPSIS'>('SAW');

    const [pengepul] = useState<Pengepul[]>(MOCK_PENGEPUL);
    const [kriteria, setKriteria] = useState<Kriteria[]>([
        { id: 'k1', kode: 'C1', nama: 'Harga Beli / Purchase Price', atribut: 'benefit', bobot: 30 },
        { id: 'k2', kode: 'C2', nama: 'Jarak Lokasi / Distance', atribut: 'cost', bobot: 20 },
        { id: 'k3', kode: 'C3', nama: 'Kapasitas Tampung / Capacity', atribut: 'benefit', bobot: 25 },
        { id: 'k4', kode: 'C4', nama: 'Pelayanan / Service Quality', atribut: 'benefit', bobot: 25 },
    ]);

    const handleUbahBobot = (id: string, bobotBaru: number) => {
        setKriteria(prev => prev.map(k => k.id === id ? { ...k, bobot: bobotBaru } : k));
    };

    // Engine SAW
    const hasilSAW = useMemo(() => {
        const maxMinPerKriteria: Record<string, { max: number, min: number }> = {};
        kriteria.forEach(k => {
            const semuaNilai = MOCK_NILAI.map(n => n.nilai[k.id] || 0);
            maxMinPerKriteria[k.id] = { max: Math.max(...semuaNilai), min: Math.min(...semuaNilai) };
        });

        const hasil = pengepul.map(p => {
            const dataNilai = MOCK_NILAI.find(n => n.pengepulId === p.id);
            let totalSkor = 0;
            kriteria.forEach(k => {
                const nilaiAsli = dataNilai?.nilai[k.id] || 0;
                let nilaiNormalisasi = 0;
                if (k.atribut === 'benefit') {
                    nilaiNormalisasi = maxMinPerKriteria[k.id].max === 0 ? 0 : nilaiAsli / maxMinPerKriteria[k.id].max;
                } else {
                    nilaiNormalisasi = nilaiAsli === 0 ? 0 : maxMinPerKriteria[k.id].min / nilaiAsli;
                }
                totalSkor += nilaiNormalisasi * (k.bobot / 100);
            });
            return { ...p, totalSkor };
        });
        return hasil.sort((a, b) => b.totalSkor - a.totalSkor);
    }, [kriteria, pengepul]);

    // Engine TOPSIS
    const hasilTOPSIS = useMemo(() => {
        const pembagiPerKriteria: Record<string, number> = {};
        kriteria.forEach(k => {
            const sumOfSquares = MOCK_NILAI.reduce((acc, n) => acc + Math.pow(n.nilai[k.id] || 0, 2), 0);
            pembagiPerKriteria[k.id] = Math.sqrt(sumOfSquares);
        });

        const matriksY = MOCK_NILAI.map(n => {
            const y: Record<string, number> = {};
            kriteria.forEach(k => {
                const nilaiAsli = n.nilai[k.id] || 0;
                const r = pembagiPerKriteria[k.id] === 0 ? 0 : nilaiAsli / pembagiPerKriteria[k.id];
                y[k.id] = r * (k.bobot / 100);
            });
            return { pengepulId: n.pengepulId, y };
        });

        const idealPositif: Record<string, number> = {};
        const idealNegatif: Record<string, number> = {};

        kriteria.forEach(k => {
            const semuaY = matriksY.map(m => m.y[k.id]);
            if (k.atribut === 'benefit') {
                idealPositif[k.id] = Math.max(...semuaY); idealNegatif[k.id] = Math.min(...semuaY);
            } else {
                idealPositif[k.id] = Math.min(...semuaY); idealNegatif[k.id] = Math.max(...semuaY);
            }
        });

        const hasil = pengepul.map(p => {
            const yPengepul = matriksY.find(m => m.pengepulId === p.id)?.y || {};
            let dPlusSq = 0; let dMinSq = 0;
            kriteria.forEach(k => {
                const y = yPengepul[k.id] || 0;
                dPlusSq += Math.pow(y - idealPositif[k.id], 2);
                dMinSq += Math.pow(y - idealNegatif[k.id], 2);
            });
            const dPlus = Math.sqrt(dPlusSq); const dMin = Math.sqrt(dMinSq);
            const totalSkor = (dMin + dPlus) === 0 ? 0 : dMin / (dMin + dPlus);
            return { ...p, totalSkor };
        });
        return hasil.sort((a, b) => b.totalSkor - a.totalSkor);
    }, [kriteria, pengepul]);

    const hasilAktif = activeMethod === 'SAW' ? hasilSAW : hasilTOPSIS;

    return (
        <div className="bg-white dark:bg-[#0B1021] rounded-2xl shadow-sm border border-slate-200 dark:border-space-starlight/20 overflow-hidden transition-colors relative z-10">

            {/* Header Lab */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-space-starlight dark:to-space-nebula p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="flex items-center space-x-3 mb-2 relative z-10">
                    <span className="text-3xl">♻️</span>
                    <h2 className="text-2xl font-bold font-sans">{t('spkLab.title')}</h2>
                </div>
                <p className="text-white/80 text-sm max-w-2xl relative z-10">
                    {t('spkLab.subtitle')}
                </p>
            </div>

            {/* Navigasi Tab */}
            <div className="flex overflow-x-auto border-b border-slate-200 dark:border-space-starlight/20 bg-slate-50 dark:bg-[#060913]">
                {[
                    { id: 'dashboard', label: t('spkLab.tabs.dashboard') },
                    { id: 'kriteria', label: t('spkLab.tabs.kriteria') },
                    { id: 'pengepul', label: t('spkLab.tabs.pengepul') },
                    { id: 'perhitungan', label: t('spkLab.tabs.perhitungan') },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${activeTab === tab.id
                            ? 'border-b-2 border-blue-600 dark:border-space-starlight text-blue-600 dark:text-space-starlight bg-white dark:bg-[#0B1021]'
                            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-space-starlight/5'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Area Konten Dinamis */}
            <div className="p-6 sm:p-8 min-h-[500px]">

                {activeTab === 'dashboard' && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="bg-slate-50 dark:bg-[#060913] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-space-starlight/20">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                <span className="mr-2">🎯</span> {t('spkLab.dashboardContent.aboutTitle')}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('spkLab.dashboardContent.aboutDesc')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 rounded-lg flex items-center justify-center font-bold mb-4 shadow-sm">1</div>
                                <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">{t('spkLab.dashboardContent.sawTitle')}</h4>
                                <p className="text-sm text-blue-900/70 dark:text-blue-200/70 leading-relaxed">
                                    {t('spkLab.dashboardContent.sawDesc')}
                                </p>
                            </div>
                            <div className="bg-purple-50/50 dark:bg-purple-900/10 p-6 rounded-2xl border border-purple-100 dark:border-purple-800/30">
                                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-800/50 text-purple-600 dark:text-purple-300 rounded-lg flex items-center justify-center font-bold mb-4 shadow-sm">2</div>
                                <h4 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-2">{t('spkLab.dashboardContent.topsisTitle')}</h4>
                                <p className="text-sm text-purple-900/70 dark:text-purple-200/70 leading-relaxed">
                                    {t('spkLab.dashboardContent.topsisDesc')}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                <span className="mr-2">⚡</span> {t('spkLab.dashboardContent.techTitle')}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['React.js', 'TypeScript', 'Tailwind CSS', 'Multi-Method Engine'].map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-white dark:bg-[#060913] border border-slate-200 dark:border-space-starlight/30 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-xs text-slate-500 mt-3 italic">
                                {t('spkLab.dashboardContent.techNote')}
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === 'kriteria' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{t('spkLab.criteriaContent.title')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                                {t('spkLab.criteriaContent.desc')}
                            </p>
                        </div>
                        <ul className="space-y-4">
                            {kriteria.map(k => (
                                <li key={k.id} className="p-4 bg-slate-50 dark:bg-[#060913] border border-slate-200 dark:border-space-starlight/20 rounded-xl hover:border-blue-300 dark:hover:border-space-starlight transition-colors">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="font-mono font-bold text-slate-700 dark:text-slate-300">[{k.kode}] {k.nama}</span>
                                        <span className={`text-xs px-2 py-1 rounded-md font-semibold ${k.atribut === 'benefit' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                                            {k.atribut.toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <input
                                            type="range" min="0" max="100" value={k.bobot}
                                            onChange={(e) => handleUbahBobot(k.id, Number(e.target.value))}
                                            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                        <span className="font-bold text-slate-600 dark:text-slate-400 min-w-[3rem] text-right font-mono">
                                            {k.bobot}%
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === 'pengepul' && (
                    <div className="animate-in fade-in duration-300">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t('spkLab.pengepulContent.title')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pengepul.map(p => (
                                <div key={p.id} className="p-5 bg-slate-50 dark:bg-[#060913] border border-slate-200 dark:border-space-starlight/20 rounded-xl flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg">{p.nama}</h4>
                                            <span className="text-xs bg-slate-200 dark:bg-space-starlight/30 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full">{p.id.toUpperCase()}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{p.deskripsi}</p>
                                    </div>
                                    <div className="flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-[#0B1021] w-max px-3 py-1.5 rounded-lg border border-slate-200 dark:border-space-starlight/20">
                                        📍 {p.lokasi}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'perhitungan' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 space-y-4 sm:space-y-0">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('spkLab.resultContent.title')}</h3>
                                    <p className="text-sm text-slate-500">
                                        {t('spkLab.resultContent.desc')}
                                    </p>
                                </div>

                                <div className="flex bg-slate-100 dark:bg-[#060913] p-1 rounded-lg border border-slate-200 dark:border-space-starlight/20">
                                    <button
                                        onClick={() => setActiveMethod('SAW')}
                                        className={`px-6 py-2 text-sm font-bold rounded-md transition-all duration-300 ${activeMethod === 'SAW' ? 'bg-white dark:bg-space-starlight/20 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                    >
                                        SAW Method
                                    </button>
                                    <button
                                        onClick={() => setActiveMethod('TOPSIS')}
                                        className={`px-6 py-2 text-sm font-bold rounded-md transition-all duration-300 ${activeMethod === 'TOPSIS' ? 'bg-white dark:bg-space-starlight/20 text-purple-600 dark:text-purple-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                    >
                                        TOPSIS Method
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-x-auto border border-slate-200 dark:border-space-starlight/20 rounded-xl shadow-sm">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-100 dark:bg-[#060913] text-slate-600 dark:text-slate-400">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 dark:border-space-starlight/20">{t('spkLab.resultContent.tableRank')}</th>
                                            <th className="p-4 border-b border-slate-200 dark:border-space-starlight/20">{t('spkLab.resultContent.tableName')}</th>
                                            <th className="p-4 border-b border-slate-200 dark:border-space-starlight/20 text-right">{t('spkLab.resultContent.tableScore')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-space-starlight/20">
                                        {hasilAktif.map((hasil, index) => (
                                            <tr key={hasil.id} className={index === 0 ? 'bg-amber-50/50 dark:bg-amber-900/10' : 'hover:bg-slate-50 dark:hover:bg-space-starlight/5 transition-colors'}>
                                                <td className="p-4 font-bold text-slate-900 dark:text-white">
                                                    {index === 0 ? '👑 1' : index + 1}
                                                </td>
                                                <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">
                                                    {hasil.nama}
                                                </td>
                                                <td className={`p-4 text-right font-mono font-bold ${activeMethod === 'SAW' ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'}`}>
                                                    {hasil.totalSkor.toFixed(4)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};