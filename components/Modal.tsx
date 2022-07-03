import React, { useEffect, useState } from 'react'
import MuiModal from '@mui/material/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { XIcon } from '@heroicons/react/outline';
import { Movie, Element, Genre } from '../typing';
import ReactPlayer from 'react-player';

function Modal() {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [trailer, setTrailer] = useState('');
    const [genres, setGenres] = useState<Genre[]>([]);
    const [muted, setMuted] = useState(false);
    
    useEffect(() => {
        if (!movie) return;
        async function fetchMovie() { 
            const data = await fetch(
                `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'
                }/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY
                }&language=en-US&append_to_response=videos`
            )
            .then((response) => response.json())
            .catch((error) => console.error(error.message));
            console.log(data, "data");
            if (data?.videos) {
                const index = data.videos.results.findIndex((element: Element) => element.type === 'Trailer');
                setTrailer(data.videos?.results[index]?.key);
            }
            if (data?.genres) {
                setGenres(data.genres);
            }
        }
        fetchMovie();
    }, [movie])
    

    const handleClose = () => {
        setShowModal(false);
        setMovie(null);
    }
  return (
      <MuiModal
          open={showModal}
          onClose={handleClose}
          className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
      >
          <>
              <button
                  onClick={handleClose}
                  className="absolute modalButton right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]
                  hover:bg-[#181818]"
              >
                <XIcon className='w-6 h-6'/>
              </button>
              
              <div className='relative pt-[56.25%]'>
                  <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${trailer}`}
                      width="100%"
                      height="100%"
                      style={{ position: 'absolute', top: '0', left: '0' }}
                      playing
                      muted={muted}
                  />
              </div>
          </>    
      </MuiModal>
  )
}

export default Modal