import { getProducts, Product } from '@stripe/firestore-stripe-payments';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Plans from '../components/Plans';
import Row from '../components/Row';
import useAuth from '../hooks/useAuth';
import payments from '../lib/stripe';
import { Movie } from '../typing';
import requests from '../utils/request';

interface Props {
  netflixOriginals: Movie[],
  trendingNow: Movie[],
  topRated: Movie[],
  comedyMovies: Movie[],
  horrorMovies: Movie[],
  romanceMovies: Movie[],
  documentaries: Movie[],
  actionMovies: Movie[],
  products: Product[]
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
  products
}: Props) => {
  console.log(products);
  const { loading } = useAuth();
  const showModal = useRecoilValue(modalState);
  const subscriptsion = false;

  if (loading || subscriptsion === null) return null;
  if (!subscriptsion) return <Plans products={products }/>

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>넷플릭스 클론코딩</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='relative pb-24 pl-4 lg:space-y-24 lg:pl-6'>
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="인기순" movies={trendingNow} />
          <Row title="시청순" movies={topRated} />
          <Row title="액션스릴러" movies={actionMovies} />
          {/* My List */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}

          <Row title="코미디" movies={comedyMovies} />
          <Row title="공포" movies={horrorMovies} />
          <Row title="로맨스" movies={romanceMovies} />
          <Row title="드라마" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
}

export default Home;


export const getServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true
  }).then(res => res).catch(error => console.error(error.message));

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      products,
    },
  }
}