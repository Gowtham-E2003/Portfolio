import React, { useEffect, useRef } from 'react';

/**
 * BackgroundCanvas
 * Implements an interactive anti-gravity / zero-G particle canvas.
 * - Starfield with depth layers (distant stars + floating zero-G dust particles)
 * - Mouse repulsion physics: particles deflect smoothly away from cursor
 * - Constellation tether lines between nearby particles
 * - Performance optimized with requestAnimationFrame & DPI scaling
 */
export default function BackgroundCanvas({ gravityMode = 'zero-g' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 160, isHovering: false });
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle count scaled to screen dimensions
    const isMobile = width < 768;
    const particleCount = isMobile ? 55 : 120;
    const particles = [];

    // Colors matching warm editorial palette (Amber, Navy, Warm Gold, Slate)
    const colors = [
      { r: 201, g: 151, b: 62 },  // Warm Amber
      { r: 15, g: 22, b: 36 },    // Deep Navy
      { r: 232, g: 185, b: 106 }, // Warm Gold
      { r: 90, g: 100, b: 117 },  // Warm Slate
    ];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.baseRadius = Math.random() * 2.2 + 0.8;
        this.radius = this.baseRadius;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.4 + 0.15;
        this.baseAlpha = this.alpha;
        
        // Zero-G drift velocity (sinusoidal & gentle)
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = -(Math.random() * 0.45 + 0.15); // gentle upward float
        this.originalVx = this.vx;
        this.originalVy = this.vy;

        // Oscillation parameters
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = Math.random() * 0.02 + 0.005;
        this.amplitude = Math.random() * 0.4 + 0.1;
      }

      update() {
        // Natural zero-G sinusoidal oscillation
        this.angle += this.angularSpeed;
        const driftX = Math.sin(this.angle) * this.amplitude;

        // Mouse Repel Physics
        const dx = this.x - mouseRef.current.x;
        const dy = this.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRef.current.radius && mouseRef.current.isHovering) {
          // Calculate anti-gravity repulsion vector
          const force = (1 - dist / mouseRef.current.radius) * 3.5;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force * 0.3;
          this.vy += Math.sin(angle) * force * 0.3;
          this.alpha = Math.min(0.85, this.baseAlpha + 0.35);
        } else {
          // Gradual momentum damping back to zero-G steady drift
          this.vx += (this.originalVx - this.vx) * 0.04;
          this.vy += (this.originalVy - this.vy) * 0.04;
          this.alpha += (this.baseAlpha - this.alpha) * 0.05;
        }

        this.x += this.vx + driftX;
        this.y += this.vy;

        // Wrap around boundaries smoothly
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
        ctx.shadowBlur = this.radius * 3;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha * 0.5})`;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Static distant ambient dust motes
    const starCount = isMobile ? 60 : 130;
    const staticStars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.4 + 0.4,
      alpha: Math.random() * 0.35 + 0.08,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2
    }));

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw static ambient dust motes
      staticStars.forEach(star => {
        star.phase += star.twinkleSpeed;
        const currentAlpha = star.alpha * (0.6 + 0.4 * Math.sin(star.phase));
        ctx.fillStyle = `rgba(90, 100, 117, ${currentAlpha * 0.5})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });

      // 2. Draw connections between nearby floating particles (Warm constellation mesh)
      const maxConnectDist = isMobile ? 70 : 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201, 151, 62, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 3. Update & render particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    // Event Listeners for mouse tracking and resize
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      staticStars.forEach(star => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [gravityMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 will-change-transform"
      style={{ opacity: 0.65 }}
      aria-hidden="true"
    />
  );
}
