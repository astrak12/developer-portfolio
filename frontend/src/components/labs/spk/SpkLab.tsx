// frontend/src/components/labs/spk/SpkLab.tsx
import React, { useState, useMemo } from 'react';

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
}

interface NilaiEvaluasi {
    pengepulId: string;
    nilai: Record<string, number>;
}

const MOCK_KRITERIA: Kriteria[] = [
    { id: 'k1', kode: 'C1', nama: 'Harga Beli', atribut: 'benefit', bobot: 30 },
    { id: 'k2', kode: 'C2', nama: 'Jarak Lokasi', atribut: 'cost', bobot: 20 },
    { id: 'k3', kode: 'C3', nama: 'Kapasitas Tampung', atribut: 'benefit', bobot: 25 },
    { id: 'k4', kode: 'C4', nama: 'Pelayanan', atribut: 'benefit', bobot: 25 },
];

const MOCK_PENGEPUL: Pengepul[] = [
    { id: 'p1', nama: 'Pengepul A (Bapak Budi)' },
    { id: 'p2', nama: 'Pengepul B (Ibu Siti)' },
    { id: 'p3', nama: 'Pengepul C (CV. Sampah Berkah)' },
];

// Data mentah penilaian
const MOCK_NILAI: NilaiEvaluasi[] = [
    { pengepulId: 'p1', nilai: { k1: 80, k2: 5, k3: 100, k4: 80 } },
    { pengepulId: 'p2', nilai: { k1: 90, k2: 15, k3: 80, k4: 70 } },
    { pengepulId: 'p3', nilai: { k1: 70, k2: 2, k3: 150, k4: 90 } },
];

export const SpkLab: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'kriteria' | 'pengepul' | 'perhitungan'>('dashboard');
    const kriteria = MOCK_KRITERIA;
    const pengepul = MOCK_PENGEPUL;

    // --- ENGINE KALKULASI SAW ---
    const hasilSAW = useMemo(() => {
        const maxMinPerKriteria: Record<string, { max: number, min: number }> = {};

        // 1. Cari nilai Max/Min
        kriteria.forEach(k => {
            const semuaNilai = MOCK_NILAI.map(n => n.nilai[k.id] || 0);
            maxMinPerKriteria[k.id] = {
                max: Math.max(...semuaNilai),
                min: Math.min(...semuaNilai)
            };
        });

        // 2. Normalisasi & 3. Hitung Nilai Akhir
        const hasil = pengepul.map(p => {
            const dataNilai = MOCK_NILAI.find(n => n.pengepulId === p.id);
            let totalSkor = 0;
            const rincianNormalisasi: Record<string, number> = {};

            kriteria.forEach(k => {
                const nilaiAsli = dataNilai?.nilai[k.id] || 0;
                let nilaiNormalisasi = 0;

                // Mencegah pembagian dengan 0 agar React tidak crash
                if (k.atribut === 'benefit') {
                    nilaiNormalisasi = maxMinPerKriteria[k.id].max === 0 ? 0 : nilaiAsli / maxMinPerKriteria[k.id].max;
                } else {
                    nilaiNormalisasi = nilaiAsli === 0 ? 0 : maxMinPerKriteria[k.id].min / nilaiAsli;
                }

                rincianNormalisasi[k.id] = nilaiNormalisasi;
                totalSkor += nilaiNormalisasi * (k.bobot / 100);
            });

            return {
                ...p,
                totalSkor,
                rincianNormalisasi
            };
        });

        // 4. Urutkan berdasarkan total skor tertinggi
        return hasil.sort((a, b) => b.totalSkor - a.totalSkor);
    }, [kriteria, pengepul]);

    return (
        // PERHATIKAN: Saya menambahkan "relative z-10" di sini agar tidak tenggelam oleh Starfield!
        <div className="bg-white dark:bg-[#0B1021] rounded-2xl shadow-sm border border-slate-200 dark:border-space-starlight/20 overflow-hidden transition-colors relative z-10">

            {/* Header Lab SPK */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-space-starlight dark:to-space-nebula p-6 sm:p-8 text-white">
                <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl">♻️</span>
                    <h2 className="text-2xl font-bold font-sans">Lab: SPK Bank Sampah Japos</h2>
                </div>
                <p className="text-white/80 text-sm max-w-2xl">
                    Simulasi Sistem Penunjang Keputusan pemilihan pengepul sampah terbaik menggunakan metode <strong>SAW</strong>.
                </p>
            </div>

            {/* Navigasi Tab */}
            <div className="flex overflow-x-auto border-b border-slate-200 dark:border-space-starlight/20 bg-slate-50 dark:bg-[#060913]">
                {[
                    { id: 'dashboard', label: '📊 Dashboard' },
                    { id: 'kriteria', label: '📝 Data Kriteria' },
                    { id: 'pengepul', label: '👥 Data Pengepul' },
                    { id: 'perhitungan', label: '⚙️ Kalkulasi & Hasil' },
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
            <div className="p-6 sm:p-8 min-h-[400px]">
                {activeTab === 'dashboard' && (
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ringkasan Sistem</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30">
                                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">Total Kriteria</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{kriteria.length}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30">
                                <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">Total Alternatif</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{pengepul.length}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/30">
                                <p className="text-sm text-green-600 dark:text-green-400 font-semibold mb-1">Status Mesin SAW</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white mt-2">Aktif 🟢</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'kriteria' && (
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Data Kriteria</h3>
                        <ul className="space-y-2">
                            {kriteria.map(k => (
                                <li key={k.id} className="p-3 bg-slate-50 dark:bg-[#060913] border border-slate-200 dark:border-space-starlight/20 rounded-lg flex justify-between">
                                    <span className="font-mono text-slate-700 dark:text-slate-300">[{k.kode}] {k.nama}</span>
                                    <div className="space-x-3">
                                        <span className={`text-xs px-2 py-1 rounded-md ${k.atribut === 'benefit' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>{k.atribut.toUpperCase()}</span>
                                        <span className="text-sm text-slate-500 font-bold">Bobot: {k.bobot}%</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === 'pengepul' && (
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Data Pengepul</h3>
                        <ul className="space-y-2">
                            {pengepul.map(p => (
                                <li key={p.id} className="p-3 bg-slate-50 dark:bg-[#060913] border border-slate-200 dark:border-space-starlight/20 rounded-lg text-slate-700 dark:text-slate-300">
                                    {p.nama}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === 'perhitungan' && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Hasil Akhir & Ranking (SAW)</h3>
                            <p className="text-sm text-slate-500 mb-4">Tabel di bawah menampilkan hasil perhitungan preferensi (V) yang telah diurutkan otomatis.</p>

                            <div className="overflow-x-auto border border-slate-200 dark:border-space-starlight/20 rounded-lg">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-100 dark:bg-[#060913] text-slate-600 dark:text-slate-400">
                                        <tr>
                                            <th className="p-3 border-b border-slate-200 dark:border-space-starlight/20">Rank</th>
                                            <th className="p-3 border-b border-slate-200 dark:border-space-starlight/20">Nama Pengepul</th>
                                            <th className="p-3 border-b border-slate-200 dark:border-space-starlight/20 text-right">Skor (V)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-space-starlight/20">
                                        {hasilSAW.map((hasil, index) => (
                                            <tr key={hasil.id} className={index === 0 ? 'bg-amber-50 dark:bg-amber-900/10' : ''}>
                                                <td className="p-3 font-bold text-slate-900 dark:text-white">
                                                    {index === 0 ? '👑 1' : index + 1}
                                                </td>
                                                <td className="p-3 text-slate-700 dark:text-slate-300 font-medium">
                                                    {hasil.nama}
                                                </td>
                                                <td className="p-3 text-right font-mono font-bold text-blue-600 dark:text-blue-400">
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