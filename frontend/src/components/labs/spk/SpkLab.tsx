// frontend/src/components/labs/spk/SpkLab.tsx
import React, { useState } from 'react';

// --- Tipe Data Sesuai PRD ---
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

// --- Data Simulasi Awal (Mock Data) ---
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

export const SpkLab: React.FC = () => {
    // State untuk Navigasi Tab
    const [activeTab, setActiveTab] = useState<'dashboard' | 'kriteria' | 'pengepul' | 'perhitungan'>('dashboard');

    // State untuk Data Interaktif (Disimpan di browser memory)
    const [kriteria] = useState<Kriteria[]>(MOCK_KRITERIA);
    const [pengepul] = useState<Pengepul[]>(MOCK_PENGEPUL);

    return (
        <div className="bg-white dark:bg-[#0B1021] rounded-2xl shadow-sm border border-slate-200 dark:border-space-starlight/20 overflow-hidden transition-colors">

            {/* Header Lab SPK */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-space-starlight dark:to-space-nebula p-6 sm:p-8 text-white">
                <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl">♻️</span>
                    <h2 className="text-2xl font-bold font-sans">Lab: SPK Bank Sampah Japos</h2>
                </div>
                <p className="text-white/80 text-sm max-w-2xl">
                    Simulasi Sistem Penunjang Keputusan pemilihan pengepul sampah terbaik menggunakan metode <strong>SAW</strong> dan <strong>TOPSIS</strong>. Ubah data untuk melihat perubahan hasil kalkulasi secara *real-time*.
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

                {/* KONTEN: DASHBOARD */}
                {activeTab === 'dashboard' && (
                    <div className="space-y-6 animate-fade-in">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ringkasan Sistem</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30">
                                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">Total Kriteria</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{kriteria.length}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30">
                                <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">Total Pengepul (Alternatif)</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{pengepul.length}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30">
                                <p className="text-sm text-amber-600 dark:text-amber-400 font-semibold mb-1">Status Data</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white mt-2">Mock Data Aktif</p>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg bg-slate-100 dark:bg-[#121829] border-l-4 border-slate-400 text-sm text-slate-600 dark:text-slate-400">
                            <strong>Petunjuk:</strong> Silakan jelajahi tab Kriteria dan Pengepul, lalu masuk ke tab Kalkulasi untuk menjalankan algoritma SAW & TOPSIS.
                        </div>
                    </div>
                )}

                {/* KONTEN: KRITERIA */}
                {activeTab === 'kriteria' && (
                    <div className="animate-fade-in">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Data Kriteria</h3>
                        </div>
                        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-space-starlight/20">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 dark:bg-[#121829] text-slate-600 dark:text-slate-300">
                                    <tr>
                                        <th className="p-4 border-b border-slate-200 dark:border-space-starlight/20">Kode</th>
                                        <th className="p-4 border-b border-slate-200 dark:border-space-starlight/20">Nama Kriteria</th>
                                        <th className="p-4 border-b border-slate-200 dark:border-space-starlight/20">Atribut</th>
                                        <th className="p-4 border-b border-slate-200 dark:border-space-starlight/20">Bobot (%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kriteria.map((k) => (
                                        <tr key={k.id} className="border-b border-slate-100 dark:border-space-starlight/10 last:border-0 text-slate-700 dark:text-slate-300">
                                            <td className="p-4 font-mono">{k.kode}</td>
                                            <td className="p-4 font-semibold">{k.nama}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 text-xs rounded-full ${k.atribut === 'benefit' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                                                    {k.atribut.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className="p-4">{k.bobot}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* KONTEN: PENGEPUL */}
                {activeTab === 'pengepul' && (
                    <div className="animate-fade-in">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Data Pengepul (Alternatif)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {pengepul.map((p) => (
                                <div key={p.id} className="p-4 rounded-xl border border-slate-200 dark:border-space-starlight/20 bg-white dark:bg-[#121829] flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                                        {p.nama.charAt(0)}
                                    </div>
                                    <span className="font-semibold text-slate-800 dark:text-white">{p.nama}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* KONTEN: PERHITUNGAN (Placeholder untuk Phase 3 & 4) */}
                {activeTab === 'perhitungan' && (
                    <div className="animate-fade-in text-center py-10">
                        <div className="text-4xl mb-4">⚙️</div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Engine Kalkulasi SAW & TOPSIS</h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
                            Modul perhitungan sedang dipersiapkan. Nantinya area ini akan menampilkan form penilaian matriks dan membandingkan hasil *ranking* secara *real-time*.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};