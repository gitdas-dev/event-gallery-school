import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useState } from "react";

const EventPhotos = ({ event, onClose }) => {
  const [currImgIndex, setCurrImgIndex] = useState(0);

  const nextImage = () => {
    setCurrImgIndex((prev) => (prev + 1) % event.images.length);
  };
  const prevImage = () => {
    setCurrImgIndex((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <button
        onClick={onClose}
        className="absolute right-96 top-36 z-10 text-white hover:text-gray-800"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={prevImage}
        className="absolute left-72 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-72 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
        <p className="text-gray-600 mb-4">{event.date}</p>

        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src={`http://localhost:1337` + event.images[currImgIndex].url}
              alt={`${event.title} - Image ${currImgIndex + 1}`}
              className="rounded-lg object-center w-full h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPhotos;
