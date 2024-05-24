import React from 'react'
import NavBar from './NavBar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
    <NavBar></NavBar>
    <div className="mb-4">
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className="flex overflow-auto">
        {albumsData.map((item,index)=>(
          <AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}></AlbumItem>
        ))}
      </div>
    </div>
    <div className="mb-4">
      <h1 className='my-5 font-bold text-2xl'>Todays Biggest Hit</h1>
      <div className="flex overflow-auto">
        {songsData.map((item,index)=>(
          <SongItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}></SongItem>
        ))}
      </div>
    </div>
    </>
  )
}

export default DisplayHome