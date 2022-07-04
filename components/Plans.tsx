import { CheckIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import useAuth from '../hooks/useAuth'

function Plans() {
    const { logout, user } = useAuth()
  
    return (
      
        <div>
            <Head>
                <title>넷플릭스 클론코딩</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="border-b border-white/10 bg-[#141414]">
                <Link href="/">
                    <img
                        src="https://rb.gy/ulxxee"
                        alt="Netflix"
                        width={150}
                        height={90}
                        className="object-contain cursor-pointer"
                    />
                </Link>
                <button
                    className="text-lg font-medium hover:underline"
                    onClick={logout}
                >
                로그아웃
                </button>
            </header>
            <main className="max-w-5xl px-5 pb-12 mx-auto transition-all pt-28 md:px-10">
                <h1 className="mb-3 text-3xl font-medium">
                    Choose the plan that's right for you
                </h1>
                <ul>
                    <li className="flex items-center text-lg gap-x-2">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
                        Ad-free.
                    </li>
                    <li className="flex items-center text-lg gap-x-2">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
                        just for you.
                    </li>
                    <li className="flex items-center text-lg gap-x-2">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
                        your plan anytime.
                    </li>
                </ul>
                <div>
                    <div className='flex items-center justify-end w-full'>
                        <div className='planBox'>
                            기본 
                        </div>
                        <div className='planBox'>
                            기본 
                        </div>
                        <div className='planBox'>
                            기본 
                        </div>
                    </div>
                </div>
            </main>
        </div>
  )
}

export default Plans