import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  const getData = async()=>{
      const response = await axios.get('https://picsum.photos/v2/list?page='+page+'&limit=10');      
      setData(response.data);
  }

  const PreviousPage=()=>{
    if(page > 1) {
      setData([]);
      setpage(page-1);
    }
  }

  const NextPage=()=>{
    setData([]);
    setpage(page+1);
  }

  let printUserData = <h3 className='text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading</h3>
  if (data.length > 0 ) 
  {
    printUserData = data.map(function(e, idx){      
          return <Card key={idx} e={e} id={idx} />
      })
  }
   
  useEffect(function(){
    getData()
  },[page]);
  return (
    <>        
      

      {/* <button onClick={function(){
        
      }} className='bg-gray-400 px-3 py-2 rounded-2xl m-2 cursor-pointer active:scale-95'>Get Data</button>  */}

      <h1 className='text-4xl font-medium py-4 text-center text-white'>Image Gallary</h1>
      <div className='flex flex-wrap gap-5 p-10 md:justify-start justify-center'>        
        {printUserData}
       </div>
       <div className='flex flex-wrap gap-4 justify-center mb-5'>      
          <button style={{opacity:page==1?0.5:1}} className='bg-amber-400 px-4 py-2 rounded cursor-pointer active:scale-95' onClick={function(){
            PreviousPage()}}>Prev</button>
            <h2 className='py-2'>Page {page}</h2>
          <button className='bg-amber-400 px-4 py-2 rounded cursor-pointer active:scale-95' onClick={function(){
            NextPage()}}>Next</button>
       </div>

    </>    
  )
}

export default App