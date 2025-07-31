"use client";

import React from "react";
import { Button } from "./components/button";
import Image from "next/image";
import RoleDropdown from "./components/RoleDropdown";
import MilestoneItem from "./components/MilestoneItem";
import TrainingItem from "./components/TrainingItem";
import MentorshipStatus from "./components/MentorshipStatus";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500"],
});
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Dashboard() {
  return (
    <main
      className="min-h-screen h-full"
      style={{
        background: `radial-gradient(103.44% 103.44% at 50% 100%, #EEF2FF 4.81%, #60A5FA 25.48%, #818CF8 50.48%, #C084FC 75%, #F3E8FF 95.19%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="mx-auto"
        style={{
          width: "1500px",
          paddingBottom: "100px",
          gap: "50px",
          position: "relative",
          top: "50px",
          left: "58px",
          opacity: 1,
        }}
      >
        {/* Welcome Section */}
        <section className="flex items-center gap-6 mb-6">
          {/* Foto Profil */}
          <Image
            src="/images/user-placeholder.jpg"
            alt="User Photo"
            width={96}
            height={96}
            className="rounded-full object-cover border-4 border-white shadow-md"
          />

          {/* Teks Sambutan */}
          <div>
            <h1
              className="text-[48px] leading-[140%] font-[700] font-rubik text-transparent bg-clip-text mb-2 drop-shadow-md"
              style={{
                backgroundImage:
                  "linear-gradient(91.97deg, #9333EA 1.92%, #3B82F6 63.24%)",
              }}
            >
              Welcome Back, Mychelyn !
            </h1>
            <p className="text-[20px] leading-[150%] font-inter font-normal text-[#111827] w-[706px] h-[30px] opacity-100">
              Track your progress and continue your career with mentorship and
              training
            </p>
          </div>
        </section>

        {/* Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-6">
          {/* Career Map */}
          <div
            className="w-[602px] min-h-[654px] p-5 gap-5 rounded-[20px]
     backdrop-blur-[14px]
     border border-white/10 
     shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] 
     ring-1 ring-white/10"
            style={{
              background: "#FFFFFF40",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              opacity: 1,
            }}
          >
            <h2 className="font-rubik font-semibold text-[24px] leading-[150%] text-blue-900 w-[562px] h-[36px] opacity-100">
              Personalized Career Map
            </h2>

            {/* Dropdown */}
            <div className="mb-4">
              <RoleDropdown />
            </div>

            {/* Milestone info + percentage */}
            <div className="flex justify-between items-center w-[100%] max-w-[562px] h-[30px] mb-2">
              <p className="text-[#111827] text-[16px] font-inter font-normal leading-[30px]">
                1 of 5 milestones completed
              </p>
              <p className="text-[#111827] text-[20px] font-inter font-bold leading-[30px]">
                10%
              </p>
            </div>

            {/* Custom Gradient Progress Bar */}
            <div className="w-[100%] max-w-[562px] h-[13px] bg-white/50 rounded-full overflow-hidden mb-4">
              <div
                className="h-full rounded-full"
                style={{
                  width: "10%",
                  background:
                    "linear-gradient(91.31deg, #3B82F6 27.23%, #818CF8 51.33%, #D8B4FE 75.42%)",
                }}
              ></div>
            </div>

            <div className="flex flex-col gap-6">
              <MilestoneItem
                title="Learn UI Principles"
                status="completed"
                hasNext={true}
              />
              <MilestoneItem
                title="Build Initial CV"
                status="in-progress"
                hasNext={true}
                isNextInProgress={true}
                showButton={true}
              />
              <MilestoneItem
                title="Connect With Mentor"
                status="todo"
                hasNext={true}
              />
              <MilestoneItem
                title="Complete Core Trainings"
                status="todo"
                hasNext={true}
              />
              <MilestoneItem
                title="Apply to first Internship"
                status="todo"
                hasNext={false}
              />
            </div>
          </div>

          {/* Recommended Trainings */}
          <div
            className="w-[612px] h-[707px] p-5 gap-5 rounded-[20px] flex flex-col items-center"
            style={{
              background: "#FFFFFF40",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25)",
              opacity: 1,
            }}
          >
            <h2
              className="mb-10 font-rubik font-semibold text-[24px] leading-[150%]"
              style={{
                color: "#1E3A8A",
                width: "568px",
                height: "36px",
                opacity: 1,
              }}
            >
              Recommended Trainings
            </h2>

            <div className="flex flex-col gap-4">
              <TrainingItem
                title="Introduction to UX Design"
                status="completed"
                note="Completed on May 15, 2025"
              />
              <TrainingItem
                title="Frontend Development Basics"
                status="in-progress"
                progress={65}
              />
              <TrainingItem
                title="Product Management Essentials"
                status="todo"
                note="Scheduled for next week"
              />
            </div>

            <Button
              className="mt-10 mx-auto block font-inter font-semibold text-[18px] leading-[150%] text-white"
              style={{
                width: "228px",
                height: "48px",
                padding: "10px 20px",
                borderRadius: "20px",
                background: "#3B82F6",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                opacity: 1,
              }}
            >
              Explore All Trainings
            </Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mentorship Status */}
          <MentorshipStatus />

          {/* CV Analyzer */}
          <div
            className="w-[612px] h-[707px] p-5 gap-5 rounded-[20px] flex flex-col items-center"
            style={{
              background: "#FFFFFF40",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25)",
              opacity: 1,
            }}
          >
            {/* Judul */}
            <h2
              className="font-rubik font-semibold text-[24px] leading-[150%] text-left self-start"
              style={{
                color: "#1E3A8A",
                width: "572px",
                height: "36px",
                opacity: 1,
              }}
            >
              CV Analyzer
            </h2>

            {/* Circular Progress */}
            <div className="relative w-[224px] h-[224px] mb-4">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  stroke="#E5E7EB"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  stroke="url(#grad1)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="75, 100"
                  d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#E0B5FF" />
                  </linearGradient>
                </defs>
              </svg>
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#111827",
                  opacity: 1,
                }}
              >
                75%
              </div>
            </div>

            {/* Subtitle */}
            <h3
              className="font-rubik font-semibold text-center"
              style={{
                fontSize: "24px",
                lineHeight: "50%",
                color: "#111827",
                width: "572px",
                height: "36px",
                opacity: 1,
              }}
            >
              Profile Match Score
            </h3>
            <p
              className="font-inter font-normal text-center mb-6"
              style={{
                fontSize: "20px",
                lineHeight: "45%",
                color: "#111827",
                width: "572px",
                height: "30px",
                opacity: 1,
              }}
            >
              You CV matches 70% of top UX Designer Profile
            </p>

            {/* Progress Bars */}
            {[
              { label: "Skills", value: 90 },
              { label: "Experience", value: 60 },
              { label: "Education", value: 85 },
            ].map((item, idx) => (
              <div className="w-full mb-2" key={idx}>
                <div className="flex justify-between items-center mb-1">
                  <p
                    className="font-inter font-semibold"
                    style={{
                      fontSize: "20px",
                      lineHeight: "50%",
                      color: "#111827",
                      width: "51px",
                      height: "30px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-inter font-semibold"
                    style={{
                      fontSize: "20px",
                      lineHeight: "50%",
                      color: "#111827",
                      width: "44px",
                      height: "30px",
                    }}
                  >
                    {item.value}%
                  </p>
                </div>
                <div
                  className="rounded-full overflow-hidden"
                  style={{
                    width: "572px",
                    height: "13px",
                    backgroundColor: "rgba(255,255,255,0.5)",
                  }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.value}%`,
                      background:
                        "linear-gradient(91.31deg, #3B82F6 27.23%, #818CF8 51.33%, #D8B4FE 75.42%)",
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Button */}
            <Button
              className="font-inter font-semibold text-[18px] leading-[150%] text-white mt-[-100]"
              style={{
                width: "228px",
                height: "48px",
                padding: "10px 20px",
                borderRadius: "20px",
                background: "#3B82F6",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                opacity: 1,
              }}
            >
              Improve My CV
            </Button>
          </div>
          {/* Footer di dalam background */}
          <footer
            style={{
              width: "1380px", // sesuai desain
              height: "87px",
              borderRadius: "30px",
              padding: "10px 15px",
              margin: "60px auto 0 auto", // CENTER SECARA HORIZONTAL
              background: "#FFFFFF40",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              opacity: 1,
            }}
          >
            {/* Kiri: Logo + Teks */}
            <div
              style={{
                width: "389px",
                height: "67px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image
                src="/logo-transparent.png"
                alt="Logo"
                width={150}
                height={150}
                style={{ objectFit: "contain" }}
              />
              <p
                className={rubik.className}
                style={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "140%",
                  letterSpacing: "0px",
                  color: "#111827",
                  opacity: 1,
                }}
              >
                © 2025 FIX. All rights reserved.
              </p>
            </div>

            {/* Kanan: Sosmed */}
            <div
              style={{
                width: "264px",
                height: "32.6px",
                display: "flex",
                gap: "27px",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <FaFacebookF
                style={{ width: 28, height: 28, cursor: "pointer" }}
              />
              <FaXTwitter
                style={{ width: 28, height: 28, cursor: "pointer" }}
              />
              <FaYoutube style={{ width: 28, height: 28, cursor: "pointer" }} />
              <FaInstagram
                style={{ width: 28, height: 28, cursor: "pointer" }}
              />
              <FaLinkedinIn
                style={{ width: 28, height: 28, cursor: "pointer" }}
              />
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
