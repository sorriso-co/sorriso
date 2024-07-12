"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface AppointmentFormProps {
  selectedDate: string;
  onClose: (eventData?: {
    description: string;
    time: string;
    reason: string;
    name: string;
  }) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  selectedDate,
  onClose,
}) => {
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [clinicName] = useState("My Clinic"); // Prefilled clinic name

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    return phone.length >= 10; // Basic validation, can be improved
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);

    if (!emailValid || !phoneValid) {
      setErrors({
        email: !emailValid ? "Invalid email address" : undefined,
        phone: !phoneValid ? "Invalid phone number" : undefined,
      });
      return;
    }

    // Pass the event data back to the parent component
    onClose({ description, time, reason, name });
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 8; hour < 20; hour++) {
      options.push(
        <option key={`${hour}:00`} value={`${hour}:00`}>{`${hour}:00`}</option>,
        <option key={`${hour}:30`} value={`${hour}:30`}>{`${hour}:30`}</option>
      );
    }
    return options;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4 text-pink-600 font-semibold">
          Schedule Appointment for {selectedDate}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-pink-600">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-pink-600">
              Clinic
            </label>
            <input
              type="text"
              value={clinicName}
              readOnly
              className="w-full px-3 py-2 border border-pink-300 rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-pink-600">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-pink-600">
              Phone
            </label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              containerClass="w-full"
              inputClass="w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              inputStyle={{ width: "100%" }}
              // required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-pink-600">
              Time
            </label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            >
              <option value="" disabled>
                Select a time
              </option>
              {generateTimeOptions()}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-pink-600">
              Reason
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            >
              <option value="" disabled>
                Select a reason
              </option>
              <option value="General Checkup">General Checkup</option>
              <option value="Follow up">Follow up</option>
              <option value="Consultation">Consultation</option>
              <option value="Procedure">Procedure</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-pink-600">
              Additional Information
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => onClose()}
              className="px-2 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-2 py-1 bg-pink-600 text-white rounded-lg hover:bg-pink-700 text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
