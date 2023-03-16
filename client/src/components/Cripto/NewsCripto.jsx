import Reactm, { useState, useEffect } from 'react'

import { useFetch } from '../useFetch'
import { GetNewsCripto } from '../../services/cripto/servicesCripto'

const NewsCripto = () => {
    const { data } = useFetch(GetNewsCripto);
    const [news, setNews] = useState(null)
    useEffect(() => {
        if (data) {
            setNews(data[0])
        }
        return () => setNews(null)
    }, [data])

    const handleClick = (prop) => {
        setNews(prop);
    };

    function formatDate(timestamp) {
        const date = new Date(timestamp * 1000);
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        return date.toLocaleDateString("en-US", options);
    }

    return (

        <div className='mb-[68px] w-full h-full min-h-[500px] relative box-border  '>

            <div className='h-auto w-full px-2 pt-[16px] flex space-x-2'>

                <article className=' w-[700px] h-[500px] flex text-center relative '>

                    <a className='w-full'
                        href={news?.url}
                        target="_blank" rel="noopener noreferrer">

                        <img className='h-full w-full'
                            src={news?.imageurl} alt="img_news"
                        />
                    </a>

                    <header className='absolute block w-full text-[white] top-0 left-0
                                        bg-black/50 font-semibold'>
                        <p className='p-1 text-2xl leading-9 text-center'>{news && news.title}</p>
                    </header>
                    <footer className='absolute flex flex-col w-full text-[white] bottom-0 left-0
                                        bg-black/50 font-semibold  '>
                        <div>
                            <p className='px-1 text-lg text-justify leading-6'>{news && news.body}</p>
                        </div>

                        <div className='flex items-center justify-between  px-2'>
                            <p className=''>{news && news.source_info.name}</p>
                            <p><span>Date:</span> {news && formatDate(news.published_on)}</p>
                        </div>

                    </footer>


                </article>


                <div id='journal-scroll'
                    className=' relative h-[500px] block flex-1 bg-black/10 overflow-y-scroll  scroll-smooth'>
                    {data && data.map((notice) =>

                        <div key={notice.id}
                            onMouseOver={() => handleClick(notice)}
                            className='relative  flex w-full h-[100px] bg-black/50 mb-7 mt-2 '>

                            <div className='text-[12px] h-[100px] w-[100px]  bg-red-900 box-border'>
                                <img className='object-contain h-full w-full p-1 rounded-md'
                                    src={notice.imageurl} alt={notice.imageurl} />
                            </div>

                            <div className='flex flex-col p-2 whitespace-normal text-md font-semibold flex-1'>
                                <p>{notice.title}</p>
                            </div>
                        </div>

                    )
                    }

                </div>



            </div>

        </div>




    )
}

export default NewsCripto