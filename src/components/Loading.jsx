import React from "react";
import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="flex justify-center mb-6">
          <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
        </div>

        {/* Loading text */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Loading...
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Please wait while we fetch your content
        </p>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
