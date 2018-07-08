function formatCanvas(){
    let canvas = document.getElementById('welcome-canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.zIndex = '-10';
    let w = canvas.width;
    let h = canvas.height;

    let ctx = canvas.getContext('2d', "welcome");
    drawDecal(ctx, w, h);
}


function drawDecal(ctx, w, h){

    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(w, 0);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.strokeStyle = 'aliceblue';
    ctx.stroke();
    ctx.fillStyle = 'aliceblue';
    ctx.fill();
}

formatCanvas();

addEventListener('resize', () => {
    formatCanvas();
});