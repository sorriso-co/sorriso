// "use client";
// import React, { useState } from 'react';
// // import EventList from '../../components/Schedule/EventList';
// import GoogleCalendar from '../../components/Schedule/GoogleCalendar';
// import DentalRecordsTransfer from '../../components/Schedule/DentalRecordsTransfer';
// import AppointmentForm from '../../components/Schedule/AppointmentForm';

// const Schedule: React.FC = () => {
//   const [events, setEvents] = useState<{ date: string, description: string, time: string, reason: string, name: string }[]>([]);
//   const [selectedDate, setSelectedDate] = useState<string | null>(null);

//   const addEvent = (event: { date: string, description: string, time: string, reason: string, name: string }) => {
//     setEvents([...events, event]);
//   };

//   const handleDateClick = (date: string) => {
//     setSelectedDate(date);
//   };

//   const closeForm = (eventData?: { description: string, time: string, reason: string, name: string }) => {
//     if (eventData && selectedDate) {
//       addEvent({ ...eventData, date: selectedDate });
//     }
//     setSelectedDate(null);
//   };

//   return (
//     <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center pt-24">
//       <h1 className="text-4xl font-bold mb-6 text-center text-pink-800">Scheduling System</h1>
//       <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//         <GoogleCalendar onDateClick={handleDateClick} />
//         {selectedDate && (
//           <AppointmentForm selectedDate={selectedDate} onClose={closeForm} />
//         )}
//       </div>
//       <div className="w-full max-w-6xl mt-6">
//         <DentalRecordsTransfer />
//       </div>
//     </div>
//   );
// };

// export default Schedule;
