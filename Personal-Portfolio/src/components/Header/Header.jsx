import React, {useState} from 'react'
import {MdMenu, MdMenuOpen} from 'react-icons/md';

const Header = () => {
    const[isOpen, setIsOpen] = useState(false);
    return(
        <header className='w-full'>
        <nav className="bg-white/50 text-black-600 p-4 shadow-lg">
        <div className="flex items-center justify-between ml-auto mr-auto">
            <a href="#" className="text-2xl font-bold">Brand</a>
            <button className="block text-block cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdMenuOpen className='text-3xl'/> : <MdMenu className='text-3xl' />}
            </button>
            <ul className={`md:flex md:space-x-6 md:items-center absolute md:static top-16 left-0 w-full bg-[#f0f8ff] md:w-auto md:bg-transparent 
            md:flex-row transition-all duration-300 ease-in-out ${isOpen?'h-[200px]':'h-[0px]'}`}>
                <li><a href="#" className= {`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`} >Home</a></li>
                <li><a href="#" className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}>About</a></li>
                <li><a href="#" className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}>Services</a></li>
                <li><a href="#" className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}>Contact</a></li>
            </ul>
        </div>
        </nav>
        </header>
    )
}

export default Header;