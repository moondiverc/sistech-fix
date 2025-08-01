"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "transparent",
        }}
      >
        <nav
          style={{
            width: scrolled ? "100%" : "1320px",
            marginTop: scrolled ? "0px" : "30px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "10px 15px",
            borderRadius: scrolled ? "0px" : "30px",
            background: "#FFFFFF40",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            opacity: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              maxWidth: "1240px",
              margin: "0 auto",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                width: "160px",
                height: "90px",
                opacity: 1,
              }}
            >
              <Image
                src="/logo-transparent.png"
                alt="Logo"
                width={160}
                height={90}
                style={{ objectFit: "contain" }}
              />
            </Link>

            {/* Menu */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                { name: "Home", href: "/" },
                { name: "Career Map", href: "/dashboard#career-map" },
                {
                  name: "Training & Sertification",
                  href: "/dashboard#training",
                },
                { name: "CV Analyze", href: "/cv-analyze" },
                { name: "Mentor", href: "/dashboard#mentor" },
                { name: "Community", href: "/community" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  style={{
                    fontFamily: "Rubik",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "100%",
                    padding: "10px",
                    color: "#111827",
                    textDecoration: "none",
                    height: "48px",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Button Setting */}
            <Link
              href="/setting"
              style={{
                padding: "10px",
                width: "106px",
                height: "48px",
                fontFamily: "Rubik",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "100%",
                background: "transparent",
                border: "none",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundImage:
                  "linear-gradient(91.31deg, #3B82F6 27.23%, #818CF8 51.33%, #D8B4FE 75.42%)",
                cursor: "pointer",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Setting
            </Link>
          </div>
        </nav>
      </div>

      {/* Main content + Footer dibungkus agar footer naik */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <main style={{ marginTop: "10px", flex: "1" }}>{children}</main>

        {/* Footer */}
      </div>
    </>
  );
}
