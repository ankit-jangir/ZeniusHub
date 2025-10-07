// src/components/NoInternet.jsx
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import noInternetJson from "../assets/video/no-internet.json"; // <- put your file here

const NoInternet = ({ message = "You appear to be offline." }) => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const goOnline = () => setIsOnline(true);
        const goOffline = () => setIsOnline(false);

        window.addEventListener("online", goOnline);
        window.addEventListener("offline", goOffline);
        return () => {
            window.removeEventListener("online", goOnline);
            window.removeEventListener("offline", goOffline);
        };
    }, []);

    const handleRetry = () => {
        // small UX: try navigator.onLine first then reload
        if (navigator.onLine) {
            // If online, reload to resume app
            window.location.reload();
        } else {
            // try a quick fetch to confirm connectivity
            fetch("https://www.google.com/generate_204", { method: "HEAD", mode: "no-cors" })
                .catch(() => {
                    // still offline — show a gentle shake feedback (via class) or notify
                    // simple feedback: flash a message by toggling state (keep minimal)
                    alert("Still offline. Check your connection and try again.");
                })
                .finally(() => {
                    // attempt reload anyway (useful if captive portal)
                    setTimeout(() => window.location.reload(), 500);
                });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
            <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center">
                <div className="w-64 mx-auto">
                    {/* Lottie animation */}
                    <Lottie animationData={noInternetJson} loop={true} />
                </div>

                <h1 className="mt-4 text-2xl font-semibold text-slate-800">{message}</h1>
                <p className="mt-2 text-sm text-slate-600">
                    {isOnline ? "We see your device is online — try reloading." : "Your device is offline. Check Wi‑Fi or mobile data."}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        onClick={handleRetry}
                        className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        aria-label="Retry connection"
                    >
                        Retry
                    </button>

                    <button
                        onClick={() => window.open("about:blank", "_self")}
                        className="px-5 py-2 rounded-lg border border-slate-200 text-slate-700 bg-white hover:bg-slate-50"
                        aria-label="Open network settings"
                    >
                        Open Network Settings
                    </button>
                </div>

                <ul className="mt-6 text-sm text-slate-500 space-y-2 text-left max-w-md mx-auto">
                    <li>• Turn airplane mode off.</li>
                    <li>• Toggle Wi‑Fi or reconnect to your hotspot.</li>
                    <li>• If using a router, try rebooting it.</li>
                </ul>

                <div className="mt-6 text-xs text-slate-400">Status: {isOnline ? "Online" : "Offline"}</div>
            </div>
        </div>
    );
};

export default NoInternet;
