import React,{ useState } from 'react'

const App = () => {
  let [counter, setCounter] = useState(5);
  const update = () =>{
    setCounter(counter+5);
  }

  const decrease = () =>{
  setCounter(counter-5);
  }
  
  return (
    <div>
      <h1>วินลูกชิ้นทอด</h1>
      <h2>ไม้ละ {counter*1} บาท
      <button onClick={update}>+</button>
      <button onClick={decrease}>-</button>
      </h2>
      <hr />
      <p>5 ไม้ {counter*5} บาท</p>
      <p>10 ไม้ {counter*10} บาท</p>
      <p>15 ไม้ {counter*15}บาท</p>
      <p>20 ไม้ {counter*20}บาท</p>
    </div>
  )
}

export default App