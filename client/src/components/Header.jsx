import React from 'react'
import {Button, Navbar, NavbarToggle, TextInput} from 'flowbite-react'
import { Link, NavLink , useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

export default function Header() {
    const path = useLocation.pathname;
  return (


    <Navbar className='border-b-2' >
        <Link to="/" className='self-center text-sm whitespace-nowrap sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Tech</span>
            Blog
        
        </Link>

         {/* SEARCH INPUT */}

        <form>
           
            <TextInput 
                type="text"
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className=' lg:inline'
            />
        </form>

        {/* EXTRA SEARCH FOR SMALL DISPLAY */}
        <Button className='w-12 h-10 lg:hidden' color='grey' pill>
            <AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">
            <Button className='w-12 h-10 hidden sm:inline' color='grey' pill>
                <FaMoon />
            </Button>

            <Link to='/sign-in'>
                <Button gradientDuoTone="cyanToBlue" outline >Sign in</Button>  
            </Link>

            <Navbar.Toggle />

        </div>

        {/* NAV BARS LINKS TO ALL ROUTE */}
                <Navbar.Collapse>
                    <Navbar.Link active={path === "/"} as={'div'}>
                        <Link to='/'>
                            Home
                        </Link>      
                    </Navbar.Link>
        
                    <Navbar.Link active={path === "/projects"} as={'div'}>
                        <Link to='/projects'>
                            Projects
                        </Link>
                    </Navbar.Link>

                    <Navbar.Link active={path === "/about"} as={'div'}>
                        <Link to='/about'>
                            About
                        </Link>
                    </Navbar.Link>
                </Navbar.Collapse>
    </Navbar>


  )
}
