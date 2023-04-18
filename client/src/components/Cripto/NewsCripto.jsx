import Reactm, { useState, useEffect } from 'react'

import { useFetch } from '../useFetch'
import { GetNewsCripto } from '../../services/cripto/servicesCripto'
import { convertMilisecondsToDateWithOption } from '../../services/convertDate'

const NewsCripto = () => {
    const { data } = useFetch(GetNewsCripto);
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
                    <header className=' flex w-full text-black font-semibold whitespace-normal'>
                        <a href={news?.url} target="_blank" rel="noopener noreferrer">
                            <p className='text-2xl font-bold sm:text-3xl leading-8 text-center'>{news && news.title}</p>
                        </a>
                    </header>
                    <div className=' p-1 sm:px-8 sm:pt-2'>
                        <p className='text-sm sm:text-md text-justify leading-6'>{news && news.body}</p>
                    </div>
                    <div className='w-full h-full flex justify-center items-center'>
                        <a className='relative overflow-hidden  rounded-sm
                        w-[250px] h-[200px] sm:h-[200px] md:w-[400px] md:h-[250px]  lg:w-[500px] lg:h-[300px] '
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

                                        <div className='flex justify-center items-center h-[full] w-[100px]  box-border  p-2 '>
                                            <img className='object-contain w-[70px] h-[70px]   rounded-md '
                                                src={notice.imageurl} alt={notice.imageurl} />

                                        </div>
                                        <div
                                            onMouseOver={() => handleClick(notice)}
                                            className='flex flex-1 items-center text-[#0c1827] text-justify text-base leading-5 p-2 whitespace-normal font-semibold 
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