"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, googleLogin, facebookLogin } from '../../../../services/api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = { username, password, remember_me: rememberMe };
            const tokens = await loginUser(data);
            // Store tokens in local storage or cookie
            localStorage.setItem('access_token', tokens.access_token);
            localStorage.setItem('refresh_token', tokens.refresh_token);
            router.push('/schedule');
        } catch (error: any) {
            setError(error.detail);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
        } catch (error: any) {
            setError(error.detail);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            await facebookLogin();
        } catch (error: any) {
            setError(error.detail);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 to-teal-700 p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
                <h1 className="text-4xl font-extrabold text-teal-900 text-center animate-bounce">Login</h1>
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
                        <label className="block text-teal-900 font-semibold">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 mt-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="inline-flex items-center text-teal-900 font-semibold">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="form-checkbox rounded focus:ring-teal-600 transition duration-300"
                            />
                            <span className="ml-2">Remember Me</span>
                        </label>
                        <button
                            onClick={() => router.push('/forgot-password')}
                            className="text-teal-700 hover:underline focus:outline-none"
                        >
                            Forgot Password?
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-bold text-white bg-teal-700 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-6 space-y-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full px-4 py-3 font-bold text-white bg-teal-600 rounded-lg hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                        Login with Google
                    </button>
                    <button
                        onClick={handleFacebookLogin}
                        className="w-full px-4 py-3 font-bold text-white bg-teal-600 rounded-lg hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                        Login with Facebook
                    </button>
                </div>
                <p className="text-center text-teal-900">
                    Don&apos;t have an account?{' '}
                    <button
                        onClick={() => router.push('/sorriso/auth/register')}
                        className="text-teal-700 hover:underline focus:outline-none"
                    >
                        Register
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
