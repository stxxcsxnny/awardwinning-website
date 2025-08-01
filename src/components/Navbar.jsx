import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact Us'];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isAudioIndicatorActive, setIsAudioIndicatorActive] = useState(false);
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  // Scroll logic
  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // GSAP animation when isNavVisible changes
  useEffect(() => {
    if (!navContainerRef.current) return;

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  }, [isNavVisible]);

  // Audio toggle
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsAudioIndicatorActive((prev) => !prev);
  };

  // Play/pause audio on state change
  useEffect(() => {
    if (!audioElementRef.current) return;

    if (isAudioPlaying) {
      audioElementRef.current.play().catch((err) => console.error(err));
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed insets-x-0 top-4 z-50 h-16 border-0 transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" className="w-10" alt="Logo" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                  {item}
                </a>
              ))}
            </div>
            <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
              <audio ref={audioElementRef} src="/audio/loop.mp3" loop className="hidden" />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${isAudioIndicatorActive ? 'active' : ''}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
