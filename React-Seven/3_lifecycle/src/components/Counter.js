//Component unmount durumu anlatiliyor

import React, {useState, useEffect } from 'react'

function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => { //Herhangi bir state in her değişme durumu anında çalışır
    console.log('State Güncellendi !')

    const interval = setInterval(() => {
      setNumber(number + 1) //n burada number oluyor
    }, 1000);

    return () => clearInterval(interval) //component unmount edildiğinde çalışır

  })

  return(
    <>
      <div>{number}</div>
    </>
  )
}

export default Counter