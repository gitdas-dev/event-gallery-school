import React, { useEffect, useState } from "react";
import EventPhotos from "./EventPhotos";
import { Calendar } from "lucide-react";

const EventSection = () => {
  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/events?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.data);
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
            key={category.category_id}
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
