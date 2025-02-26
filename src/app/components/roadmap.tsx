"use client";

import { Calendar, CheckCircle } from "lucide-react";

const roadmapEvents = [
  { title: "Registration Open", date: "March 1, 2025" },
  { title: "Registration Close", date: "April 15, 2025" },
  { title: "Presentation", date: "April 20, 2025" },
  { title: "Main Event Day 1", date: "May 10, 2025" },
  { title: "Main Event Day 2", date: "May 11, 2025" },
];

const Roadmap = () => {
  return (
    <div className="flex flex-col items-center mt-10 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">
        Event's Roadmap
      </h2>
      <div className="relative border-l-4 border-blue-500 pl-6">
        {roadmapEvents.map((event, index) => (
          <div key={index} className="mb-8 flex items-center">
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle size={14} className="text-white" />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-72">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-gray-600 flex items-center">
                <Calendar size={16} className="mr-2 text-blue-500" />
                {event.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
