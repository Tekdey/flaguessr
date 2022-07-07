import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import Earth from '../components/index/Earth'
import {Link} from "react-router-dom"

const Index = () => {

  const [size, setSize] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function getScreenSize() {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', getScreenSize)

    return () => window.removeEventListener('resize', getScreenSize)
  }, [size])
  
  return (
    <>
    <header className='text-center'>
      <h1 className='text-3xl p-10'>Welcome to Flaguessr</h1>
      <p className='text-lg'>Flagessr is a site that will allow you to learn more about the countries of the world!</p>
      <p className='text-lg'>There is a <Link to="/country" className='text-blue-500'>wiki</Link> as well as an intuitive <Link to="/guesstheflag" className='text-blue-500'>game</Link></p>
    </header>
    {size > 320 && (
    <Canvas style={{
      width: "100%",
      height: "100%"
    }}>
      <React.Suspense fallback={null}>
        <Earth />
      </React.Suspense>
    </Canvas>)}
    </>
  )
}

export default Index