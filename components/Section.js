"use client"
import React, { useState, useEffect } from 'react';
import Time from './Time';
import axios from 'axios';
import Excahangedata from './Excahangedata';
import Product from './Product';
import TradingViewWidget from './TradingViewWidget';
import SymbolOverViewWidget from './SymbolOverViewWidget';

export default function Section() {
    const [veri, setVeri] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('')
    const [page, setPage] = useState(false)
    const [bool, setBool] = useState(true)

    const [sepet, setSepet] = useState(() => {
        const storedSepet = localStorage.getItem('sepet')
        return storedSepet ? JSON.parse(storedSepet) : []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.coinlore.net/api/tickers/");
                const veriWithFavs = response.data.data.map(coin => ({...coin,favori: sepet.some(item => item.id === coin.id)
                    // sepetki durumu kontrol edip gelen dataya tanımlar
                }));
                setVeri(veriWithFavs);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, [sepet]);

    useEffect(() => {
        localStorage.setItem('sepet', JSON.stringify(sepet));
    }, [sepet]);

    const addFav = (coinid) => {
        const itemIndex = sepet.findIndex(item => item.id === coinid);
        let updatedSepet = [...sepet];
        let updatedVeri = veri.map(coin => {
            if (coin.id === coinid) {
                coin.favori = !coin.favori;
            }
            return coin;
        });

        if (itemIndex !== -1) {
            // Koşulu sağlayan itemi diziden çıkart
            updatedSepet.splice(itemIndex, 1);
        } else {
            // Koşulu sağlamıyorsa sepet dizisine ekle
            const newItem = { id: coinid }; // Yeni öğeyi oluşturun
            updatedSepet.push(newItem);
        }

        setSepet(updatedSepet);
        setVeri(updatedVeri);
    };

    const getTopTenCoins = (veri) => {
        const topTen = veri
            .sort((a, b) => b.market_cap_usd - a.market_cap_usd)
            .slice(0, 10);
        return topTen;
    };

    const filterData = (veri) => veri.filter(coin => {
        return coin.symbol.toLowerCase().includes(searchText.toLowerCase());
    });

    const dataHandler = (veri) => {
        return veri.map((coin) => (
            <tr key={coin.id}>
                <td>
                    <button onClick={() => addFav(coin.id)} className=' text-xl hover:text-yellow-500'>
                        {coin.favori ? '-' : '+'}
                    </button>
                </td>
                <td className='p-0 hover:text-yellow-500'><a href={'/coin/' + coin.id}>{coin.symbol}</a></td>
                <td className='flex'>
                    {coin.percent_change_1h > 0 ? (
                        <i style={{ color: "forestgreen" }} className="fa-solid fa-arrow-up pr-1"></i>
                    ) : (
                        <i style={{ color: "crimson" }} className="fa-solid fa-arrow-down pr-1"></i>
                    )}
                    {coin.price_usd}
                </td>
                <td style={{ color: coin.percent_change_1h > 0 ? "forestgreen" : "crimson" }}>{coin.percent_change_1h}</td>
                <td style={{ color: coin.percent_change_24h > 0 ? "forestgreen" : "crimson" }}>{coin.percent_change_24h}</td>
            </tr>
        ));
    };

    // Filtremede kullanılan string veren func
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    // Filtrelenen harfleri içeren yeni dizi veren func
    const loadcoin = (e) => {
        document.querySelectorAll('#pageselect li').forEach(li => {
            li.classList.remove('activepage');
        });
        e.target.classList.add('activepage');
        setPage(e.target.id === 'toptencoin');
    };

    const sortIncrease = () => {
        setBool(!bool);
        const sortedData = [...veri].sort((a, b) => a.percent_change_24h - b.percent_change_24h);
        bool ? setVeri(sortedData.reverse()) : setVeri(sortedData);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container mx-auto shadow-lg p-1 mt-2'>
            <SymbolOverViewWidget />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 center'>
                <div id='section1' className='p-2 m-3 rounded-md'>
                    <ul id='pageselect' className='my-2 grid grid-cols-2 text-center'>
                        <li id='coinler' onClick={loadcoin} className='bg-slate-600 activepage cursor-pointer'>
                            Coinler
                        </li>
                        <li id='toptencoin' onClick={loadcoin} className='bg-slate-600 cursor-pointer'>
                            Top 10 Coin
                        </li>
                    </ul>
                    <div className='flex rounded pb-2 items-center'>
                        <Time />
                        <input
                            className='w-2/5 bg-slate-600 rounded pr-3'
                            placeholder='Coin ara'
                            value={searchText}
                            onChange={handleSearch}
                        />
                        <i className="fa-solid fa-magnifying-glass pl-3"></i>
                    </div>
                    <div id='tab1' className='overflow-auto min-h-40' style={{ height: "40rem" }}>
                        <table id='cointable' className='table-auto w-full'>
                            <thead className='rounded'>
                                <tr className='sticky top-0 bg-slate-600'>
                                    <th>Fav</th>
                                    <th>Sembol</th>
                                    <th className='text-left pl-2'>Fiyat</th>
                                    <th>1h %</th>
                                    <th onClick={sortIncrease} className='cursor-pointer'>24h %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {page ? dataHandler(filterData(getTopTenCoins(veri))) : dataHandler(filterData(veri))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id='section2' className='p-2 m-3 rounded-md'>
                    <Excahangedata />
                </div>
                <div id='section3' className='p-2 m-3 rounded-md overflow-auto min-h-40' style={{ height: "50rem" }}>
                    <Product data={veri} />
                </div>
            </div>
            <div className='w-full col-span-3' style={{ height: "700px" }}>
                <TradingViewWidget coin="BTC" />
            </div>
        </div>
    );
}
