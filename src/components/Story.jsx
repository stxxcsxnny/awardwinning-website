import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import RoundedCorners from './RoundedCorners'
import Button from './Button'

const Story = () => {

    const frameRef = React.useRef(null)
    
    const handleMouseLeave = () => {
        const element = frameRef.current;
        
        gsap.to(element, {
            duration: 0.3,
            rotationX: 0,
            rotationY: 0,
           
            ease: "power1.out",

            
        })
    }
    
    const handleMouseEnter = () => {
        
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;


        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;


        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotationX: rotateY,
            transformPerspective: 500,
            ease: "power1.out",

            
        })
        

    }
    const handleMouseUp = () => {
        
    }


  return (
      <section id='story' className='min-h-dvh w-screen bg-black text-blue-50' clas>
          <div className='flex size-full flex-col items-center justify-center py-10 pb-24'>
              <p className='font-general text-sm uppercase md:text-[10px]'>
              the multiverse ip world
              </p>  
              <div className='relative size-full'>
                  <AnimatedTitle
                      title="The St<b>o<b/>ry of<br/> a hidden real<b>m<b/>"
                      sectionId="#story"
                      containerClass="mt-5 pointer-events mix-blend-difference relative z-10"
                  /> 
                  <div className='story-img-container'>
                      <div className='story-img-mask'>
                          <div className='story-img-content'>
                              <img
                                  src='/img/entrance.webp'
                                  alt='entrance'
                                  className='object-contain '
                                  ref={frameRef}
                                  onMouseLeave={handleMouseLeave}
                                  onMouseUp={handleMouseUp}
                                  onMouseEnter={handleMouseEnter }
                                  onMouseMove={handleMouseMove }
                              />
                          </div>
                      </div>

                      <RoundedCorners/>
                  </div>
              </div>
              <div className='-mt-80 flex w-full justify-center -md:-mt-64 md:me-44 md:justify-end'>
                  <div className='flex h-full flex-col items-center md:items-start'>
                      <p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>
                      where realms converge, lies zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.</p> 
                      <Button id="realm-button"
                          title="discover prologue"
                          containerClass="mt-5"
                      />
                  </div>
               </div>

          </div>
      
      </section>
  )
}

export default Story