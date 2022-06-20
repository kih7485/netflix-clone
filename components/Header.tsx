import React, { useEffect, useState } from 'react'
import {BellIcon, SearchIcon} from '@heroicons/react/outline';
import Link from 'next/link';
function Header() {
    const [isScrolled, setIsScrolled] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    
    }, [])
    

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className='flex items-center space-x-2'>
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="object-contain cursor-pointer"
                />
                <ul className='hidden space-x-4 md:flex'>
                    <li>홈으로</li>
                    <li>드라마</li>
                    <li>영화</li>
                    <li>신작 & 인기</li>
                    <li>즐겨찾기</li>
                </ul>
            </div>
            <div className='flex items-center space-x-4 text-sm font-light'>
                <SearchIcon className='hidden w-6 h-6 sm:inline' />
                <p className='hidden lg:inline'>키즈</p>
                <BellIcon className='w-6 h-6'/>
                <Link href="/account">
                    <img
                        src="https://rb.gy/g1pwyx"
                        
                        className="rounded cursor-pointer"
                        />
                </Link> 
            </div>
           
        </header>
  )
}

export default Header