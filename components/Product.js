import React, { useEffect, useState } from 'react';



const BitcoinCard = ({ data }) => {
  
    return (
        <div className="flex flex-wrap justify-center">
            {data.map((coin) => (
                <div key={coin.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 text-white p-6 m-4">
                    <div className="flex items-center mb-4">
                        <div>
                            <p className="font-bold text-xl">{coin.name} ({coin.symbol}) </p>
                            <p className="text-gray-400">Rank: {coin.rank}</p>
                            <button onClick={() => addFav(coin.id)}>ekle</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-200 font-semibold">Price: ${coin.price_usd}</p>
                        <p className={`text-sm ${coin.percent_change_24h >= 0 ? 'text-green-600' : ' text-red-700'}`}>
                            24h Change: {coin.percent_change_24h}%
                        </p>
                        <p className={`text-sm ${coin.percent_change_1h >= 0 ? 'text-green-600' : 'text-red-700'}`}>
                            1h Change: {coin.percent_change_1h}%
                        </p>
                        <p className={`text-sm ${coin.percent_change_7d >= 0 ? 'text-green-600' : 'text-red-700'}`}>
                            7d Change: {coin.percent_change_7d}%
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-200 font-semibold">Market Cap: ${parseFloat(coin.market_cap_usd).toLocaleString()}</p>
                        <p className="text-gray-200 font-semibold">24h Volume: ${parseFloat(coin.volume24).toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-gray-400">Circulating Supply: {parseFloat(coin.csupply).toLocaleString()} </p>
                        <p className="text-gray-400">Total Supply: {parseFloat(coin.tsupply).toLocaleString()} </p>
                        <p className="text-gray-400">Max Supply: {(coin.msupply) ? parseFloat(coin.msupply).toLocaleString() : "-"}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BitcoinCard;
