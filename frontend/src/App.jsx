import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";

function App() {
  // const eventsData = [
  //   {
  //     id: 1,
  //     title: "NCC (National cadet corps)",
  //     date: "21st March 2022",
  //     image: "https://via.placeholder.com/400x300",
  //     category: "NCC (National cadet corps)",
  //   },
  //   {
  //     id: 2,
  //     title: "Science exhibition",
  //     date: "25th March 2022",
  //     image: "https://via.placeholder.com/400x300",
  //     category: "Science exhibition",
  //   },
  //   {
  //     id: 3,
  //     title: "Alumni association",
  //     date: "30th June 2022",
  //     image: "https://via.placeholder.com/400x300",
  //     category: "Alumni association",
  //   },
  //   {
  //     id: 4,
  //     title: "Cleanliness drive",
  //     date: "15th July 2022",
  //     image: "https://via.placeholder.com/400x300",
  //     category: "Cleanliness drive",
  //   },
  //   {
  //     id: 5,
  //     title: "Plantation day",
  //     date: "20th August 2022",
  //     image: "https://via.placeholder.com/400x300",
  //     category: "Plantation day",
  //   },
  //   {
  //     id: 6,
  //     title: "Annual day",
  //     date: "10th December 2022",
  //     image: "https://via.placeholder.com/400x300",
  //     category: "Annual day",
  //   },
  // ];
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // const filteredEvents =
  //   selectedCategory === "All"
  //     ? eventsData
  //     : eventsData.filter((event) => event.category === selectedCategory);

  // const categories = [
  //   "All",
  //   "Plantation day",
  //   "Annual day",
  //   "Sports day",
  //   "NCC (National cadet corps)",
  //   "Science exhibition",
  //   "Alumni association",
  //   "Cleanliness drive",
  // ];

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
