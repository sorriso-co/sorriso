"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { confirmPasswordReset } from '../../../../services/api';

const ConfirmPasswordReset = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [resetCode, setResetCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const data = { email, reset_code: resetCode, new_password: newPassword };
            await confirmPasswordReset(data);
            setMessage('Your password has been successfully reset.');
            setError('');
        } catch (error: any) {
            setError(error.message);
            setMessage('');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 to-teal-700 p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
                <h1 className="text-4xl font-extrabold text-teal-900 text-center animate-bounce">Confirm Reset</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-teal-900 font-semibold">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 mt-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-teal-900 font-semibold">Reset Code</label>
                        <input
                            type="text"
                            value={resetCode}
                            onChange={(e) => setResetCode(e.target.value)}
                            className="w-full px-4 py-3 mt-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                            placeholder="Enter the reset code"
                        />
                    </div>
                    <div>
                        <label className="block text-teal-900 font-semibold">New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-3 mt-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                            placeholder="Enter your new password"
                        />
                    </div>
                    <div>
                        <label className="block text-teal-900 font-semibold">Confirm New Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 mt-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                            placeholder="Confirm your new password"
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {message && <p className="text-green-500 text-center">{message}</p>}
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-bold text-white bg-teal-700 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                        Reset Password
                    </button>
                </form>
                <p className="text-center text-teal-900">
                    Remembered your password?{' '}
                    <button
                        onClick={() => router.push('/login')}
                        className="text-teal-700 hover:underline focus:outline-none"
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default ConfirmPasswordReset;
