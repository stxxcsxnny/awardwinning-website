import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';

// Component name must start with a capital letter
const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        className="absolute top-0 left-0 size-full object-cover object-center"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-end p-5 text-blue-50" >
              <div>
                  <h1 className='bento-title special-font'>
                      {title}
                  </h1>
                  {description && (<p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>)}
                  
        </div>
      </div>
    </div>
  );
};

const Bentotilt =({children, className=''})=> {
  const [transformStyle, setTransformStyle] = React.useState('');
  const itemRef = React.useRef();
  const handleMouseMove = (event) => {
    const item = itemRef.current;
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setTransformStyle(`rotateX(${y / 30}deg) rotateY(${x / 30}deg)`);
    
  }

  const handleMouseLeave = () => {
    
  }
  
 
 
  return (


    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle}}>
      {children}

    </div>
  )
}

const Feature = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">into the Metagame Layer</p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world
          </p>
        </div>
        <Bentotilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={<>radia<b>n</b>t</>}
            description="A cross-platform, cross-device, cross-gaming platform that allows you to play and earn in the metaverse"
            isComingSoon={true}
          />
              </Bentotilt>
              <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                  <Bentotilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                      <BentoCard
                          src="/videos/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
                       description="An anime and gaming-inspired NFT collection - the IP primed for expansion "
                          
            />
            
          </Bentotilt> 
          <Bentotilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={<>met<b>al</b>verse</>}
              description="A virtual world where you can play, earn, and socialize with friends"
            
            
            />
            
          </Bentotilt>
           <Bentotilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={<>az<b>u</b>l</>}
              description="A gamified social hub, adding new dimension of play to your social experience  "
            
            
            />
            
          </Bentotilt>
          <Bentotilt className='bento-tilt_2'>
            <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
              <h1 className='bento-title special-font max-w-64'>More coming soon!</h1>
              <TiLocationArrow className='m-5 scale-[5] self-end'/>
            </div>

          </Bentotilt>
          <Bentotilt className='bento-tilt_2'>
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className='size-full object-cover object-center'
            
            />

          </Bentotilt>
              </div>
      </div>
    </section>
  );
};

export default Feature;
