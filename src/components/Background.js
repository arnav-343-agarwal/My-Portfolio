'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // --- 3D Background ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const starVertices = [];
    for (let i = 0; i < 1500; i++) {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        starVertices.push(x, y, z);
    }
    
    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0x94a3b8, size: 0.03 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    camera.position.z = 10;
    
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const clock = new THREE.Clock();
    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        requestAnimationFrame(animate);
        stars.rotation.x = elapsedTime * 0.05;
        stars.rotation.y = elapsedTime * 0.05;
        
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
        camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Smooth Scrolling & GSAP Animations ---
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    gsap.registerPlugin(ScrollTrigger);

    // Staggered fade-in for all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        const sectionTitle = section.querySelector('.section-title');
        const contentElements = section.querySelectorAll('.content-element');
        
        if (sectionTitle) {
            gsap.fromTo(sectionTitle, 
                { autoAlpha: 0, y: 40 },
                { duration: 1, autoAlpha: 1, y: 0, ease: 'power3.out', scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    once: true,
                }}
            );
        }
        
        if(contentElements.length > 0) {
             gsap.fromTo(contentElements, 
                { autoAlpha: 0, y: 40 },
                { duration: 1, autoAlpha: 1, y: 0, ease: 'power3.out', stagger: 0.2, scrollTrigger: {
                    trigger: contentElements[0],
                    start: 'top 85%',
                    once: true,
                }}
            );
        }
    });

    gsap.from("#hero h1", { duration: 1.2, y: 50, opacity: 0, ease: "power3.out", delay: 0.2 });
    gsap.from("#hero p", { duration: 1.2, y: 50, opacity: 0, ease: "power3.out", delay: 0.4 });
    
    gsap.to(".timeline-progress", {
        scaleY: 1,
        scrollTrigger: {
            trigger: ".timeline",
            start: "top center",
            end: "bottom bottom",
            scrub: 1.5
        }
    });

    gsap.to('.illustration-container', {
        y: -100,
        scrollTrigger: {
            trigger: '.illustration-container',
            start: 'top bottom',
            scrub: 1.5,
        }
    });

    gsap.utils.toArray('.skill-icon').forEach((icon, i) => {
        gsap.to(icon, {
            y: -60,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top bottom',
                scrub: 1.5 + i * 0.1
            }
        });
    });

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        gsap.ticker.remove(lenis.raf);
        lenis.destroy();
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
};

export default Background;
