'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

function Onboarding() {
    const router = useRouter();

    const handleOnboarding = (e) => {
        e.preventDefault();
        router.push('/dashboard');
    }

    return (
        <div>

            <h1>Setup your shop with in minutes and start selling</h1>

            Shop name: <input type="text" placeholder='shop name' />
            <br></br>

            Shop Category:

            <select>
                <option selected disabled>Select Categories</option>
                <option>Health and fitness</option>
                <option>Clothing</option>
                <option>Technology</option>
                <option>Home</option>
            </select>

            <br></br>

            <textarea name="description" id="" cols="30" rows="10" placeholder='Description'></textarea>

            <br></br>

            Shop URL: <input type="text" placeholder='Shop URL' />

            <br></br>

            Upload Logo: <input type="file" />

            <br></br>

            <input type="button" value="Start selling!" onClick={(e) => { handleOnboarding(e) }} />

        </div>
    )
}

export default Onboarding