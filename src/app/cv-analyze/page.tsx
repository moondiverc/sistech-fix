"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { analyzeCV } from "../../utils/api";

export default function CvAnalyzePage() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showReview, setShowReview] = useState(false);
  const [showJobFit, setShowJobFit] = useState(false);
  const [targetPosition, setTargetPosition] = useState("");
  const [pageTitle, setPageTitle] = useState("CV ANALYSIS");

  type ReviewData = {
    skills_found: string[];
    missing_skills: string[];
    optimization_tips: string[];
  };

  return (
    <div
      className="flex justify-center items-center pt-[-100px] pb-[150px] px-6 min-h-screen mt-[-250px]"
      style={{
        background:
          "radial-gradient(100% 100% at 50% 100%, #EEF2FF 0%, #60A5FA 26.16%, #818CF8 44.28%, #C084FC 61.69%, #F3E8FF 94.39%)",
        height: "1585px",
      }}
    >
      <div
        className="w-[1240px] min-h-[641px] bg-white/25 rounded-[40px] px-8 py-[60px] flex flex-col items-center gap-[38px]"
        style={{
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        {fileUrl && (
          <div className="w-full flex items-center justify-start mb-[-20px]">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
              style={{
                width: "96px",
                height: "47px",
                padding: "10px",
                borderRadius: "8px",
                opacity: 1,
                transition: "all 0.3s ease-out",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-[18px] h-[18px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "150%",
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                Back
              </span>
            </button>
          </div>
        )}

        <h1
          className={cn(
            "text-[72px] font-semibold leading-[120%] text-center",
            "bg-gradient-to-r from-[#9333EA] via-[#3B82F6] to-[#3B82F6] text-transparent bg-clip-text"
          )}
          style={{
            textShadow: "0px 4px 4px #00000040",
          }}
        >
          {pageTitle}
        </h1>

        {!fileUrl && (
          <p className="text-[#111827] text-[20px] leading-[150%] font-normal text-center w-full max-w-[900px]">
            Make your CV stand out. Upload now and discover strengths,
            weaknesses, and how to improve.
          </p>
        )}

        {fileUrl ? (
          <div className="w-full flex flex-col items-center gap-6">
            <iframe
              src={fileUrl}
              className="w-[400px] h-[500px] border rounded-md shadow-md bg-white"
            ></iframe>
            <div className="flex gap-6">
              <button
                className="bg-white/30 hover:bg-white/40 backdrop-blur text-[#111827] font-medium px-6 py-3 rounded-xl transition"
                onClick={async () => {
                  setShowReview(true);

                  if (!uploadedFile) {
                    alert("File tidak ditemukan. Silakan upload ulang.");
                    return;
                  }

                  try {
                    const res = await analyzeCV({
                      file: uploadedFile,
                      jobDescription: "Software Engineer",
                      skillKeywords: "React, JavaScript, Teamwork",
                    });

                    setReviewData(res);
                  } catch (err: unknown) {
                    if (err instanceof Error) {
                      console.error(err);
                      alert("Gagal menganalisis CV: " + err.message);
                    } else {
                      alert("Terjadi kesalahan tak terduga.");
                    }
                  }
                }}
              >
                🔍 CV Review
              </button>

              <button
                className="bg-white/30 hover:bg-white/40 backdrop-blur text-[#111827] font-medium px-6 py-3 rounded-xl transition"
                onClick={() => {
                  setShowJobFit(true);
                  setShowReview(false);
                  setPageTitle("JOB FIT SCORING"); // ← ini tambahan
                }}
              >
                🎯 Job Fit Scoring
              </button>
            </div>
            {showReview && reviewData && (
              <div className="w-full mt-6 p-6 rounded-2xl bg-white/30 text-left text-[#111827] backdrop-blur">
                <h2 className="text-2xl font-bold text-[#6D28D9] mb-4">
                  Feedback:
                </h2>
                <div className="mb-3">
                  <p className="font-semibold text-green-700">
                    ✅ Skills Found:
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    {reviewData?.skills_found?.map(
                      (item: string, i: number) => (
                        <li key={i}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold text-red-600">
                    ❌ Missing Skills:
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    {reviewData?.missing_skills?.map(
                      (item: string, i: number) => (
                        <li key={i}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-blue-700">
                    💬 Optimization Tips:
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    {reviewData?.optimization_tips?.map(
                      (item: string, i: number) => (
                        <li key={i}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}
            {showJobFit && (
              <div className="w-full mt-6 p-6 rounded-2xl bg-white/30 text-left text-[#111827] backdrop-blur flex flex-col items-center">
                {/* Target Position Input */}
                <div className="flex flex-col items-start w-full max-w-[500px] mb-6">
                  <label className="text-[#4B5563] text-lg font-medium mb-2">
                    Target Position:
                  </label>
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Search your target position"
                      value={targetPosition}
                      onChange={(e) => setTargetPosition(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 focus:outline-none shadow-md placeholder:text-[#9CA3AF] text-[#111827]"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6B7280"
                      className="w-5 h-5 absolute top-3 right-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Analyze Button */}
                <button
                  className="bg-[#5B78F6] hover:bg-[#4A66E6] text-white font-semibold px-6 py-3 rounded-full transition"
                  onClick={() => {
                    alert(`Analyzing for position: ${targetPosition}`);
                    // nanti bisa tambahkan fetch ke backend job match di sini
                  }}
                >
                  Analyze
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-[360px] h-[220px] border-dashed border-2 border-blue-400 rounded-lg flex flex-col justify-center items-center text-center gap-4 bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#FFFFFF"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
              />
            </svg>
            <div>
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "150%",
                  color: "#FFFFFF",
                  marginBottom: "4px",
                }}
              >
                Drop file or browse
              </p>
              <p
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#E5E7EB",
                }}
              >
                Format: .pdf, .docx & Max file size: 25 MB
              </p>
            </div>
            <div className="relative">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                id="file-upload"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && file.type === "application/pdf") {
                    const url = URL.createObjectURL(file);
                    setFileUrl(url);
                    setUploadedFile(file);
                  } else {
                    alert("Only PDF preview is supported in-browser.");
                  }
                }}
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer w-[142px] h-[40px] rounded-[24px] text-center flex items-center justify-center transition duration-200"
                style={{
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  padding: "12px 16px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.4)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.25)")
                }
              >
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#6D7280",
                    width: "86px",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  Browse Files
                </span>
              </label>
            </div>
          </div>
        )}

        {!fileUrl && (
          <button className="mt-4 bg-[#5B78F6] hover:bg-[#4A66E6] text-white font-medium text-lg px-8 py-3 rounded-full shadow transition">
            Upload CV
          </button>
        )}
      </div>
    </div>
  );
}
