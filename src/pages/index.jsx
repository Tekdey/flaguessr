import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import Earth from '../components/index/Earth'

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
      <h1 className='text-3xl p-5'>Welcome to Flaguessr</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse fuga excepturi assumenda. Laboriosam nisi voluptatibus aliquam voluptatem sint, asperiores non pariatur nam optio facilis rem officiis nostrum voluptas autem. Nobis!</p>
    </header>
    {size > 320 && (
    <Canvas>
      <React.Suspense fallback={null}>
        <Earth />
      </React.Suspense>
    </Canvas>)}
    </>
  )
}

export default Index