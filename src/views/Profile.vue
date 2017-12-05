<template>
  <div>
    <div class="banner">
      <div class="valign-wrapper">
        <div class="valign">
          <div class="time">00:00:00</div>
          <img src="/src/assets/ghost.png" alt="">
        </div>
      </div>
          <canvas id="myCanvas1" class="canvas"></canvas>
          <canvas id="myCanvas2" class="canvas"></canvas>
          <canvas id="myCanvas3" class="canvas"></canvas>
          <canvas id="myCanvas4" class="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Profile",
  data() {
    return {};
  },
  created: function() {},
  methods: {
    drawWave: function() {
      wave("myCanvas1", 420, 170, 300, 120, 620);
      wave("myCanvas2", 500, 280, 180, 250, 620);
      wave("myCanvas3", 460, 180, 580, 300, 180);
      // var x0 = 500 * Math.random() + 50;
      // var y0 = 200 * Math.random() + 50;
      // var c0 = 100 * Math.random() + 50;
      cloud();
    }
  },
  mounted: function() {
    // 在created时捕获不到canvas
    this.drawWave();
  }
};

function wave(elementId, startH, a, b, c, d) {
  var canvas = document.getElementById(elementId);
  var w = window.screen.width;
  var h = 600;
  canvas.width = w;
  canvas.height = h;
  var ctx = canvas.getContext("2d");

  var startTime = Date.now();
  var time = 2000;
  var clockwise = 1;
  var cp1x, cp1y, cp2x, cp2y;

  requestAnimationFrame(function waveDraw() {
    let t = Math.min(1.0, (Date.now() - startTime) / time);
    if (clockwise) {
      cp1x = a + 55 * t;
      cp1y = b + 72 * t;
      cp2x = c - 51 * t;
      cp2y = d - 79 * t;
    } else {
      cp1x = a + 55 - 55 * t;
      cp1y = b + 72 - 72 * t;
      cp2x = c - 51 + 51 * t;
      cp2y = d - 79 + 79 * t;
    }
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, w, h);
    ctx.save();

    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(0, startH);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, w, startH);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();

    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fill();

    ctx.restore();
    if (t == 1) {
      startTime = Date.now();
      clockwise = !clockwise;
    }

    requestAnimationFrame(waveDraw);
  });
}

function cloud() {
  var canvas = document.getElementById("myCanvas4");
  var h = 600;
  canvas.width = window.screen.width;
  canvas.height = h;
  var ctx = canvas.getContext("2d");

  var x = 500 * Math.random() + 50;
  var y = 200 * Math.random() + 50;
  var w = 100 * Math.random() + 50;

  //云朵移动范围即画布宽度
  var maxWidth = window.screen.width;
  //如果超过边界从头开始绘制
  x = x % maxWidth;
  //云朵高度为宽度的60%
  var ch = w * 0.6;
  //开始绘制云朵

  ctx.beginPath();
  ctx.fillStyle = "#fff";

  var grd = ctx.createLinearGradient(0, 0, 0, y);
  grd.addColorStop(0, "rgba(255,255,255,0.8)");
  grd.addColorStop(1, "rgba(255,255,255,0.5)");
  ctx.fillStyle = grd;

  ctx.arc(x, y, w * 0.19, 0, 360, false);
  ctx.arc(x + w * 0.08, y - ch * 0.3, w * 0.11, 0, 360, false);
  ctx.arc(x + w * 0.3, y - ch * 0.25, w * 0.25, 0, 360, false);
  ctx.arc(x + w * 0.6, y, w * 0.21, 0, 360, false);
  ctx.arc(x + w * 0.3, y - ch * 0.1, w * 0.28, 0, 360, false);
  ctx.closePath();

  ctx.fill();
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 300px;
  background-color: #97bfbc;
  color: #fff;
  font-size: 14px;
  position: relative;
}
.valign-wrapper {
  display: table;
  width: 100%;
  height: 100%;
  > .valign {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
}
.time {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}
.canvas {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 140px;
}
</style>
