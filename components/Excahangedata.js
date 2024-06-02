"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Excahangedata() {
    const [dataStorage, setDataStorage] = useState([]);
    const dataid = [5, 9, 11, 24, 66, 96, 128, 134, 171, 177, 260, 487, 637, 16, 56, 187];
    useEffect(() => {
        axios.get("https://api.coinlore.net/api/exchanges/")
            .then((response) => {

                const newDataStorage = dataid.map(id => response.data[id]);
                setDataStorage(newDataStorage);
            })
            .catch((error) => console.error("Error fetching data:", error));

    }, []);

    const formattedNumber = (number) => {
        return number.toLocaleString('tr-TR', { maximumFractionDigits: 2 });
    }
    const formatCountry = (country) => {
        return country.split(',')[0];
    }
    return (
        <div>
            <div id='exchangedata' className='m-1 mt-3'>
                <div className='m-1 mb-9'>
                <h1>Borsa Verileri</h1>
               
                </div>
               
                <table className='table-auto w-full'>
                    <thead>
                        <tr className='text-center text-nowrap p-3 bg-slate-600'>
                            <th>Borsa</th>
                            <th>Hacim (USD)</th>
                            <th>Ülke</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {dataStorage.map(exchange => (
                            <tr className='' key={exchange.id}>
                                <td className='pr-4 hover:text-yellow-500 ' > <a href={exchange.url} target="_blank">{exchange.name} </a></td>
                                <td className='pr-4'>{formattedNumber(exchange.volume_usd)}</td>
                                <td className='pr-4'>{formatCountry((exchange.country) ? exchange.country : "-")}</td>
                             
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
