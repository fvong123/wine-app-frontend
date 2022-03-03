import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://SarcasticYellowgreenDevice.fvong123.repl.co/'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson.wine)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  const wineList = data.map((item) =>
    <tr>
      <td className="text-left px-2">{item.name}</td>
      <td className="text-left px-2">{item.region}</td>
      <td className="text-left px-2">{item.variety}</td>
      <td className="px-2">{item.price / 100}</td>
      <td className="px-2">{item.rating}</td>
    </tr>
  )

  
  return (
    <nav>
      <div className="flex-col bg-white text-black font-mono p-2 mt-4">
        <Link to="/" className="p-2 italic">Back to restaurants</Link>
        <div className="p-2 content-start justify-start">
                <h1 className='text-lg font-bold text-left font-mono'>MuMu Wine List</h1>
                <div className="w-full justify-start">
                  <table className="table border border-gray-500 border-collapse w-4/5 mt-14">
                    <thead className="">
                      <tr className="border-b-2 border-black">
                        <th className="bg-gray-300 text-left px-2">Wine</th>
                        <th className="bg-gray-300 text-left px-2">Region</th>
                        <th className="bg-gray-300 text-left px-2">Variety</th>
                        <th className="bg-gray-300 text-left px-2">Price</th>
                        <th className="bg-gray-300 text-left px-2">Rating</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-400">
                          {wineList}
                    </tbody>
                  </table>
                </div>
        </div>
      </div>
    </nav>
  );
};

export default Content;