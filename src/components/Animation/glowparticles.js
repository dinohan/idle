/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const PI2 = Math.PI * 2;

class Glowparticle {
  constructor(x, y, radius, rgb) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;

    this.vx = Math.random() * 4;
    this.vy = Math.random() * 4;

    this.sinValue = Math.random();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  animate(ctx, stageWidth, stageHegiht) {
    this.sinValue += 0.01;
    this.radius += Math.sin(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 3;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 3;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 3;
    } else if (this.y > stageHegiht) {
      this.vy *= -1;
      this.y -= 3;
    }

    ctx.beginPath();
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius,
    );
    g.addColorStop(0, `rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1)`);
    g.addColorStop(1, `rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0)`);
    ctx.fillStyle = g;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();
  }
}

export default Glowparticle;
