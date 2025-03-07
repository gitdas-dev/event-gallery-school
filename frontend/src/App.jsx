import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <EventSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
