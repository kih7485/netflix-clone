import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

function login() {
  return <div className='relative flex flex-col w-screen h-screen bg-black md:items-center md:justify-center md:bg-transparent'>
    <Head>
      <title>넷플릭스 클론코딩</title>
      <link rel="icon" href="favicon.ico"></link>
    </Head>
    <Image
      src="https://rb.gy/p2hphi"
      layout="fill"
      className="-z-10 !hidden opacity-60 sm:!inline"
      objectFit='cover'
    />

    <img
        src="https://rb.gy/ulxxee"
        width={150}
        height={150}
        className="absolute object-contain cursor-pointer left-4 top-4 md:left-20 md:top-6"
    />
    <form className='relative px-6 py-10 mt-24 space-y-8 rounded bg-black/75 md:mt-0 md:max-w-md md:px-14'>
      <h1>로그인</h1>
      <div className='space-y-4'>
        <label className='inline-block w-full'>
          <input
            className='input'
            type='email' placeholder='이메일' />
        </label>
        <label className='inline-block w-full'>
          <input
            className='input'
            type='password' placeholder='비밀번호' />
        </label>
      </div>
      <button className='w-full rounded bg-[#e50914] py-3 font-semibold'>로그인</button>
    </form>
  </div>;
}

export default login;
