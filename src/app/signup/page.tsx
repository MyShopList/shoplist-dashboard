"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Signup() {
    const router = useRouter();

    const handleSignup = (e) => {
        e.preventDefault();
        router.push('/dashboard');
    }

    return (
        <div>
            <h1>Signup</h1>
            Email: <input type="email" placeholder='Email' />
            <br></br>
            Password: <input type="password" placeholder='Password' />
            <br></br>
            <input type="button" value="Signup" onClick={(e) => { handleSignup(e) }} />

            <p>Already Registered? <Link href="/login">Login</Link></p>
        </div>
    )
}

export default Signup