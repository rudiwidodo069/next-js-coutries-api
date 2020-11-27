import Link from 'next/link';
import { useState } from 'react';

const setDecimal = population => {
    let bilangan = population;

    let reverse = bilangan.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');

    return ribuan;
}

const setOrderBy = (direction, population) => {
    if (direction === 'asc') {
        population.sort((a, b) => a.population > b.population ? 1 : -1);
    }
    if (direction === 'desc') {
        population.sort((a, b) => a.population > b.population ? -1 : 1);
    }

    return population;
}

export default function MainContent({ data }) {
    const orderByDirection = setOrderBy('desc', data);

    return (
        <div className="grid grid-cols-3 gap-5 box-content mt-48">
            {
                orderByDirection.map((data, index) => {
                    const decimal = setDecimal(data.population);
                    return (
                        <div key={index} className="main-card w-full p-3 rounded flex justify-center items-center flex-col mt-8 shadow-lg bg-white hover:bg-gray-300">
                            <h1 className="text-3xl uppercase border-b-4  mb-5 mt-3 text-green-600 font-bold h-72 font-medium main-name-country">{data.name}
                            </h1>
                            <div className="w-full h-full p-2 main-box-img">
                                <img
                                    src={data.flag}
                                    alt={data.name}
                                    width="100%"
                                    height="100%"
                                    className="rounded shadow-md" />
                            </div>
                            <h3 className="text-2xl uppercase text-gray-500 mb-5 mt-10 font-medium main-population">
                                Population : <span className="text-green-500">{decimal}</span>
                            </h3>
                            <Link href={`Detail/${data.alpha3Code}`}>
                                <div className="bg-green-400 px-5 py-3 text-2xl font-bold text-white uppercase rounded tracking-wider mb-2 cursor-pointer hover:bg-green-700 btn-detail">Detail</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}