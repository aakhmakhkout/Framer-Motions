import React from 'react'
import {motion} from "motion/react"

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <motion.div className="box"
       animate={{
        x:500,
        y:100,
        rotate:30
      }}
      transition={{
      duration:1,
    }}
    ></motion.div>

      <motion.div className='circle' 
      initial={{opacity:0}} 
      animate={{
        opacity:1,
        x:300,
        y:100
      }}
      transition= {{
        duration: 2,
        delay:2,
      }}
      
      >
      </motion.div>

      <motion.div className='anothershape'
      initial={{ maskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)" }}
      animate={{ maskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)",
        rotate: 360
      }}
      transition= {{
        duration: 3,
        delay:4,
        repeat:5,
        ease:"anticipate"
      }}
      >
      
      </motion.div>


      <div>
        <motion.h1 
        animate={{
          scale:1.1,
          x:100
        }}

        transition={{
          duration:2,
          delay:1
        }}
        
        >
          hello this is framer motion practice section
        </motion.h1>
      </div>


      <motion.div className='hoverandtap'
      initial={{y:10}}
      animate={{y:0}}
      whileHover={{scale:1.1, backgroundColor: "rgb(17, 44, 119)"}}
      transition={{duration:0.3}}
      whileTap={{scale:0.9}}
      
      ></motion.div>

      <motion.div className='keyframes'
      initial={{
        x:0,
        y:0
      }}

      animate={{
        x:[0, 300, 300, 0, 0],
        y:[0, 0, 300, 300, 0],
        rotate:[0, 360, -360, 0]
      }}

      transition={{
        duration:4
      }}
      
      ></motion.div>
    </div>
  )
}

export default App