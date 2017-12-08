<template>
  <div>
    <div class="banner">
      <div class="valign-wrapper">
        <div class="valign">
          <div class="time">{{tweenedNowTime.hour}}:{{tweenedNowTime.minute}}:{{tweenedNowTime.second}}</div>
          <img src="/src/assets/ghost.png" alt="">
        </div>
      </div>
          <canvas id="myCanvas1" class="canvas size"></canvas>
          <canvas id="myCanvas2" class="canvas size"></canvas>
          <canvas id="myCanvas3" class="canvas size"></canvas>
          <canvas id="myCanvas4" class="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
const TWEEN = require("@tweenjs/tween.js");

export default {
  name: "Profile",
  data() {
    return {
      time: {
        hour: 0,
        minute: 0,
        second: 0
      },
      tweenedTime: {}
    };
  },
  created: function() {
    this.updateTime();
    this.tweenedTime = Object.assign({}, this.time);
  },
  methods: {
    drawWave: function() {
      wave("myCanvas1", 420, 170, 300, 120, 620);
      wave("myCanvas2", 500, 280, 180, 250, 620);
      wave("myCanvas3", 460, 180, 580, 300, 180);
      cloud();
    },
    updateTime: function() {
      var now = new Date();
      var nowHour = now.getHours();
      var nowMin = now.getMinutes();
      var nowSec = now.getSeconds();
      this.time = {
        hour: nowHour,
        minute: nowMin,
        second: nowSec
      };
      setTimeout(() => {
        this.updateTime();
      }, 1000);
    },
    formatTime: function(val) {
      if (+val < 10) {
        return "0" + val;
      } else {
        return +val;
      }
    }
  },
  mounted: function() {
    // 在created时捕获不到canvas
    this.drawWave();
  },
  computed: {
    tweenedNowTime: function() {
      return {
        hour: this.formatTime(this.tweenedTime.hour.toFixed(0)),
        minute: this.formatTime(this.tweenedTime.minute.toFixed(0)),
        second: this.formatTime(this.tweenedTime.second.toFixed(0))
      };
    }
  },
  watch: {
    time: function() {
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }

      new TWEEN.Tween(this.tweenedTime).to(this.time, 750).start();

      animate();
    }
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

  // var x = 300 * Math.random() + 50;
  // var y = 500 * Math.random() + 50;
  // var w = 100 * Math.random() + 50;
  var x = 50,
    y = 450,
    w = 80;

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

  // x,y,r,sAngle,eAngle,counterclockwise
  ctx.arc(x, y, w * 0.25, 0, 2 * Math.PI, false);
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
  &.size {
    width: 100%;
    height: 140px;
  }
}
</style>
