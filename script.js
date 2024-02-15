let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 300;

//sky
ctx.fillStyle = "darkblue";
ctx.fillRect(0, 0, 600, 300);
//cloud
ctx.fillStyle = "grey";
ctx.fillRect(0, 0, 600, 60);
//water
ctx.fillStyle = "blue";
ctx.fillRect(0, 200, 600, 300);
//land
ctx.fillStyle = "darkgreen";
ctx.fillRect(400, 200, 600, 300);
//ighthouse base
ctx.strokeStyle = "darkred";
ctx.lineWidth = 100;
ctx.beginPath();
ctx.moveTo(500, 50);
ctx.lineTo(500, 200);
ctx.stroke();
//lighthouse door
ctx.fillStyle = "grey";
ctx.fillRect(480, 130, 40, 70);
//lighthouse window thingy
ctx.strokeStyle = "white";
ctx.lineWidth = 100;
ctx.beginPath();
ctx.moveTo(500, 0);
ctx.lineTo(500, 50);
ctx.stroke();
//lighthouse light
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(450, 30, 20, 0, 2 * Math.PI);
ctx.fill();
//lighthouse light beam
ctx.fillStyle = "rgba(221, 255, 0, 0.536)";
ctx.beginPath();
ctx.moveTo(450, 30);
ctx.lineTo(250, 100);
ctx.lineTo(300, 200);
ctx.lineTo(450, 30);
ctx.fill();
//boat body
ctx.fillStyle = "grey";
ctx.fillRect(130, 185, 150, 90);
//boat stock
ctx.fillStyle = "grey";
ctx.fillRect(140, 120, 40, 90);
//top of boat stock
ctx.fillStyle = "red";
ctx.fillRect(140, 120, 40, 10);
//boat window
ctx.fillStyle = "lightblue";
ctx.fillRect(250, 200, 30, 40);
//text
ctx.font = "15px Arial";
ctx.fillStyle = "white";
ctx.fillText("art by kale smart", 480, 280);
//shark image
let sharkImg = document.getElementById("sharkEl");
ctx.drawImage(sharkImg, 30, 200, 90, 90);
