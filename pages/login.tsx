import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

interface Inputs {
  email: string,
  password: string
}

function login() {
  const [login, setLogin] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const { signIn, signUp } = useAuth();
  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
    login ?
      await signIn(email, password) : await signUp(email, password);
  }; 

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative px-6 py-10 mt-24 space-y-8 rounded bg-black/75 md:mt-0 md:max-w-md md:px-14'>
      <h1 className='text-4xl font-semibold'>로그인</h1>
      <div className='space-y-4'>
        <label className='inline-block w-full'>
          <input
            className='input'
            type='email' placeholder='이메일'
            {...register('email', { required: true })}
          />
           {errors.email && <span className='p-1 text-[13px] font-light text-orange-500'>이메일을 입력해 주세요.</span>}
      
        </label>
        <label className='inline-block w-full'>
          <input
            className='input'
            type='password' placeholder='비밀번호'
            autoComplete='false'
            {...register('password', { required: true })}
          />

           {errors.password && <span className='p-1 text-[13px] font-light text-orange-500'>패스워드를 입력해 주세요.</span>}
        </label>
      </div>
      <button className='w-full rounded bg-[#e50914] py-3 font-semibold' onClick={() => setLogin(true)}>로그인</button>

      <div>
        <button type='submit' className='text-white hover:underline' onClick={() => setLogin(false)}>회원가입</button>
      </div>
    </form>
  </div>;
}

export default login;
