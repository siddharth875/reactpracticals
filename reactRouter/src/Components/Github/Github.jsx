import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(reponse => reponse.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   } )
  // },[])
  return (
    <div className='text-center bg-gray-700 p-7 text-white text-2xl font-bold'>Github Followers : {data.followers}
    <img className="w-40" src={data.avatar_url} alt="Avatar Url" />
    </div>
  )
}

export default Github