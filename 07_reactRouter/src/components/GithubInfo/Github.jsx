import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';
function Github() {

    // const [info,setInfo]=useState([])
    //     useEffect(() => {
    //       fetch(`https://api.github.com/&{}`)
    //       .then(res=> res.json())
    //       .then(data=>setInfo(data))
    //     }, [])      
    
    const info=useLoaderData()
  // const { gitId='Goutam1404' } = useParams();

  return (
    <div className="text-center my-4 mx-6 bg-gray-600 text-white p-4 text-3xl rounded-lg">
      Github Followers: {info.followers}
      <img
        src={info.avatar_url}
        alt="avatar photo"
        width="300px"
        className="flex rounded-full"
      />
    </div>
  );
}

export default Github
//if we are using loader method of router then we can do like this
export const githubLoader=async()=>{
    const response =await fetch("https://api.github.com/users/Goutam1404");
    return response;
}