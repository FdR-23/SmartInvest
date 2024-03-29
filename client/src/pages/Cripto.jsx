import React from "react";

import ListCoinCripto from "../components/Cripto/ListCripto/ListCoinCripto.jsx";
import InfoGlobal from "../components/Cripto/InfoGlobal.jsx";
import TendenceCripto from "../components/Cripto/TendenceCripto.jsx";
import NewsCripto from "../components/Cripto/NewsCripto.jsx";
import Loading from "../components/Loading.jsx";
import { CriptoList } from "../services/cripto/servicesCripto.js"
import { useFetch } from "../components/useFetch.js";
const Cripto = () => {
  const { data, loading, error } = useFetch(CriptoList)
  if (loading) {
    return <Loading />
  } else {
    return (
      <div id="cripto" className="flex flex-col sm:[&>section]:py-4 mx-4">

        <div className="overflow-hidden">
          <InfoGlobal />
        </div>

        <section className="w-full h-full sm:px-2">
          <h2 className="text-2xl font-bold p-2 whitespace-nowrap border-b border-black -skew-x-12">
            Noticias Cripto
          </h2>
          <NewsCripto />
        </section>

        <section className="sm:px-2">
          <h2 className="text-2xl font-bold p-2 whitespace-nowrap border-b border-black -skew-x-12">
            Lista de Cripto Monedas
          </h2>

          <div className="mb-[50px] w-full h-full relative box-border">

            <div className="min-h-[500px]  px-2 pt-[16px] flex flex-col sm:flex-row sm:space-x-2">
              <div className="overflow-x-auto py-2">
                <ListCoinCripto />
              </div>
              <div className="sm:w-[200px] h-full flex-1 py-2 mt-2">
                <TendenceCripto />
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  }
};

export default Cripto;
