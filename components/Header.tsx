import React from 'react'

function Header() {
    return (
        <header>
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
           
        </header>
  )
}

export default Header