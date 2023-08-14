"use client"

import React, { useEffect, useState } from 'react'

const Category = () => {

  const [data, setData] = useState();

  useEffect(()=>{
    const url = 'https://fakestoreapi.com/products';
    fetch(url).then(response=>response.json()).then(data=>setData(data))
  },[])

  return (
    <div className='category'>
        <div className='container'>
            <div className='flex flex-cols-4'>
                {
                  data &&Object.keys(data).map((item, index)=>{
                    return(
                      <div key={index}>
                        {/* <img src={`http://localhost:3001/${data[item].image}`} alt="product"/> */}
                        <a href='#'><h2>{item.title}</h2></a>
                        <p>{item.price} USD</p>
                      </div>
                    )
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default Category