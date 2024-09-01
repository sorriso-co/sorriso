// "use client";
// import { useRef } from "react";

// export default function BookACall() {
//   const ref = useRef<HTMLDivElement>(null);

//   return (
//     <div className="w-full bg-gray-50 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mt-8">
//       <div className="relative overflow-hidden rounded-lg">
//         <iframe
//           src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Z-M-9vG8Fy6-4ZN5H_Ck3v_NOXdIMFFZt9eXxffaFzhL3PeswZYOyjiCd4kdqp276PXFXooxj?gv=true"
//           className="w-full h-[calc(100vh-120px)] min-h-[500px] md:min-h-[600px] rounded-lg"
//           frameBorder="0"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

"use client";
import { useRef } from "react";

export default function BookACall() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full bg-gray-50 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mt-8">
      <div className="relative overflow-hidden rounded-lg">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Z-M-9vG8Fy6-4ZN5H_Ck3v_NOXdIMFFZt9eXxffaFzhL3PeswZYOyjiCd4kdqp276PXFXooxj?gv=true"
          className="w-full h-[calc(100vh-120px)] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
