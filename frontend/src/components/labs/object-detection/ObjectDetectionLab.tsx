// frontend/src/components/labs/object-detection/ObjectDetectionLab.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

export const ObjectDetectionLab: React.FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'dashboard' | 'kebutuhan' | 'perancangan' | 'playground'>('dashboard');

    const [isModelLoading, setIsModelLoading] = useState<boolean>(false);
    const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
    const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);
    const [errorMsg, setErrorMsg] = useState<string>('');

    // State untuk Parameter Tuning Interaktif
    const [scoreThreshold, setScoreThreshold] = useState<number>(0.3); // Default 30%
    const [maxResults, setMaxResults] = useState<number>(10); // Default 10 objek

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const requestRef = useRef<number | null>(null);

    useEffect(() => {
        if (activeTab === 'playground' && !model) {
            setIsModelLoading(true);
            tf.ready().then(() => {
                cocoSsd.load().then((loadedModel) => {
                    setModel(loadedModel);
                    setIsModelLoading(false);
                }).catch(err => {
                    console.error("Gagal memuat model:", err);
                    setErrorMsg("Gagal memuat model AI. Pastikan koneksi internet stabil.");
                    setIsModelLoading(false);
                });
            });
        }
    }, [activeTab, model]);

    const detectFrame = async () => {
        if (videoRef.current && canvasRef.current && model && isCameraActive) {
            const video = videoRef.current;
            const canvas = canvasRef.current;

            if (video.readyState === 4) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');

                // Menggunakan parameter dinamis dari state slider user
                const predictions = await model.detect(video, maxResults, scoreThreshold);

                if (ctx) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    predictions.forEach(prediction => {
                        const [x, y, width, height] = prediction.bbox;

                        ctx.strokeStyle = '#10B981';
                        ctx.lineWidth = 3;
                        ctx.strokeRect(x, y, width, height);

                        ctx.fillStyle = '#10B981';
                        ctx.fillRect(x, y - 22, width, 22);

                        ctx.fillStyle = '#FFFFFF';
                        ctx.font = 'bold 12px monospace';
                        ctx.fillText(
                            `${prediction.class.toUpperCase()} (${Math.round(prediction.score * 100)}%)`,
                            x + 4,
                            y - 6
                        );
                    });
                }
            }
            requestRef.current = requestAnimationFrame(detectFrame);
        }
    };

    useEffect(() => {
        if (isCameraActive && model) {
            requestRef.current = requestAnimationFrame(detectFrame);
        }
        return () => {
            if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
        };
    }, [isCameraActive, model, scoreThreshold, maxResults]); // Bergantung pada parameter tuning

    const toggleCamera = async () => {
        if (isCameraActive) {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                stream.getTracks().forEach(track => track.stop());
                videoRef.current.srcObject = null;
            }
            setIsCameraActive(false);
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext('2d');
                ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            }
        } else {
            try {
                setErrorMsg('');
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setIsCameraActive(true);
                }
            } catch (err) {
                console.error("Akses kamera ditolak atau tidak ditemukan.", err);
                setErrorMsg("Gagal mengakses kamera. Pastikan izin kamera diberikan di browser Anda.");
            }
        }
    };

    useEffect(() => {
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                stream.getTracks().forEach(track => track.stop());
            }
            if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const funcItems = t('objectDetectionLab.kebutuhanContent.funcItems', { returnObjects: true }) as string[];
    const nonFuncItems = t('objectDetectionLab.kebutuhanContent.nonFuncItems', { returnObjects: true }) as string[];
    const workflowItems = t('objectDetectionLab.perancanganContent.workflowItems', { returnObjects: true }) as string[];

    return (
        <div className="bg-white dark:bg-[#0B1021] rounded-2xl shadow-sm border border-slate-200 dark:border-space-starlight/20 overflow-hidden transition-colors relative z-10">
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

            <div className="p-6 sm:p-8 min-h-[500px]">
                {activeTab === 'dashboard' && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="bg-slate-50 dark:bg-[#060913] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-space-starlight/20">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                <span className="mr-2">📜</span> {t('objectDetectionLab.dashboardContent.aboutTitle')}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {t('objectDetectionLab.dashboardContent.aboutDesc')}
                            </p>
                        </div>
                    </div>
                )}

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

                {activeTab === 'playground' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Webcam AI Vision (Parameter Tuning)</h3>
                                <p className="text-xs text-slate-500">Atur parameter threshold dan max results secara real-time</p>
                            </div>
                            <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full font-mono font-semibold">
                                Interactive Tuning Active
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Panel Kontrol & Slider Parameter */}
                            <div className="space-y-4 p-5 bg-slate-50 dark:bg-[#060913] border border-slate-200 dark:border-space-starlight/20 rounded-xl">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Kontrol Kamera</label>
                                    {isModelLoading ? (
                                        <button disabled className="w-full py-3 bg-slate-300 text-slate-600 font-bold rounded-xl text-xs font-mono shadow-sm opacity-70 flex justify-center items-center">
                                            <span className="animate-spin mr-2">⏳</span> Memuat Model AI...
                                        </button>
                                    ) : (
                                        <button
                                            onClick={toggleCamera}
                                            className={`w-full py-3 text-white font-bold rounded-xl text-xs font-mono transition-colors shadow-sm ${isCameraActive
                                                    ? 'bg-red-500 hover:bg-red-600'
                                                    : 'bg-emerald-600 hover:bg-emerald-700'
                                                }`}
                                        >
                                            {isCameraActive ? '⏹️ Matikan Kamera' : '▶️ Nyalakan Kamera & AI'}
                                        </button>
                                    )}
                                </div>

                                {/* Slider 1: Score Threshold */}
                                <div className="space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
                                    <div className="flex justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                                        <span>Score Threshold:</span>
                                        <span className="font-bold text-emerald-600">{Math.round(scoreThreshold * 100)}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0.1"
                                        max="0.9"
                                        step="0.05"
                                        value={scoreThreshold}
                                        onChange={(e) => setScoreThreshold(parseFloat(e.target.value))}
                                        className="w-full accent-emerald-600 cursor-pointer"
                                    />
                                    <p className="text-[10px] text-slate-500">Makin tinggi makin selektif/akurat.</p>
                                </div>

                                {/* Slider 2: Max Results */}
                                <div className="space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
                                    <div className="flex justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                                        <span>Max Results (Objek):</span>
                                        <span className="font-bold text-emerald-600">{maxResults}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="20"
                                        step="1"
                                        value={maxResults}
                                        onChange={(e) => setMaxResults(parseInt(e.target.value))}
                                        className="w-full accent-emerald-600 cursor-pointer"
                                    />
                                    <p className="text-[10px] text-slate-500">Jumlah maksimum objek yang dideteksi sekaligus.</p>
                                </div>

                                {errorMsg && (
                                    <div className="p-3 bg-red-100 text-red-700 rounded-lg text-xs font-mono">
                                        {errorMsg}
                                    </div>
                                )}
                            </div>

                            {/* Panel Video & Canvas */}
                            <div className="md:col-span-2 p-2 bg-slate-900 rounded-xl border border-slate-800 relative min-h-[300px] flex items-center justify-center overflow-hidden">
                                {!isCameraActive && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-slate-500 font-mono text-sm">
                                        <span className="text-4xl mb-2 opacity-50">📷</span>
                                        <p>Kamera Dinonaktifkan</p>
                                        <p className="text-xs mt-1">Klik tombol nyalakan kamera untuk memulai.</p>
                                    </div>
                                )}
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    muted
                                    className={`w-full rounded-lg ${isCameraActive ? 'opacity-100' : 'opacity-0'}`}
                                />
                                <canvas
                                    ref={canvasRef}
                                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};