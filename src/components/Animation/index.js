/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-plusplus */
import Glowparticle from './glowparticles';

class Animation {
  constructor(colors) {
    this.canvas = document.getElementById('canvas-background');
    this.ctx = this.canvas.getContext('2d');
    this.colors = colors;

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.totalParticles = 8;
    this.particles = [];
    this.maxRadius = 900;
    this.minRadius = 400;

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHegiht = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHegiht * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.ctx.globalCompositeOperation = 'saturation';

    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
      const item = new Glowparticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHegiht,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        this.colors[curColor],
      );

      if (++curColor >= this.colors.length) {
        curColor = 0;
      }
      this.particles[i] = item;
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHegiht);

    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHegiht);
    }
  }
}

export default Animation;
