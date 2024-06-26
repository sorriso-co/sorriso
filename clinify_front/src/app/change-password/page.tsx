"use client";
import { useState } from 'react';
import { changePassword } from '../../services/api';

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const data = {
          old_password: oldPassword,
          new_password: newPassword,
        };
        await changePassword(token, data);
        alert('Password changed successfully');
      } catch (error) {
        console.error('Password change failed:', error);
        alert('Password change failed');
      }
    } else {
      alert('You are not logged in');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold mb-8 text-gray-800">Change Password</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Old Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
