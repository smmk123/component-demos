import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import BloombergArrayFilter from "../services/bloombergArrayFilter";

export default function BloombergNews(){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if(!data) fetchData();
        return () => {
        };
      }, []);

    const fetchData = async () => {
        try {
          const response = await axios.post('/api/proxy', {
            url: 'https://bb-finance.p.rapidapi.com/news/list',
            params: {
                id: 'markets'
            },
            header:{
                'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
            }
          });
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return(
        <>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md m-10 m-w-[50%] basis-1/2">
            <h1 className="text-2xl">Bloomberg News Ticker:</h1>
            <div className="p-2">
              {data ? (<BloombergArrayFilter data={data}/>):(<span>Loading...</span>)}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={fetchData}>Refresh Data</button>
        </div>
        </>
    )
}