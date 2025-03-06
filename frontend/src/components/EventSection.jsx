import React, { useEffect, useState } from "react";
import EventPhotos from "./EventPhotos";
import { Calendar } from "lucide-react";

// const events = [
//   {
//     id: 1,
//     title: "NCC (National cadet corps)",
//     date: "25 Jan 2024",
//     image:
//       "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     category: "ncc",
//     images: [
//       "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     ],
//   },
//   {
//     id: 2,
//     title: "Science exhibition",
//     date: "15 Jan 2024",
//     image:
//       "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     category: "science",
//     images: [
//       "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     ],
//   },
//   {
//     id: 3,
//     title: "Alumni association",
//     date: "10 Jan 2024",
//     image:
//       "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     category: "alumni",
//     images: [
//       "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     ],
//   },
//   {
//     id: 4,
//     title: "Cleanliness drive",
//     date: "05 Jan 2024",
//     image:
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     category: "cleanliness",
//     images: [
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     ],
//   },
//   {
//     id: 5,
//     title: "Plantation day",
//     date: "01 Jan 2024",
//     image:
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     category: "plantation",
//     images: [
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     ],
//   },
//   {
//     id: 6,
//     title: "Annual day",
//     date: "20 Dec 2023",
//     image:
//       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     category: "annual",
//     images: [
//       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     ],
//   },
// ];

// const categories = [
//   { id: "all", label: "All" },
//   { id: "ncc", label: "NCC National cadet corps" },
//   { id: "plantation", label: "Plantation day" },
//   { id: "annual", label: "Annual day" },
//   { id: "sports", label: "Sports day" },
//   { id: "science", label: "Science exhibition" },
//   { id: "cleanliness", label: "Cleanliness drive" },
//   { id: "alumni", label: "Alumni association" },
// ];
const EventSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/events?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.data);
        console.log(data.data);
      });

    fetch("http://localhost:1337/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.data);
      });
  }, []);


  const filteredEvents = events.filter(
    (event) => selectedCategory === "all" || event.category === selectedCategory
  );

  const displayedEvents = showMore
    ? filteredEvents
    : filteredEvents.slice(0, 6);
  return (
    <div className="w-full mx-auto py-12 px-4 pl-12 pb-32">
      <div className="flex flex-wrap gap-4 mb-8 justify-start px-32">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.category_id)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category.category_id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-32">
        {displayedEvents.map((event) => (
          <div
            key={event.event_id}
            className="bg-white w-[600px] h-[450px] rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:bg-gray-200 transition-colors duration-300"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="h-80 overflow-hidden">
              <img
                src={`http://localhost:1337` + event.image.url}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-8">
              <h3 className="text-3xl mb-2 text-gray-600 font-playfair font-semibold">
                {event.title}
              </h3>
              <p className="text-gray-600 flex flex-row gap-2 items-center">
                <span>
                  <Calendar color="#0c63ed" className="h-4 w-4" />
                </span>
                <span>{event.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {showMore ? "Show Less" : "View More"}
          </button>
        </div>
      )}

      {selectedEvent && (
        <EventPhotos
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default EventSection;
