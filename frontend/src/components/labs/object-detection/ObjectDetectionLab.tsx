// frontend/src/components/labs/object-detection/ObjectDetectionLab.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ObjectDetectionLab: React.FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'dashboard' | 'kebutuhan' | 'perancangan' | 'playground'>('dashboard');

    // State untuk simulasi playground interaktif YOLOv8
    const [selectedSource, setSelectedSource] = useState<string>('sample-street');
    const [confidenceThreshold, setConfidenceThreshold] = useState<number>(75);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [simulationLog, setSimulationLog] = useState<string>('Sistem siap memproses input...');
    const [detectedObjects, setDetectedObjects] = useState<{ label: string; confidence: number; box: string }[]>([]);

    const handleRunInference = () => {
        setIsProcessing(true);
        setSimulationLog('Memuat model YOLOv8n dan mengekstrak frame...');
        setDetectedObjects([]);

        setTimeout(() => {
            setIsProcessing(false);
            setSimulationLog(`Inferensi selesai dengan Confidence Threshold >= ${confidenceThreshold}%`);
            setDetectedObjects([
                { label: 'person', confidence: 0.94, box: '[120, 45, 310, 150]' },
                { label: 'car', confidence: 0.88, box: '[210, 300, 400, 520]' },
                { label: 'traffic light', confidence: 0.79, box: '[80, 220, 140, 250]' },
            ]);
        }, 1200);
    };

    const funcItems = t('objectDetectionLab.kebutuhanContent.funcItems', { returnObjects: true }) as string[];
    const nonFuncItems = t('objectDetectionLab.kebutuhanContent.nonFuncItems', { returnObjects: true }) as string[];
    const workflowItems = t('objectDetectionLab.perancanganContent.workflowItems', { returnObjects: true }) as string[];

    return (
        <div className="bg-white dark:bg-[#0B1021] rounded-2xl shadow-sm border border-slate-200 dark:border-space-starlight/20 overflow-hidden transition-colors relative z-10">

            {/* Header Lab */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-space-starlight dark:to-space-nebula p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="flex items-center space-x-3 mb-2 relative z-10">
                    <span className="text-3xl">👁️‍🗨️</span>
                    <h2 className="text-2xl font-bold font-sans">{t('objectDetectionLab.title')}</h2>
                </div>
                <p className="text-white/80 text-sm max-w-2xl relative z-10">
                    {t('objectDetectionLab.subtitle')}
                </p>
            </div>

            {/* Navigasi Tab */}
            <div className="flex overflow-x-auto border-b border-slate-200 dark:border-space-starlight/20 bg-slate-50 dark:bg-[#060913]">
                {[
                    { id: 'dashboard', label: t('objectDetectionLab.tabs.dashboard') },
                    { id: 'kebutuhan', label: t('objectDetectionLab.tabs.kebutuhan') },
                    { id: 'perancangan', label: t('objectDetectionLab.tabs.perancangan') },
                    { id: 'playground', label: t('objectDetectionLab.tabs.playground') },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${activeTab === tab.id
                                ? 'border-b-2 border-emerald-600 dark:border-space-starlight text-emerald-600 dark:text-space-starlight bg-white dark:bg-[#0B1021]'
                                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-space-starlight/5'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Area Konten Dinamis */}
            <div className="p-6 sm:p-8 min-h-[500px]">

                {/* TAB 1: DASHBOARD & ABSTRAK */}
                {activeTab === 'dashboard' && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="bg-slate-50 dark:bg-[#060913] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-space-starlight/20">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                {t('objectDetectionLab.dashboardContent.aboutTitle')}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {t('objectDetectionLab.dashboardContent.aboutDesc')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
                                <h4 className="text-base font-bold text-emerald-800 dark:text-emerald-300 mb-2">{t('objectDetectionLab.dashboardContent.modelTitle')}</h4>
                                <p className="text-xs text-emerald-900/70 dark:text-emerald-200/70 leading-relaxed">
                                    {t('objectDetectionLab.dashboardContent.modelDesc')}
                                </p>
                            </div>
                            <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                                <h4 className="text-base font-bold text-blue-800 dark:text-blue-300 mb-2">{t('objectDetectionLab.dashboardContent.guiTitle')}</h4>
                                <p className="text-xs text-blue-900/70 dark:text-blue-200/70 leading-relaxed">
                                    {t('objectDetectionLab.dashboardContent.guiDesc')}
                                </p>
                            </div>
                            <div className="bg-purple-50/50 dark:bg-purple-900/10 p-6 rounded-2xl border border-purple-100 dark:border-purple-800/30">
                                <h4 className="text-base font-bold text-purple-800 dark:text-purple-300 mb-2">{t('objectDetectionLab.dashboardContent.datasetTitle')}</h4>
                                <p className="text-xs text-purple-900/70 dark:text-purple-200/70 leading-relaxed">
                                    {t('objectDetectionLab.dashboardContent.datasetDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: ANALISIS KEBUTUHAN */}
                {activeTab === 'kebutuhan' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('objectDetectionLab.kebutuhanContent.title')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 dark:bg-[#060913] border border-slate-200 dark:border-space-starlight/20 rounded-xl">
                                <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-4">{t('objectDetectionLab.kebutuhanContent.funcTitle')}</h4>
                                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 list-disc list-inside leading-relaxed">
                                    {funcItems && funcItems.map((item: string, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 bg-slate-50 dark:bg-[#060913] border border-slate-200 dark:border-space-starlight/20 rounded-xl">
                                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-4">{t('objectDetectionLab.kebutuhanContent.nonFuncTitle')}</h4>
                                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 list-disc list-inside leading-relaxed">
                                    {nonFuncItems && nonFuncItems.map((item: string, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 3: PERANCANGAN SISTEM */}
                {activeTab === 'perancangan' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('objectDetectionLab.perancanganContent.title')}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t('objectDetectionLab.perancanganContent.desc')}
                        </p>
                        <div className="p-6 bg-slate-100 dark:bg-[#060913] rounded-xl border border-slate-200 dark:border-space-starlight/20 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-2">
                            <p className="font-bold text-emerald-600 dark:text-emerald-400">{t('objectDetectionLab.perancanganContent.workflowTitle')}</p>
                            {workflowItems && workflowItems.map((item: string, index: number) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    </div>
                )}

                {/* TAB 4: SIMULASI / PLAYGROUND */}
                {activeTab === 'playground' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Live Model Sandbox</h3>
                                <p className="text-xs text-slate-500">Uji coba simulasi parameter inferensi YOLOv8.</p>
                            </div>
                            <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full font-mono font-semibold">
                                YOLOv8n Engine Active
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-4 p-5 bg-slate-50 dark:bg-[#060913] border border-slate-200 dark:border-space-starlight/20 rounded-xl">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Sumber Input</label>
                                    <select
                                        value={selectedSource}
                                        onChange={(e) => setSelectedSource(e.target.value)}
                                        className="w-full p-2.5 text-xs font-mono rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                                    >
                                        <option value="sample-street">Kamera Jalan Raya</option>
                                        <option value="sample-indoor">Ruangan Kerja</option>
                                        <option value="dummy-dataset">Dataset Dummy</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                                        Confidence Threshold: {confidenceThreshold}%
                                    </label>
                                    <input
                                        type="range" min="20" max="95" value={confidenceThreshold}
                                        onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                                        className="w-full accent-emerald-600 cursor-pointer"
                                    />
                                </div>

                                <button
                                    onClick={handleRunInference}
                                    disabled={isProcessing}
                                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs font-mono transition-colors shadow-sm disabled:opacity-50"
                                >
                                    {isProcessing ? 'Menjalankan Inferensi...' : 'Jalankan Deteksi 🚀'}
                                </button>
                            </div>

                            <div className="md:col-span-2 p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col justify-between min-h-[280px]">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                                        <span>Status: Model Loaded</span>
                                        <span>{selectedSource}</span>
                                    </div>

                                    <div className="p-4 bg-black/50 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 min-h-[120px]">
                                        {isProcessing ? (
                                            <p className="animate-pulse">⏳ Memproses frame gambar melalui neural network...</p>
                                        ) : detectedObjects.length > 0 ? (
                                            <div className="space-y-2">
                                                <p className="text-slate-400">{simulationLog}</p>
                                                <ul className="space-y-1 mt-2">
                                                    {detectedObjects.map((obj, i) => (
                                                        <li key={i} className="flex justify-between bg-emerald-950/40 p-2 rounded border border-emerald-800/50">
                                                            <span>🎯 Object: <strong className="text-white">{obj.label}</strong></span>
                                                            <span>Conf: {(obj.confidence * 100).toFixed(1)}% | Box: {obj.box}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            <p className="text-slate-500">Klik tombol "Jalankan Deteksi" untuk memulai simulasi pemrosesan objek.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};