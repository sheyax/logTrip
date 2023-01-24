import React from 'react';

export default function TripLogPage() {
  return (
    <div className=''>
   <h1 className="p-3 font-semibold m-auto text-center">Daily Trip Log</h1>

{/* Time */}
   <div className='m-auto w-4/5'>

    <div className='flex items-center'>
      <p>Date</p>
    <input type="date" name="Date" id="" 
    className=' p-5 bg-transparent outline-none text-sm 
     text-gray-600 placeholder-gray-400' />
    </div>
  

    <div className="flex justify-between">
      <div>
      <p className='text-gray-600'>Start Time</p>
    <input type="time" name="startTime" id="" 
    className='p-2 outline-none bg-transparent text-sm font-semibold border-b border-gray-600'/>
      </div>
 
 <div className=''>
 <p className='text-gray-600'>End Time</p>
    <input type="time" name="startTime" id=""
    className='p-2 bg-transparent text-sm font-semibold outline-none border-b border-gray-600' />
 </div>



      
    </div>
{/* Location */}

    <div className='mt-5'>
  <div>
    <p className='text-gray-600'>From</p>
    <input type="text" name="startLocation" id="" 
    className='w-full outline-none  bg-transparent border-b border-gray-600 text-sm'/>
    
  </div>

  <div>
    <p className='text-gray-600' >To</p>
    <input type="text" name="endLocation" id=""
    className='w-full outline-none  bg-transparent border-b border-gray-600 text-sm'/>
  </div>
</div>


{/* ODOMETER */}

<div className='mt-5 flex justify-between items-center'>
  <div>
    <p>Beginning Odometer</p>
    <input type="number" name="startOdometer" id="" placeholder='0000000'
    className='outline-none  bg-transparent border-b border-gray-600 text-sm' />
  </div>

  <div>
    <p>Ending Odometer</p>
    <input type="number" name="endOdometer" id="" placeholder='0000000'
    className='outline-none  bg-transparent border-b border-gray-600 text-sm' />
  </div>
</div>

<button  className='bg-green-500 p-2 w-1/4 mt-5 text-white font-semibold mx-auto'>Save</button>
    
   </div>
    </div>
  );
}
