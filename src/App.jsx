import Shiroko from './assets/Shiroko_Young_Portrait.webp'
import Moon from './assets/moon.png'
import Land from './assets/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const ref = useRef();
  return (
    <>  
    <div className='bg-black text-7xl font-bold'>
      <Parallax 
        pages={4}
        ref={ref}
        className='bg-gradient-to-b from-black to-sky-950'>
        
        <ParallaxLayer 
          offset={0} 
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${Moon})`,
            backgroundSize: "cover",
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2} 
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${Land})`,
            backgroundSize: "cover",
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0.2} 
          speed={0.05}
          onClick={() => rec.current.scrollTo(3)} 
          className='flex items-center justify-center'>
          <h2 className='text-white'>
            Youkoso, Watashi no Website
          </h2>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3.2} 
          speed={2}
          onClick={() => rec.current.scrollTo(0)} 
          >
          <h2 className='text-white text-center'>
            Web Development is Fum
          </h2>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{
            start: 0.9,
            end: 2.9,
          }}
        >
          <div className='flex justify-center'>
            <img src={Shiroko} alt="" className='h-screen' />
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
    </>
  )
}

export default App
