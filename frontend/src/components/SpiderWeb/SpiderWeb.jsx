// 📁 src/components/SpiderWeb/SpiderWeb.jsx
import React, { useEffect, useRef } from 'react';
import './SpiderWeb.css';

const SpiderWeb = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;

    // Responsive canvas
    const resize = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const ctx = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;

    // Grid settings
    const gridRows = 10;
    const gridCols = 18;
    const points = [];
    const mouse = { x: width / 2, y: height / 2 };

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.size = 1.1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#00fff7";
        ctx.shadowColor = "#a259ff";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.min(120 / (dist || 1), 2.5);
        const angle = Math.atan2(dy, dx);
        this.x += Math.cos(angle) * force * 0.5;
        this.y += Math.sin(angle) * force * 0.5;
        // Spring back to grid
        this.x += (this.originX - this.x) * 0.07;
        this.y += (this.originY - this.y) * 0.07;
        this.draw();
      }
    }

    const createPoints = () => {
      points.length = 0;
      width = canvas.width;
      height = canvas.height;
      const xGap = width / (gridCols + 1);
      const yGap = height / (gridRows + 1);
      for (let i = 1; i <= gridCols; i++) {
        for (let j = 1; j <= gridRows; j++) {
          points.push(new Point(i * xGap, j * yGap));
        }
      }
    };

    const connectPoints = () => {
      // Neon gradient
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#00f0ff");
      grad.addColorStop(0.5, "#a259ff");
      grad.addColorStop(1, "#00ff99");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < Math.min(width, height) / 10) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
      ctx.clearRect(0, 0, width, height);
      if (points.length === 0) createPoints();
      points.forEach(p => p.update());
      connectPoints();
      requestAnimationFrame(animate);
    };

    // Opacity control
    const handleMouseMove = e => {
      canvas.style.opacity = 1;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      canvas.style.opacity = 0;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    canvas.addEventListener("click", () => {
      points.forEach(p => {
        p.x += Math.random() * 30 - 15;
        p.y += Math.random() * 30 - 15;
      });
    });

    createPoints();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="spider-canvas"
      style={{
        opacity: 0,
        transition: "opacity 0.4s",
        pointerEvents: "auto",
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1
      }}
    />
  );
};

export default SpiderWeb;
