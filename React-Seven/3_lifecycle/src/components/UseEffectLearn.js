import {useEffect, useState} from 'react';

//state in değişme durumu nasıl yakalanabilir ?

function UseEffectLearn(){

  const [number, setNumber] = useState(0);
  const [name, setName] = useState('Bekir');

  useEffect(() => { //Herhangi bir state in her değişme durumu anında çalışır
    console.log('State Güncellendi !')
  })

  useEffect(() => { //number state inin her değişme durumunda çalışır
    console.log('Number değişti')
  }, [number])

  useEffect(() => { //number state inin her değişme durumunda çalışır
    console.log('Name değişti')
  }, [name])

  useEffect(() => { //name yada number state inin her değişme durumunda çalışır
    console.log('Number yada Name değişti')
  }, [number, name])

  // ! statelerin ilk tanımlama anlarında atama yapıldığı için log lar çalışır proje init olduğunda

  return(
    <>
      <div>{number}</div>
      <button onClick={() => {setNumber(number+1)}}>İncrease</button>
      <br />
      <hr />

      <div>{name}</div>
      <button onClick={()=> {setName('Mehmet')}}>Update Name</button>
    </>
  )
}

export default UseEffectLearn;