"use client"
import React, { useState, useEffect } from 'react';

export default function ProfitLossCalculator({ coinName, currentPrice }) {
    const [buyPrice, setBuyPrice] = useState(currentPrice);
    const [sellPrice, setSellPrice] = useState(currentPrice); 
    const [amount, setAmount] = useState(1);
    const [profitLoss, setProfitLoss] = useState(null);

    useEffect(() => {
        calculateProfitLoss(buyPrice, sellPrice, amount);
    }, [buyPrice, sellPrice, amount]);

    const calculateProfitLoss = (buyPrice, sellPrice, amount) => {
        if (!buyPrice || !sellPrice || !amount) {
            setProfitLoss(null);
            return;
        }

        const buyTotal = parseFloat(buyPrice) * parseFloat(amount);
        const sellTotal = parseFloat(sellPrice) * parseFloat(amount);
        const result = sellTotal - buyTotal;
        setProfitLoss(result);
    };

    return (
        <div className='container mx-auto shadow-xl border border-slate-800 p-4 mt-4 bg-slate-800 rounded'>
            <h2 className='text-2xl font-bold mb-4'>
                {coinName} - ${parseFloat(currentPrice).toLocaleString()}
            </h2>
            <div className='mb-4'>
                <label className='block text-gray-400 mb-2' htmlFor='buyPrice'>Alış Fiyatı (USD):</label>
                <input
                    type='number'
                    id='buyPrice'
                    value={buyPrice}
                    onChange={(e) => setBuyPrice(e.target.value)}
                    className='w-full p-2 bg-slate-600 text-white rounded'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-400 mb-2' htmlFor='sellPrice'>Satış Fiyatı (USD):</label>
                <input
                    type='number'
                    id='sellPrice'
                    value={sellPrice}
                    onChange={(e) => setSellPrice(e.target.value)}
                    className='w-full p-2 bg-slate-600 text-white rounded'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-400 mb-2' htmlFor='amount'>Miktar:</label>
                <input
                    type='number'
                    id='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className='w-full p-2 bg-slate-600 text-white rounded'
                />
            </div>
            {profitLoss !== null && (
                <div className='mt-4'>
                    <h3 className='text-xl font-bold'>
                        {profitLoss > 0 ? 'Kar: ' : 'Zarar: '}
                        <span className={profitLoss > 0 ? 'text-green-500' : 'text-red-500'}>
                            ${Math.abs(profitLoss).toLocaleString()}
                        </span>
                    </h3>
                </div>
            )}
        </div>
    );
}
