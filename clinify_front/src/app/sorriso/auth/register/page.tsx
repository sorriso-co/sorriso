"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '../../../../services/api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = { username, email, password };
            await registerUser(data);
            alert('Registration successful');
            router.push('/login'); // Redirect to login page after successful registration
        } catch (error: any) {
            setError(error.detail.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 to-teal-700 p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
                <h1 className="text-4xl font-extrabold text-teal-900 text-center animate-bounce">Register</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-teal-900 font-semibold">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 mt-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                            placeholder="Enter your username"
                        />
                    </div>
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
                        <label className="block text-teal-900 font-semibold">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 mt-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-bold text-white bg-teal-700 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center text-teal-900">
                    Already have an account?{' '}
                    <button
                        onClick={() => router.push('/sorriso/auth/login')}
                        className="text-teal-700 hover:underline focus:outline-none"
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;
