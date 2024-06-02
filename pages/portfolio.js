"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@/app/globals.css'
import Nav from '@/components/Nav';
import TradingViewWidget from '@/components/TradingViewWidget';
import ProfitCalculator from '@/components/ProfitCalculator';

export default function Portfolio() {
    const [veri, setVeri] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedData = localStorage.getItem('sepet');
                if (storedData) {
                    const dataid = JSON.parse(storedData).map(item => item.id).join(',');
                    const response = await axios.get(`https://api.coinlore.net/api/ticker/?id=${dataid}`);
                    setVeri(response.data);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
   

    return (
        <div>
            <Nav></Nav>
            <div className="container mx-auto p-4">
                <h1 className="text-xl font-bold">Favoriler</h1>
                {veri ? veri.map(coin => (
                    <div key={coin.id} className="bg-gray-800 p-4 m-2 rounded-lg shadow-lg grid grid-cols-4">
                        <div className='col-span-4 sm:col-span-1'>
                            <div>
                                <a href={"/coin/" + coin.id}><h2 className="text-xl font-bold text-yellow-500">{coin.name} ({coin.symbol})</h2></a>
                                <p className="text-lg">Price: <span >${parseFloat(coin.price_usd).toLocaleString()}</span></p>
                                <p className="text-lg">Market Cap: <span>${parseFloat(coin.market_cap_usd).toLocaleString()}</span></p>
                                <p className="text-lg">24h Volume: <span>${parseFloat(coin.volume24).toLocaleString()}</span></p>
                                <p className="text-lg">Total Supply: <span>{parseFloat(coin.tsupply).toLocaleString()}</span></p>
                                <p className="text-lg">Circulating Supply: <span >{parseFloat(coin.csupply).toLocaleString()}</span></p>
                                <p className="text-lg">Rank: <span >{coin.rank}</span></p>
                                <p className="text-lg">24h Change: <span className={`text-lg ${coin.percent_change_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>{coin.percent_change_24h}%</span></p>
                            </div>
                        
                        </div>
                        <div className='col-span-4 sm:col-span-3' style={{ height: "500px" }}>
                            <TradingViewWidget coin={coin.symbol}></TradingViewWidget>
                        </div>
                    </div>

                )) : <div>Favorileriniz Boş</div>}
            </div>
        </div>
    );
}
