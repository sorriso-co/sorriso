"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { requestPasswordReset } from '../../../../services/api';


const RequestPasswordReset = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await requestPasswordReset(email);
            setMessage('A password reset link has been sent to your email.');
            setError('');
        } catch (error: any) {
            setError(error.message);
            setMessage('');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 to-teal-700 p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
                <h1 className="text-4xl font-extrabold text-teal-900 text-center animate-bounce">Reset Password</h1>
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
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {message && <p className="text-green-500 text-center">{message}</p>}
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-bold text-white bg-teal-700 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                        Send Reset Link
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

export default RequestPasswordReset;
