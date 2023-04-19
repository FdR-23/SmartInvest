import React from "react";

import { GlobalInfo } from "../../services/cripto/servicesCripto.js";
import { useFetch } from "../useFetch.js";
import { currencyWithoutDecimals } from "../../services/currencyWithoutDecimals.js";

const InfoGlobal = () => {
  const { data } = useFetch(GlobalInfo);

  return (
    <div
      className="flex flex-row w-full min-w-[1024px] overflow-auto  animate-slide-in  

        [&>div]:flex [&>div]:items-center [&>div]:space-x-1 justify-around p-2 
        [&>div>span]:text-blue-600 [&>div>span]:text-[12px] 
        [&>div>p]:text-[12px] [&>div>p]:font-semibold "
    >
      <div>
        <p>Monedas:</p>
        <span>{data && data.active_cryptocurrencies}</span>
      </div>

      <div>
        <p>Intercambios:</p>
        <span>{data && data.markets}</span>
      </div>

      <div>
        <p>Cap.de mercado:</p>
        <span>
          {data && currencyWithoutDecimals(data.total_market_cap.usd)}{" "}
          <span>US$</span>
        </span>
      </div>

      <div>
        <p>Volumen en 24 h:</p>
        <span>
          {data && currencyWithoutDecimals(data.total_volume.usd)}{" "}
          <span>US$</span>
        </span>
      </div>
      <div>
        <p>Dominio:</p>
        <p className="pr-1">BTC:</p>
        <span className="pr-1">
          {data && data.market_cap_percentage?.btc.toFixed(1)} %
        </span>
        <p className="pr-1">ETH:</p>
        <span className="pr-1">
          {data && data.market_cap_percentage?.eth.toFixed(1)} %
        </span>
        <p className="pr-1">USDT:</p>
        <span className="pr-1">
          {data && data.market_cap_percentage?.usdt.toFixed(1)} %
        </span>
      </div>
    </div>
  );
};

export default InfoGlobal;
