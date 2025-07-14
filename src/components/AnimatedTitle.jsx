import gsap from 'gsap';
import React from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const AnimatedTitle = ({ title, containerClass }) => {

    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse',
                }
            });
            titleAnimation.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease: 'power2.inOut',
                stagger: 0.05, // Adjust the stagger value to control the delay between each word
                
            })
        },containerRef);

        return () => {
            ctx.revert();
        }
    },[])

  return (
   <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split('<br/>').map((line, lineIndex) => (
        <div
          key={`line-${lineIndex}`}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(' ').map((word, wordIndex) => (
            <span
              key={`word-${lineIndex}-${wordIndex}`}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;