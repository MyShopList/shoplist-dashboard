"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Login() {
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        router.push('/dashboard');
    }

    return (
        <div>
            <h1>Login</h1>
            Email: <input type="email" placeholder='Email' />
            <br></br>
            Password: <input type="password" placeholder='Password' />
            <br></br>
            <input type="button" value="Login" onClick={(e) => { handleLogin(e) }} />

            <p>Now a user? <Link href="/signup">Sign up now!</Link></p>
        </div>
    )
}

export default Login