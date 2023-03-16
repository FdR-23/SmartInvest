import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import GraphCripto from '../components/Cripto/GraphCripto.jsx';
import TickersCripto from '../components/Cripto/ListCripto/TickersCripto.jsx';
import { CriptoDetail } from '../services/cripto/servicesCripto.js';
import { currencyWithoutDecimal } from '../services/currencyFormatswithoutDecimal.js';
import { currencyFormatter } from '../services/currencyFormats.js';
import { convertMilisecondsToDate, convertISODate } from '../services/convertDate.js';
import { useFetch } from '../components/useFetch.js';


const DetailCripto = () => {

  const { id } = useParams()
  const { data } = useFetch(CriptoDetail, id, [id])


  const deletePrefijoYExtension = (direccion) => {
    let regex = /^https?:\/\/(?:www\.)?([^\/\.]+)\..*$/g;
    let dominio = direccion.replace(regex, "$1");
    return dominio;
  }

  const formatNumber = (value) => {
    const formatter = new Intl.NumberFormat('en-AR')
    return formatter.format(value)
  }

  return (
    <div className='w-full  h-full box-border [&>section]:py-4'>

      <section>
        <div className='flex flex-col sm:flex-row  w-full px-2  box-border'>

          <div className='flex flex-col  flex-wrap 
          w-full sm:w-[400px] md:w-[600px] lg:w-[700px] box-border'>
            <div className='rounded-lg p-4 [&>div]:ml-2'>

              <div className=' flex items-baseline space-x-1'>
                <img className='w-8 h-8 self-end' src={data?.currentData.image.small} alt={`${data?.currentData.image.small}_img`} />
                <p className=' text-2xl font-semibold text-end'>
                  {data && data?.currentData.name}
                </p>
                <span className='pl-2 text-lg self-end font-semibold text-gray-700'>{data && data.currentData?.symbol.toUpperCase()}</span>
              </div>

              <div>
                <p className=' mt-2 text-3xl font-bold '>
                  <span>US$</span> {data && currencyFormatter(data.simplePrice[id].usd)}
                </p>
              </div>

              <div className=''>

                <div className='flex justify-start pt-2 space-x-2 '>
                  <span className='text-xs font-normal'>Ultima actualización:</span>
                  <p className='text-xs font-semibold self-center'>{data && convertMilisecondsToDate(data?.simplePrice[id].last_updated_at)}</p>
                </div>

                <div className=' flex flex-col'>

                  <div className='grid grid-cols-3 border-b pb-1 mt-4'>
                    <span className='col-span-1 text-sm  font-semibold'
                    >24 Hour Trading Vol:</span>
                    <p className='col-span-2 text-sm whitespace-nowrap text-end'>
                      <span>US$</span> {currencyWithoutDecimal(data && data.simplePrice[id].usd_24h_vol)}</p>
                  </div>

                  <div className='grid grid-cols-3 border-b pb-1 mt-4'>
                    <span className='col-span-1 text-sm font-semibold'>Market Cap:</span>
                    <p className='col-span-2 text-sm whitespace-nowrap text-end'>
                      <span>US$</span> {currencyWithoutDecimal(data && data.simplePrice[id].usd_market_cap)}</p>
                  </div>

                </div>


              </div>
            </div>
          </div>

          <div className=' flex-1 flex justify-center  box-border'>
            <div className='w-full max-w-[400px] mt-1 mb-9  space-y-4 border rounded-lg
            [&>div]:grid  [&>div]:grid-cols-4 [&>div]:p-2 '>
              <div className='col-span-4'>
                <h3 className='col-span-4 text-xl font-semibold'>Info</h3>
              </div>
              <div>
                <p className='col-span-1 font-semibold'>Website:</p>
                <a className='col-span-3 text-[14px] text-center self-center'
                  href={data?.currentData.links.homepage} target="_blank" rel="noopener noreferrer">{data?.currentData.links.homepage}</a>
              </div>
              <div>
                <div className='col-span-1 flex'>
                  <p className='font-semibold'>Explorers:</p>
                </div>
                <div className='col-span-3 flex flex-wrap justify-evenly'>
                  {data && data.currentData?.links.blockchain_site.map((element, index) =>
                    <a className={`${element ? 'block' : 'hidden'}
                    border border-black rounded-lg px-2  mx-1 text-[12px] text-center`}
                      key={index} href={element} target="_blank" rel="noopener noreferrer">{deletePrefijoYExtension(element)}</a>)}
                </div>
              </div>
              <div>
                <p className='col-span-1 font-semibold'>Comunity:</p>
                <div className='col-span-3 space-x-2 flex flex-wrap justify-evenly'>
                  <a
                    className={`${data?.currentData.links.twitter_screen_name ? 'block' : 'hidden'}
                    border border-black rounded-lg px-1 text-[12px] text-center`}
                    href={`https://twitter.com/${data?.currentData?.links.twitter_screen_name}`} target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a
                    className={`${data?.currentData.links.facebook_username ? 'block' : 'hidden'}
                    border border-black rounded-lg text-12 px-1 text-[12px] text-center`}
                    href={`https://www.facebook.com/${data?.currentData.links.facebook_username}`} target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a
                    className={`${data?.currentData.links.telegram_channel_identifier ? 'block' : 'hidden'}
                    border border-black rounded-lg text-12 px-1 text-[12px] text-center`}
                    href={`https://t.me/${data?.currentData.links.telegram_channel_identifier}`} target="_blank" rel="noopener noreferrer">Telegram</a>
                  <a
                    className={`${data?.currentData.links.subreddit_url ? 'block' : 'hidden'}
                    border border-black rounded-lg text-12 px-1 text-[12px] text-center`}
                    href={`https://t.me/${data?.currentData.links.subreddit_url}`} target="_blank" rel="noopener noreferrer">Reddit</a>

                  {data && data.currentData?.links.chat_url.map((element, index) =>
                    <a className={`${element ? 'block' : 'hidden'}
                    border border-black rounded-lg px-2  mx-1 text-[12px] text-center`}
                      key={index} href={element} target="_blank" rel="noopener noreferrer">{deletePrefijoYExtension(element)}</a>)}
                </div>
              </div>
              <div>
                <p className='col-span-1 font-semibold'>Forum:</p>
                <div className='col-span-3 flex flex-wrap justify-evenly'>
                  <a className={`${data?.currentData.links.official_forum_url ? 'block' : 'hidden'}
                    border border-black rounded-lg text-12 px-1 text-[12px] text-center content-center`}
                    href={data?.currentData.links.official_forum_url[0]} target="_blank" rel="noopener noreferrer">Official Forum</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section>

        <div className='flex flex-col sm:flex-row w-full px-2 box-border'>
          <div className='flex  flex-col flex-wrap w-full sm:w-[400px] md:w-[600px] lg:w-[700px] box-border '>
            <div>
              <h4
                className='text-xl font-bold md:ml-5'>
                {data && data?.currentData.name} Price Chart ({data && data.currentData?.symbol.toUpperCase()})
              </h4>
            </div>

            <GraphCripto
              id={id} />
          </div>

          <div className=' flex-1 flex justify-center '>


            <div className=' w-full max-w-[400px] border rounded-lg p-2 box-border 
              [&>div]:border-b [&>div]:my-2 [&>div]:p-1'>
              <h4 className='text-xl font-bold '>
                {data && data.currentData?.symbol.toUpperCase()} Price Statistics</h4>

              <div className='grid grid-cols-4 '>
                <div className='col-span-2'>
                  <p>Rank</p>
                </div>

                <div className='col-span-2'>
                  <p># {data && data.currentData?.market_cap_rank}</p>
                </div>
              </div>

              <div className='grid grid-cols-4 '>
                <div className='col-span-2'>
                  <p>Price:</p>
                </div>

                <div className='col-span-2'>
                  <p>${data && currencyFormatter(data.currentData?.market_data.current_price.usd)}</p>
                </div>
              </div>

              <div className='grid grid-cols-4 '>
                <div className='flex col-span-2'>
                  <p>24h Low / 24h High</p>
                </div>

                <div className=' flex col-span-2'>
                  <p><span>${data && currencyFormatter(data.currentData?.market_data.high_24h.usd)}</span> /
                    <span> ${data && currencyFormatter(data.currentData?.market_data.low_24h.usd)}</span></p>
                </div>
              </div>

              <div className='grid grid-cols-4 '>
                <div className=' flex col-span-2'>
                  <p>Trading Volume</p>
                </div>

                <div className=' flex col-span-2'>
                  <p>${data && currencyWithoutDecimal(data.currentData?.market_data.total_volume.usd)}</p>
                </div>
              </div>
              <div className='grid grid-cols-4 '>
                <div className=' flex col-span-2'>
                  <p>Market Cap</p>
                </div>

                <div className=' flex col-span-2'>
                  <p>${data && currencyWithoutDecimal(data.currentData?.market_data.market_cap.usd)}</p>
                </div>
              </div>

              <div className='grid grid-cols-4 '>
                <div className=' flex col-span-2'>
                  <p>All-Time High</p>
                </div>
                <div className=' flex flex-col col-span-2 p-2'>
                  <div className='flex space-x-1 self-end'>
                    <p>${data && currencyFormatter(data.currentData?.market_data.ath.usd)}</p><br />
                    <p className={`${data?.currentData?.market_data.ath_change_percentage.usd > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {data && formatNumber(data.currentData?.market_data.ath_change_percentage.usd.toFixed(2))}% </p><br />
                  </div>
                  <p className='text-xs self-end'>
                    {data && convertISODate(data.currentData?.market_data.ath_date.usd)}</p>
                </div>
              </div>

              <div className='grid grid-cols-4'>
                <div className=' flex col-span-2'>
                  <p>All-Time High</p>
                </div>
                <div className=' flex flex-col col-span-2 p-2'>
                  <div className='flex space-x-1 self-end'>
                    <p>${data && currencyFormatter(data.currentData?.market_data.atl.usd)}</p>
                    <p className={`${data?.currentData?.market_data.atl_change_percentage.usd > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {data && formatNumber(data.currentData?.market_data.atl_change_percentage.usd.toFixed(2))}%</p>
                  </div>
                  <p className='text-xs self-end'>
                    {data && convertISODate(data.currentData?.market_data.atl_date.usd)}</p>
                </div>
              </div>


            </div>




          </div>

        </div>
      </section>



      <section className='overflow-x-auto' >
        <TickersCripto
          id={id}
          totalVolumen24Hs={data && data.simplePrice[id].usd_24h_vol} />
      </section>


    </div>
  )
}

export default DetailCripto