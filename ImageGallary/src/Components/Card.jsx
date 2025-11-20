import React from 'react'

const Card = (props) => {                
  return (    
    <div  key={props.id} className='flex flex-col'>              
        <div className='w-44 h-40'>
            <a href={props.e.url} target='__blank'><img src={props.e.download_url} className='h-full w-full object-cover' alt="image not Found" /></a>
        </div>
        <h1 className='text-lg font-medium py-2 text-center text-white'>{props.e.author}</h1>
    </div>
  )
}

export default Card