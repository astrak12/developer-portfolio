// frontend/src/components/labs/spk/SpkLab.tsx
import React, { useState } from 'react';

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
    const [activeTab, setActiveTab] = useState<'dashboard' | 'kriteria' | 'pengepul' | 'perhitungan'>('dashboard');
    const [kriteria] = useState<Kriteria[]>(MOCK_KRITERIA);
    const [pengepul] = useState<Pengepul[]>(MOCK_PENGEPUL);

    return (
        <div className="p-10 bg-red-500 text-white font-bold text-2xl">
            TEST KONTEN SPK LAB BERHASIL MUNCUL!
            );
            {/* Header Lab SPK */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-space-starlight dark:to-space-nebula p-6 sm:p-8 text-white">
                <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl">♻️</span>
                    <h2 className="text-2xl font-bold font-sans">Lab: SPK Bank Sampah Japos</h2>
                </div>
                <p className="text-white/80 text-sm max-w-2xl">
                    Simulasi Sistem Penunjang Keputusan pemilihan pengepul sampah terbaik menggunakan metode <strong>SAW</strong> dan <strong>TOPSIS</strong>.
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
                                <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">Total Pengepul</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{pengepul.length}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30">
                                <p className="text-sm text-amber-600 dark:text-amber-400 font-semibold mb-1">Status Data</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white mt-2">Mock Data Aktif</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'kriteria' && (
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Data Kriteria</h3>
                        <p className="text-slate-600 dark:text-slate-400">Daftar kriteria simulasi aktif.</p>
                    </div>
                )}

                {activeTab === 'pengepul' && (
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Data Pengepul</h3>
                        <p className="text-slate-600 dark:text-slate-400">Daftar alternatif pengepul aktif.</p>
                    </div>
                )}

                {activeTab === 'perhitungan' && (
                    <div className="text-center py-10">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Engine Kalkulasi</h3>
                        <p className="text-slate-500">Modul perhitungan sedang dipersiapkan.</p>
                    </div>
                )}
            </div>
        </div>
    );
};