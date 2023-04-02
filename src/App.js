//import logo from './logo.svg';
import React from 'react';


function App() {
  return (
    <div className="App">

        <div class="flex flex-col justify-center items-center container mt-8 mb-8">
            <div className="p-6 md:w-8/12 lg:w-6/12 mx-auto text-center  text-slate-800 text-2xl font-bold leading-6 tracking-widest ">
              Your Choice Plans
            </div>
            <div className="p-5 md:w-8/12 lg:w-6/12 mx-auto text-center  text-slate-600 text-sm font-medium">
            Lorem idivsum dolor sit, amet consectetur adipisicing elit. Expedita tenetur, excepturi quos quam sequi voluptatem repellat animi fugiat suscipit? Placeat voluptates quas non est ab aut corporis distinctio quia odio.
            </div>
       </div>

     
        <div className='grid md:grid-cols-4 gap-8 p-10'>
{/* card free */}
          <div className='p-4 border border-red-200 rounded-xl shadow-md lg:max-w-md hover:shadow-[0px_5px_10px_0px_rgba(255,0,0,0.2)] '>
            <div >
              <p className='text-sm text-red-500/50 font-semibold'>Start</p>
              <p className='text-2xl text-red-500/50 font-extrabold'> Free</p>
              <ul className='list-disc text-stone-500 font-semibold p-6'>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
              </ul>
              <button className='w-full py-1 px-auto my-3 text-red-400 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-red-400 focus:shadow-outline hover:text-slate-50 border-2 border-red-200 font-semibold'>Buy</button>
              <p className="py-5 w-full text-center text-stone-500 text-xs font-normal">
                Lorem idivsum dolor sit eviding
              </p>
            </div>
            
          </div>
{/* card best */}
          <div className='p-4 border border-red-200 rounded-xl shadow-md lg:max-w-md hover:shadow-[0px_5px_10px_0px_rgba(255,0,0,0.2)] ' >
            <div >
              <p className='text-sm text-red-500/50 font-semibold'>Start</p>
              <p className='text-2xl text-red-500/50 font-extrabold'>Best</p>
              <ul className='list-disc text-stone-500 font-semibold p-6'>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
              </ul>
              <button className='w-full py-1 px-auto my-3 text-red-400 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-red-400 focus:shadow-outline hover:text-slate-50 border-2 border-red-200 font-semibold'>Buy</button>
              <p className="py-5 w-full text-center text-stone-500 text-xs font-normal">
                Lorem idivsum dolor sit eviding
              </p>
            </div>
            
          </div>
{/* card medium */}
          <div className='p-4 border border-red-200 rounded-xl shadow-md lg:max-w-md hover:shadow-[0px_5px_10px_0px_rgba(255,0,0,0.2)]'>
            <div >
              <p className='text-sm text-red-500/50 font-semibold'>Start</p>
              <p className='text-2xl text-red-500/50 font-extrabold'> Medium</p>
              <ul className='list-disc text-stone-500 font-semibold p-6'>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
              </ul>
              <button className='w-full py-1 px-auto my-3 text-red-400 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-red-400 focus:shadow-outline hover:text-slate-50 border-2 border-red-200 font-semibold'>Buy</button>
              <p className="py-5 w-full text-center text-stone-500 text-xs font-normal">
                Lorem idivsum dolor sit eviding
              </p>
            </div>
            
          </div>
{/* card Fair */}
          <div className='p-4 border border-red-200 rounded-xl shadow-md lg:max-w-md hover:shadow-[0px_5px_10px_0px_rgba(255,0,0,0.2)] '>
            <div >
              <p className='text-sm text-red-500/50 font-semibold'>Start</p>
              <p className='text-2xl text-red-500/50 font-extrabold'> Fair</p>
              <ul className='list-disc text-stone-500 font-semibold p-6'>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
                  <li>content 1</li>
              </ul>
              <button className='w-full py-1 px-auto my-3 text-red-400 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-red-400 focus:shadow-outline hover:text-slate-50 border-2 border-red-200 font-semibold'>Buy</button>
              <p className="py-5 w-full text-center text-stone-500 text-xs font-normal">
                Lorem idivsum dolor sit eviding
              </p>
            </div>
            
          </div>

        </div>
      </div>

  );
}

export default App;
