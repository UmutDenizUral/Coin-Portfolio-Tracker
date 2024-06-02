import React from 'react'
import { useEffect, useState } from 'react';


export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [count, setCount ] = useState(0)


  useEffect(() => {
  
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);
    // Temizleme fonksiyonu ile interval'i temizle
    return  () =>  clearInterval(interval)
  }, []); // Boş bağımlılık listesi ile, bu useEffect sadece bir kere çalışır ve bileşen yüklendiğinde bir kereye mahsus olarak saat güncellenir.

  return (
    <div className='pr-3 w-20'>
      
      {currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}
    </div>
  )
}
