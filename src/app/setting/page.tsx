// app/setting/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaUser,
  FaWandMagicSparkles,
  FaBell,
  FaUserShield,
  FaGlobe,
  FaCircleQuestion,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa6";

export default function SettingPage() {
  const sidebarItems = [
    { label: "Account", icon: <FaUser size={24} />, underline: true },
    { label: "Career Preferences", icon: <FaWandMagicSparkles size={24} /> },
    { label: "Notification", icon: <FaBell size={24} /> },
    { label: "Privacy & Data Control", icon: <FaUserShield size={24} /> },
    { label: "Language & Interface", icon: <FaGlobe size={24} /> },
    { label: "Help & Support", icon: <FaCircleQuestion size={24} /> },
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [profileImage, setProfileImage] = useState(
    "/images/user-placeholder.jpg"
  );

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneValue(value);
    if (!/^\d*$/.test(value)) {
      setPhoneError("Please enter numbers only");
    } else {
      setPhoneError("");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <main
      className="min-h-screen h-full mt-[-250px]"
      style={{
        background:
          "radial-gradient(103.44% 103.44% at 50% 100%, #EEF2FF 4.81%, #60A5FA 25.48%, #818CF8 50.48%, #C084FC 75%, #F3E8FF 95.19%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        paddingTop: "300px",
        paddingBottom: "180px",
      }}
    >
      <div
        className="flex gap-[77px]"
        style={{
          width: "1240px",
          height: "1585px",
          borderRadius: "30px",
          padding: "60px 30px",
          background: "#FFFFFF40",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <aside className="w-[320px]">
          <h1
            style={{
              fontFamily: "Rubik",
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "140%",
              background:
                "linear-gradient(91.97deg, #9333EA 1.92%, #3B82F6 63.24%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "30px",
            }}
          >
            Pengaturan
          </h1>

          <ul className="flex flex-col gap-6">
            {sidebarItems.map((item, idx) => (
              <li key={idx} className="flex flex-col gap-2">
                <div
                  className="flex items-center gap-4"
                  style={{
                    fontFamily: "Rubik",
                    fontWeight: 600,
                    fontSize: "24px",
                    color: "#111827",
                  }}
                >
                  {item.icon}
                  {item.label}
                </div>
                {item.underline && (
                  <div
                    style={{
                      width: "144px",
                      borderBottom: "2px solid",
                      borderImage:
                        "linear-gradient(91.31deg, #3B82F6 27.23%, #818CF8 51.33%, #D8B4FE 75.42%) 1",
                    }}
                  ></div>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <section
          className="flex-1 p-8 gap-6 rounded-[20px] flex flex-col items-start"
          style={{
            background: "#FFFFFF40",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            height: "1250px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25)",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "Rubik",
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "140%",
                color: "#111827",
                width: "662px",
                height: "45px",
              }}
            >
              Profile Setting
            </h2>
            <div
              style={{
                width: "662px",
                borderBottom: "2px solid",
                borderImage:
                  "linear-gradient(91.31deg, #3B82F6 27.23%, #818CF8 51.33%, #D8B4FE 75.42%) 1",
                marginTop: "8px",
              }}
            ></div>
          </div>

          <p
            style={{
              fontFamily: "Rubik",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "140%",
              color: "#111827",
              width: "642px",
              height: "34px",
            }}
          >
            Photo Profile
          </p>

          <div className="flex items-start gap-6">
            <Image
              src={profileImage}
              alt="Profile Picture"
              width={154}
              height={154}
              style={{
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="upload-photo">
                <div
                  style={{
                    width: "164px",
                    height: "54px",
                    borderRadius: "12px",
                    padding: "10px 20px",
                    background: "#6366F1",
                    color: "#FFFFFF",
                    fontFamily: "Rubik",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "140%",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  Edit Photo
                </div>
                <input
                  type="file"
                  id="upload-photo"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </label>
              <p
                className="text-sm"
                style={{
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  lineHeight: "140%",
                  color: "#111827",
                  width: "352px",
                }}
              >
                *Gambar profile anda sebaiknya memiliki rasio 1:1 dan berukuran
                lebih dari 2mb
              </p>
            </div>
          </div>

          {[
            { id: "fullname", label: "Full Name" },
            { id: "username", label: "Username" },
            { id: "email", label: "Email" },
            { id: "phone", label: "Phone Number" },
          ].map((field) => (
            <div className="w-full mt-6 flex flex-col gap-2" key={field.id}>
              <label
                htmlFor={field.id}
                style={{
                  fontFamily: "Rubik",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "140%",
                  color: "#111827",
                }}
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type="text"
                value={field.id === "phone" ? phoneValue : undefined}
                onChange={field.id === "phone" ? handlePhoneChange : undefined}
                style={{
                  width: "642px",
                  height: "54px",
                  borderRadius: "12px",
                  padding: "10px",
                  background: "#FFFFFF40",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  fontFamily: "Rubik",
                  fontSize: "20px",
                }}
              />
              {field.id === "phone" && phoneError && (
                <p style={{ color: "red", fontSize: "14px" }}>{phoneError}</p>
              )}
            </div>
          ))}

          <div className="w-full mt-6 flex flex-col gap-4">
            <label
              htmlFor="password"
              style={{
                fontFamily: "Rubik",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "140%",
                color: "#111827",
              }}
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                style={{
                  width: "642px",
                  height: "54px",
                  borderRadius: "12px",
                  padding: "10px",
                  background: "#FFFFFF40",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  fontFamily: "Rubik",
                  fontSize: "20px",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "16px",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#111827",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="w-full mt-6 flex flex-col gap-4">
            <label
              style={{
                fontFamily: "Rubik",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "140%",
                color: "#111827",
              }}
            >
              Connected Accounts
            </label>
            <button
              style={{
                width: "642px",
                height: "54px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px",
                borderRadius: "12px",
                background: "#FFFFFF40",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                fontFamily: "Rubik",
                fontWeight: 500,
                fontSize: "20px",
                color: "#111827",
              }}
              onClick={() => alert("Redirect to Google OAuth")}
            >
              <FaGoogle size={24} /> Connect with Google
            </button>
          </div>
        </section>

        {/* ACTION BUTTONS OUTSIDE SECTION */}

        <div className="absolute bottom-5 w-full flex justify-start ml-[150px]">
          <div className="flex flex-col items-center gap-4">
            {/* Edit Profile Button */}
            <button
              className="w-[900px] h-[100px] rounded-[20px] px-6 py-3 
      bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-300 
      backdrop-blur-md shadow-md flex items-center justify-center"
            >
              <span className="text-white text-[44px] font-rubik font-semibold leading-[140%]">
                Edit Profile
              </span>
            </button>

            {/* Log Out Button */}
            <button
              className="w-[900px] h-[100px] rounded-[20px] px-6 py-3 
      bg-white/25 backdrop-blur-md shadow-inner 
      flex items-center justify-center"
            >
              <span
                className="text-[44px] font-rubik font-semibold leading-[140%] 
        bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-300 
        bg-clip-text text-transparent"
              >
                Log Out
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
