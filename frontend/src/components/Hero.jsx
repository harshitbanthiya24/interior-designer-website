import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import './Hero.css';

export default function Hero() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // THREE.js setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0.1);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create floating cubes
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({
      color: 0xc4a747,
      emissive: 0x4a3f2f
    });

    const cubes = [];
    for (let i = 0; i < 5; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );
      cube.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
      scene.add(cube);
      cubes.push(cube);
    }

    // Add light
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x808080);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cubes.forEach((cube, index) => {
        cube.rotation.x += 0.001 * (index + 1);
        cube.rotation.y += 0.002 * (index + 1);
      });
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-3d" ref={containerRef}></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Space
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Professional interior design with stunning animations
        </motion.p>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(196, 167, 71, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Portfolio
        </motion.button>
      </motion.div>
    </section>
  );
}
