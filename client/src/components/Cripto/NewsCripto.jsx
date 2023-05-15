import Reactm, { useState, useEffect } from 'react'

import { useFetch } from '../useFetch'
import { GetNewsCripto } from '../../services/cripto/servicesCripto'
import { convertMilisecondsToDateWithOption } from '../../services/convertDate'

const NewsCripto = () => {
    const { data, loading } = useFetch(GetNewsCripto);
    const [news, setNews] = useState(null);

    useEffect(() => {
        if (data) {
            setNews(data[0])
        }
        return () => setNews(null)
    }, [data])

    const handleClick = (prop) => {
        setNews(prop);
    };




    return (
        <div className='mb-[50px] w-full h-full relative box-border'>

            <div className='min-h-[500px]  px-2 pt-[16px] flex flex-col sm:flex-row space-x-2'>

                <article className=' sm:w-[300px] md:w-[500px] lg:w-[700px]  flex flex-col text-center relative mb-4 sm:m-4'>
                    {/* Skeleton Header
                    <div className={`${loading ? `flex justify-center items-center relative rounded-sm
                        w-[250px] h-[200px] sm:h-[200px] md:w-[400px] md:h-[250px] lg:w-[500px] lg:h-[300px]
                         bg-gray-300 dark:bg-gray-700 animate-pulse` : `hidden`}`}>
                        <svg className="w-20 h-20 object-fill text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div> */}

                    <header className=' flex w-full text-black font-semibold whitespace-normal'>
                        <a href={news?.url} target="_blank" rel="noopener noreferrer">
                            <p className='text-2xl font-bold sm:text-3xl leading-8 text-center'>{news && news.title}</p>
                        </a>
                    </header>

                    {/* Skeleton Body */}
                    <div role="statusBody"
                        className={`${loading ? `sm:w-[300px] md:w-[500px] lg:w-[700px] flex flex-col items-center relative mb- sm:m-4` : `hidden`}`}>
                        <div className="h-2.5 bg-gray-300 rounded-full  w-48 mb-4" ></div>
                        <div className="h-2 bg-gray-300 rounded-full  w-full max-w-[360px] mb-2"></div>
                        <div className="h-2 bg-gray-300 rounded-full  w-full max-w-[360px] mb-2"></div>
                        <div className="h-2 bg-gray-300 rounded-full  w-full max-w-[360px] mb-2"></div>
                    </div>
                    <div className={`${loading ? `hidden` : `p-1 sm:px-8 sm:pt-2`}`}>
                        <p className='text-sm sm:text-md text-justify leading-6'>{news && news.body}</p>
                    </div>

                    <div className='w-full h-full flex justify-center items-center'>
                        {/* Skeleton Img */}
                        <div className={`${loading ? `flex justify-center items-center relative rounded-sm
                        w-[250px] h-[200px] sm:h-[200px] md:w-[400px] md:h-[250px] lg:w-[500px] lg:h-[300px]
                         bg-gray-300  animate-pulse` : `hidden`}`}>
                            <svg className="w-20 h-20 object-fill text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                        </div>
                        <a className={`${news?.imageurl ? `relative overflow-hidden  rounded-sm 
                        w-[250px] h-[200px] sm:h-[200px] md:w-[400px] md:h-[250px] lg:w-[500px] lg:h-[300px]`: `hidden`} `}
                            href={news?.url} target="_blank" rel="noopener noreferrer">
                            <img className='w-full h-full object-fill'
                                src={news?.imageurl} alt="img_news"
                            />
                            <footer className='absolute flex flex-col w-full text-[white] bottom-0 left-0
                                        bg-black/50 font-semibold  text-xs  md:text-xs'>
                                <div className='flex items-center justify-between  px-2'>
                                    <p className=''>{news && news.source_info.name}</p>
                                    <p><span>Date:</span> {news && convertMilisecondsToDateWithOption(news.published_on)}</p>
                                </div>
                            </footer>
                        </a>
                    </div>
                </article>

                {/* 5 PRINCIPAL NEWS  */}
                <div className=' relative  h-[500px] block flex-1 rounded-md overflow-hidden pl-4 pr-10'>
                    <div className=' py-1 mb-2'>
                        <h3 className='text-xl font-bold text-start  whitespace-nowrap -skew-x-12 ml-2'>Top 5 Popular News</h3>
                    </div>
                    <div id='journal-scroll' className='h-full scroll-smooth overflow-y-auto'>
                        {data && data.map((notice, index) => {
                            if (index <= 4) {
                                return (
                                    < div key={notice.id}
                                        className={`${index === 4 ? 'mb-0 rounded-b-lg' : 'mb-[2px] '} 
                                        relative flex items-center justify-center w-full h-auto bg-black/10 hover:bg-[#89BBD9]/30  `}>

                                        {/* Skeleton Img */}
                                        <div className={`${loading ? `flex justify-center items-center h-[full] w-[100px]  box-border p-2
                                         bg-gray-300 dark:bg-gray-700 animate-pulse` : `hidden`}`}>
                                            <svg className="w-5 h-5 object-fill text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                        </div>

                                        <div className='flex justify-center items-center h-[full] w-[100px]  box-border  p-2'>
                                            <img className='object-contain w-[70px] h-[70px]   rounded-md '
                                                src={notice.imageurl} alt={notice.imageurl} />

                                        </div>

                                        <div
                                            onMouseOver={() => handleClick(notice)}
                                            className='flex flex-1 items-center text-[#0c1827] text-justify text-sm leading-5 p-2 whitespace-normal font-semibold 
                                            hover:text-black hover:underline hover:cursor-pointer'>
                                            <p>{notice.title}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>

        </div >

    )
}

export default NewsCripto