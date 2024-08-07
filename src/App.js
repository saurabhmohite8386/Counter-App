import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  
  function decHandler(){
    setCount(count-1);
  }

  function incHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className='text-[#0398d4] font-[md] text-2xl'>Increment & Decrement</div>
      <div className='bg-[white] flex gap-12 justify-center py-3 rounded-md text-[25px] text-[#344151]'>
        <button onClick={decHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>-</button>
        <div className='font-bold gap-12 text-5xl'>{count}</div>
        <button onClick={incHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>+</button>
      </div>
      <button onClick={resetHandler} className='bg-[#0398d4] rounded-md text-lg text-[white] w-20 '>Reset</button>
    </div>
  );
}

export default App;
