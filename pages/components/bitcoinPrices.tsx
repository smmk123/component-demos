import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function BitcoinPrices(){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if(!data) fetchData();
        return () => {
        };
      }, []);


    const fetchData = async () => {
        try {
          const response = await axios.post('/api/proxy', {
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {
                from_currency: 'BTC',
                function: 'CURRENCY_EXCHANGE_RATE',
                to_currency: 'USD'
            },
            headers: {
              'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
            }
          });
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return(
        <>
            
    <div className="bg-gray-100 rounded-lg p-6 shadow-md">
    <h2 className="text-xl font-bold mb-4">Exchange Rate Information:</h2>
    {data ? (
                    <><p>
                        <span className="font-semibold">From Currency:</span> {data['Realtime Currency Exchange Rate']['1. From_Currency Code']} ({data['Realtime Currency Exchange Rate']['1. From_Currency Code']})
                    </p><p>
                            <span className="font-semibold">To Currency:</span> {data['Realtime Currency Exchange Rate']['4. To_Currency Name']} ({data['Realtime Currency Exchange Rate']['3. To_Currency Code']})
                        </p><p>
                            <span className="font-semibold">Exchange Rate:</span> {data['Realtime Currency Exchange Rate']['5. Exchange Rate']}
                        </p><p>
                            <span className="font-semibold">Last Refreshed:</span> {data['Realtime Currency Exchange Rate']['6. Last Refreshed']} {data['Realtime Currency Exchange Rate']['7. Time Zone']}
                        </p><p>
                            <span className="font-semibold">Bid Price:</span> {data['Realtime Currency Exchange Rate']['8. Bid Price']}
                        </p><p>
                            <span className="font-semibold">Ask Price:</span> {data['Realtime Currency Exchange Rate']['9. Ask Price']}
                        </p></>
                    ) :  (<p>loading...</p>)}

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={fetchData}>Refresh Data</button>
                </div>
      </>
        
    );
}