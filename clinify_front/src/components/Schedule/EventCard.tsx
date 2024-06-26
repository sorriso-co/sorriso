import React from 'react';

const EventCard: React.FC<{ event: { date: string, description: string, time: string, reason: string, name: string } }> = ({ event }) => {
  return (
    <div className="bg-white border border-pink-300 p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200 w-64">
      <h3 className="text-xl font-bold text-pink-800">{event.name}</h3>
      <p className="text-pink-600">{event.date} - {event.time}</p>
      <p className="mt-2 text-pink-700">{event.description}</p>
      <p className="mt-2 text-pink-500 font-semibold">{event.reason}</p>
    </div>
  );
};

export default EventCard;
