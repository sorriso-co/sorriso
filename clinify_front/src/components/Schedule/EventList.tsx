import React from 'react';
import EventCard from './EventCard';

interface EventListProps {
  events: { date: string, description: string, time: string, reason: string, name: string }[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="mt-6 md:mt-0 md:ml-6 flex-grow">
      <h2 className="text-2xl font-bold mb-4 text-pink-800">Pending Appointments</h2>
      {events.length === 0 ? (
        <p className="text-gray-500">No events scheduled</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;

