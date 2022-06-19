//functions-----------------------------------
circle = (x, y, txt="", cl="white") => {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = cl;
    ctx.fill();
    ctx.font = "18px Georgia";
    ctx.fillText(txt, x+5, y-5);
}
line_3D = (p1, p2, cl="green") => {
    if(p1.old_pos[2]>=df && p2.old_pos[2]>=df){
        ctx.beginPath();
        ctx.moveTo(Canvas.width/2+p1.s*__a, Canvas.height/2+p1.t*__a);
        ctx.lineTo(Canvas.width/2+p2.s*__a, Canvas.height/2+p2.t*__a);
        ctx.strokeStyle = cl;
        ctx.stroke();
    }
}
triangle = (p1, p2, p3, cl="green") => {
    if(p1.old_pos[2]>=df && p2.old_pos[2]>=df && p3.old_pos[2]>=df){
        ctx.beginPath();
        ctx.moveTo(Canvas.width/2+p1.s*__a, Canvas.height/2+p1.t*__a);
        ctx.lineTo(Canvas.width/2+p2.s*__a, Canvas.height/2+p2.t*__a);
        ctx.lineTo(Canvas.width/2+p3.s*__a, Canvas.height/2+p3.t*__a);
        ctx.fillStyle = cl;
        ctx.fill();
    }
}

sin = x => Number(Math.sin(x).toFixed(5));
cos = x => Number(Math.cos(x).toFixed(5));
const pi = Math.PI;
rot_x = (vec, phi=0) => {
    let _vec = [];
    _vec[0] = vec[0];
    _vec[1] = vec[1]*cos(phi)-vec[2]*sin(phi);
    _vec[2] = vec[1]*sin(phi)+vec[2]*cos(phi);
    return _vec;
}
rot_y = (vec, phi=0) => {
    let _vec = [];
    _vec[0] = vec[0]*cos(phi)+vec[2]*sin(phi);
    _vec[1] = vec[1];
    _vec[2] = -vec[0]*sin(phi)+vec[2]*cos(phi);
    return _vec;
}
scal = (a, vec) => {
    let _vec = [];
    for(let x in vec){ _vec[x] = a*vec[x] }
    return _vec;
}
ad_v = (v1, v2, v3=[0,0,0], v4=[0,0,0]) => {
    let _vec = [];
    for(let x in v1){ _vec[x] = Number(v1[x])+Number(v2[x])+Number(v3[x])+Number(v4[x]) }
    return _vec;
}
mod = vec => {
    let s = 0;
    for(let x of vec){ s+=x*x }
    return Math.sqrt(s);
}

//this.old_pos = ad_v(scal(this.pos[0], _i),scal(this.pos[1], _j),scal(this.pos[2], _k), _O);

//end of functions----------------------------