import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {

    const links = [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com',
            icon: <FaFacebook/>
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com',
            icon: <FaInstagram/>

        },
        {
            name: 'Twitter',
            href: 'https://www.twitter.com',
            icon: <FaTwitter/>
        },
        {
            name: 'Youtube',
            href: 'https://www.youtube.com',
            icon: <FaYoutube/>
        }
    ]
  return (
      <footer className='w-screen bg-violet-300 py-4 text-black '>
          <div className='container mx-auto flex flex-col items-start justify-between gap-4 px-4 md:flex-row'>
              <p className='text-center text-sm md:text-left'>
                  &copy; Nova 2025.All rights reserved
              </p>
              <div className='flex justify-center gap-4 md:justify-start'>
                  
                      {
                          links.map((link) => (
                              <a  key={link} href={link.href} target='_blank' rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                                  {link.icon}
                             </a> 
                          ))
                      }
                  
                  
              </div >

              <a href="#privacy-policy" className='text-sm text-center mr-4 hover:underline md:text-right'>Privacy Policy</a>
              
          </div>
          
    </footer>
  )
}

export default Footer