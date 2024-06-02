"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import '../../app/globals.css'
import TradingViewWidget from '@/components/TradingViewWidget';
import Nav from '@/components/Nav';
import ProfitCalculator from '@/components/ProfitCalculator';
import Footercripto from '@/components/Footercripto';

export default function CoinDetail() {
    const [coin, setCoin] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (id) {
            const fetchCoinData = async () => {
                try {
                    const response = await axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`)
                    setCoin(response.data[0])
                } catch (error) {
                    console.error("Error fetching coin data: ", error)
                } finally {
                    setLoading(false)
                }
            }
            fetchCoinData()
        }
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!coin) {
        return <div>No data found for this coin.</div>
    }

    return (
        <div>
            <Nav></Nav>
            
            <div className='container mx-auto shadow-lg p-3 mt-4 bg-slate-800 rounded'>
                <div className='grid grid-cols-1 sm:grid-cols-6 gap-4'>
                    <div id='coin-info' className='col-span-6 sm:col-span-1  bg-slate-700 p-4 rounded'>
                        <h1 className='text-2xl font-bold mb-4'>{coin.name} ({coin.symbol})</h1>
                        <div className='w-full'>
                            <div className='flex justify-between mb-2'>
                                <span className='text-gray-400'>Price:</span>
                                <span className='text-white'>${parseFloat(coin.price_usd).toLocaleString()}</span>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <span className='text-gray-400'>Market Cap:</span>
                                <span className='text-white'>${parseFloat(coin.market_cap_usd).toLocaleString()}</span>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <span className='text-gray-400'>24h Volume:</span>
                                <span className='text-white'>${parseFloat(coin.volume24).toLocaleString()}</span>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <span className='text-gray-400'>1h Change:</span>
                                <span style={{ color: coin.percent_change_1h > 0 ? "forestgreen" : "crimson" }}>
                                    {coin.percent_change_1h}%
                                </span>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <span className='text-gray-400'>24h Change:</span>
                                <span style={{ color: coin.percent_change_24h > 0 ? "forestgreen" : "crimson" }}>
                                    {coin.percent_change_24h}%
                                </span>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <span className='text-gray-400'>7d Change:</span>
                                <span style={{ color: coin.percent_change_7d > 0 ? "forestgreen" : "crimson" }}>
                                    {coin.percent_change_7d}%
                                </span>
                            </div>
                            <div className='mt-4 text-center'>
                                <button
                                    className=' bg-slate-600 text-white px-1 py-1 rounded hover:bg-blue-600'
                                    onClick={() => router.back()}
                                >
                                    Back to List
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id='coin-chart' className='col-span-6 sm:col-span-5 bg-slate-700  rounded'>

                        <div className='w-full h-96 bg-slate-600 rounded flex items-center justify-center'style={{height:"500px"}}>
                            <TradingViewWidget coin={coin.symbol}></TradingViewWidget>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3'>
                    <ProfitCalculator currentPrice={coin.price_usd} coinName={coin.symbol}></ProfitCalculator>
                </div>
                
            </div>
            <Footercripto></Footercripto>
        </div>

    );
}
