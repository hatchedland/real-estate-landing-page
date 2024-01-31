import React from 'react'
import { Disclaimer } from '../components/disclaimer/Disclaimer'

export const Footer = () => {
    return (
        <div className='text-white bg-black py-10'>
            <div className='max-w-7xl px-5 lg:px-10 mx-auto flex flex-col justify-center items-center'>
            <Disclaimer />
            <footer className="bg-black border-t border-gray-600 text-white mt-10 p-2  w-full ">
                <div className="flex justify-between w-full mx-auto text-center">
                    <p>
                        <a href="/privacy-policy" className=" underline">
                            Privacy Policy
                        </a>
                    </p>
                    <p>&copy; {new Date().getFullYear()} SNN Estates. All Rights Reserved.</p>
                </div>
            </footer>
            </div>
        </div>
    )
}
