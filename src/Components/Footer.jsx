import React from 'react'
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="flex flex-col space-y-10 justify-center p-10 font-fig bg1">

        <nav class="flex justify-center flex-wrap gap-6 text-white text-xl font-medium">
            <a class="transition300scale" href="/">Home</a>
            <a class="transition300scale" href="#">About</a>
            <a class="transition300scale" href="#">Pricing</a>
            <a class="transition300scale" href="#">Book</a>
            <a class="transition300scale" href="#">Contact</a>
        </nav>

        <div class="flex justify-center space-x-5">
            <a href="https://www.instagram.com/blendstem/" target="_blank" rel="noopener noreferrer" className='p-3 rounded-full bg-white transition300scale'>
                <FaInstagram className='w-6 h-6 text1'/>
            </a>
            <a href="https://www.linkedin.com/company/blendstem/" target="_blank" rel="noopener noreferrer" className='p-3 rounded-full bg-white transition300scale'>
                <FaLinkedin className='w-6 h-6 text1'/>
            </a>
        </div>
        <p class="text-center text-white font-medium">&copy; 2024 AMC Academy Ltd. All rights reservered.</p>
    </footer>
  )
}

export default Footer