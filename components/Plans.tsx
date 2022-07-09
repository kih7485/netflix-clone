import { CheckIcon } from '@heroicons/react/outline'
import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import useAuth from '../hooks/useAuth'
import Table from './Table'

interface Props{
    products: Product[]
}

function Plans({products}:Props) {
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
                <div className='flex flex-col mt-4 space-y-4'>
                    <div className='flex items-center self-end justify-end w-full md:w-3/5'>
                        {products.map((product) => (
                            <div key={product.id } className='planBox'>
                                {product.name}
                            </div>
                        ))}
                    </div>

                    <Table products={products}/>
                    <button> 
                        구독
                    </button>
                </div>
            </main>
        </div>
  )
}

export default Plans