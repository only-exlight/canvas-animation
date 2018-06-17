let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

class Round {
    constructor() {
        this.minRadius = 5;
        this.radius = 10;
        this.positionX = Math.round(Math.random() * window.innerWidth);
        this.positionY = Math.round(Math.random() * window.innerHeight);
        this.color = "rgba(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.random() + ")";
        this.maxRadius = Math.round(Math.random() * 130);
    }
    roundRect() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 5;
        ctx.arc(this.positionX, this.positionY, this.radius, 0, 360);
        ctx.fill();
        ctx.closePath();
        if (this.radius < this.maxRadius) {
            this.radius++;
        }
        if (this.radius >= this.maxRadius) {
            this.radius = this.minRadius;
            this.positionX = Math.round(Math.random() * window.innerWidth);
            this.positionY = Math.round(Math.random() * window.innerHeight);
            this.maxRadius = Math.round(Math.random() * 150);
            this.color = "rgba(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.random() + ")";
        }
    }
}

canvas.onclick = function (Event) {
    let x = Event.clientX,
        y = Event.clientY;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 360)
    ctx.fill();
}

let round = [];
for (let i = 1; i <= 40; i++) {
    round[i] = new Round();
}

setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    round.forEach(r => r.roundRect());
}, 1000 / 20);