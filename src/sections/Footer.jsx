import React from 'react'
import { Disclaimer } from '../components/disclaimer/Disclaimer'

export const Footer = () => {
    return (
        <div className='text-white bg-black px-5 lg:px-10'>
            <Disclaimer />
            <footer className="bg-black border-t border-gray-600 text-white mt-10 p-2">
                <div className="flex justify-around container mx-auto text-center">
                    <p>
                        <a href="/privacy-policy" className=" underline">
                            Privacy Policy
                        </a>
                    </p>
                    <p>&copy; {new Date().getFullYear()} Summit Estates. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}
