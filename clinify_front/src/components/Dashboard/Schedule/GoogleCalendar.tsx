import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction';
import AppointmentForm from './AppointmentForm';
import EventList from './EventList';

const GoogleCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [events, setEvents] = useState<{ date: string, description: string, time: string, reason: string, name: string }[]>([]);

  const handleDateClick = (date: string) => {
    const currentDate = new Date();
    const clickedDate = new Date(date);

    currentDate.setHours(0, 0, 0, 0);
    clickedDate.setHours(0, 0, 0, 0);

    if (clickedDate >= currentDate) {
      setSelectedDate(date);
    } else {
      alert("You cannot schedule an appointment in the past.");
    }
  };

  const closeForm = (eventData?: { description: string, time: string, reason: string, name: string }) => {
    if (eventData && selectedDate) {
      setEvents([...events, { ...eventData, date: selectedDate }]);
    }
    setSelectedDate(null);
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-pink-100 rounded-3xl shadow-md max-w-6xl mx-auto flex flex-col">
      <div className="w-full flex flex-col md:flex-row items-start md:space-x-6">
        <div className="w-full md:w-2/3">
          <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            googleCalendarApiKey='AIzaSyCOnxOQ85KHHSZdULA8wEYGVQvt_cByYrk'
            events={{
              googleCalendarId: 'c_10a3182742367a43ce50bc59d84d8547a911f25df58d415a71d835561a944b63@group.calendar.google.com',
            }}
            dateClick={(info) => handleDateClick(info.dateStr)}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek,dayGridDay'
            }}
            buttonText={{
              today: 'Today',
              month: 'Month',
              week: 'Week',
              day: 'Day'
            }}
            height="auto"
            contentHeight="auto"
          />
        </div>
        <div className="w-full md:w-1/3 mt-6">
          <EventList events={events} />
        </div>
      </div>
      {selectedDate && (
        <AppointmentForm selectedDate={selectedDate} onClose={closeForm} />
      )}
    </div>
  );
};

export default GoogleCalendar;
