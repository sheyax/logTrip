import React from 'react';
import DriverCard from '../Components/DriverCard';
import database from '../database.json'
import TripCard from '../Components/TripCard'
export default function Home() {

  const sample= database[0]
  let totalTrip= 0
  // Total Trip Function
  sample.trip.forEach((data)=>{
    totalTrip+=(data.endOdo-data.startOdo)
    
  })

  //console.log(totalTrip)
  return (
    <div>

    <DriverCard name={sample.name} vehicle={sample.vehicle} se={sample.se}/>

<div className='flex justify-between items-center mx-5'>
<h1 className="text-xl p-2  font-bold text-gray-700">Trips</h1>

<p className='text-gray-600'>Total Milage: {totalTrip} Km</p>
</div>
    
    {sample.trip?.map((trip)=>(
      <TripCard key={trip.startTime}
      date={trip.date}
      startOdo={trip.startOdo}
      endOdo={trip.endOdo}
      startTime={trip.startTime}
      endTime={trip.endTime}
      startLoc={trip.startLoc}
      endLoc={trip.endLoc}/>
    ))}
    

    </div>
  );
}
