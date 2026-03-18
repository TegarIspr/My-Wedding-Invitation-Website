/**
 * @file page.js
 * @description Homepage structure including various sections like welcome, save the date, RSVP, and more for the wedding website.
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  SplashScreen,
  Navbar,
  WelcomeSection,
  SaveTheDate,
  ScheduleSection,
  InfoSection,
} from "@/components";
import LanguageDetector from "@/components/LanguageDetector/LanguageDetector";

const RSVPSection = dynamic(() => import("@/components/Homepage/RSVPSection"), {
  loading: () => <div className="h-96" />,
  ssr: false,
});

const RegistrySection = dynamic(() => import("@/components/Homepage/RegistrySection"), {
  loading: () => <div className="h-64" />,
  ssr: false,
});

const MusicSection = dynamic(() => import("@/components/Homepage/MusicSection"), {
  loading: () => <div className="h-64" />,
  ssr: false,
});

export default function Home() {
  const [language, setLanguage] = useState("en"); // Set default Language

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Detect the browser's language and set it if supported, else default to English
  useEffect(() => {
    const browserLanguage = navigator.language || "en";
    const supportedLanguages = ["en", "it", "pl", "id"];
    const detectedLanguage = supportedLanguages.includes(
      browserLanguage.slice(0, 2)
    )
      ? browserLanguage.slice(0, 2)
      : "en";

    setLanguage(detectedLanguage);
  }, []);

  return (
    <main className={`relative w-full h-full`}>
      {/* Splash Screen */}
      <SplashScreen />

      {/* Detect Language */}
      <LanguageDetector />

      {/* Navbar */}
      <Navbar
        language={language}
        detectedLanguage={language}
        setLanguage={setLanguage}
      />

      {/* Welcome Section */}
      <WelcomeSection language={language} />

      <div className="relative z-10">
        {/* Save the Date Section */}
        <SaveTheDate language={language} />

        {/* Wedding Agenda / Schedule Section */}
        <ScheduleSection language={language} />

        {/* Information Section */}
        <InfoSection language={language} />

        {/* RSVP Section */}
        <RSVPSection language={language} />

        {/* Gift Registry Section */}
        <RegistrySection language={language} />

        {/* Song Requests Section */}
        <MusicSection language={language} />
      </div>
    </main>
  );
}
