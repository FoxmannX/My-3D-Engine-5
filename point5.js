const df = 2;
const __a = 70;

let _i = [1,0,0];
let _j = [0,1,0];
let _k = [0,0,1];

let _O = [-2,-2,6];

let p = [], t = [];

class Point{
    constructor(pos, nm = ""){
        this.pos = pos;
        this.nm = nm;
        this.old_pos = ad_v(scal(this.pos[0], _i),scal(this.pos[1], _j),scal(this.pos[2], _k), _O);
        this.s = this.old_pos[0]*df/this.old_pos[2];
        this.t = -this.old_pos[1]*df/this.old_pos[2];
    }
    exist(){
        this.old_pos = ad_v(scal(this.pos[0], _i),scal(this.pos[1], _j),scal(this.pos[2], _k), _O);
        this.s = this.old_pos[0]*df/this.old_pos[2];
        this.t = -this.old_pos[1]*df/this.old_pos[2];
    }
    draw(){
        if(this.old_pos[2]>df){circle(Canvas.width/2+this.s*__a, Canvas.height/2+this.t*__a, this.nm/*+`(${this.pos})`*/);}
    }
}

class Triangle{
    constructor(p1, p2, p3, cl="blue"){
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.cl = cl;

        this.av_z = (this.p1.old_pos[2]+this.p2.old_pos[2]+this.p3.old_pos[2])/3;
        this.av_x = (this.p1.old_pos[0]+this.p2.old_pos[0]+this.p3.old_pos[0])/3;
    }
    draw(){
        this.av_x = (this.p1.old_pos[0]+this.p2.old_pos[0]+this.p3.old_pos[0])/3;
        this.av_z = (this.p1.old_pos[2]+this.p2.old_pos[2]+this.p3.old_pos[2])/3;
        triangle(this.p1, this.p2, this.p3, this.cl);
    }
}

const Sq_xy0 = {
    pnt : [
        [0, 0, 0],
        [4, 0, 0],
        [0, 4, 0],
        [4, 4, 0]
    ],
    trg : [
        [0, 1, 2],
        [3, 1, 2],
    ]
}
const Sq_xz0 = {
    pnt : [
        [0, 0, 0],
        [4, 0, 0],
        [0, 0, 4],
        [4, 0, 4]
    ],
    trg : [
        [0, 1, 2],
        [3, 1, 2],
    ]
}

const Sq_xy1 = {
    pnt : [
        [0, 0, 0],
        [2, 2, 0],
        [-2, -2, 0],
        [2, -2, 0],
        [-2, 2, 0],
    ],
    trg : [
        [0, 1, 4],
        [0, 2, 4],
        [0, 3, 2],
        [0, 3, 1],
    ]
}
const Sq_xz1 = {
    pnt : [
        [0, 0, 0],
        [2, 0, 2],
        [-2, 0, -2],
        [2, 0, -2],
        [-2, 0, 2],
    ],
    trg : [
        [0, 1, 4],
        [0, 2, 4],
        [0, 3, 2],
        [0, 3, 2],
    ]
}

class Shit{
    constructor(origin, obj, _type=1){
        this.or = origin;
        this.ptor = ad_v(scal(origin[0], _i),scal(origin[1], _j),scal(origin[2], _k), _O);
        if(_type==1) 
            this.cl = ["#00ffff", "#3399ff", "#00ffff", "#3399ff"];
        else if(_type==2) 
            this.cl = ["#33cc33", "#00cc66", "#33cc33", "#00cc66"];
        else if(_type==3) 
            this.cl = ["#ff3300", "#ff5050", "#ff3300", "#ff5050"];
        else if(_type==4) 
            this.cl = ["#cccc00", "#ffff33", "#cccc00", "#ffff33"];

        this._pnt = [];
        this._trg = [];

        obj.pnt.forEach((x,i)=>{this._pnt[i] = new Point(ad_v(x, this.or))});
        obj.trg.forEach((x,i)=>{
            let p0 = this._pnt[x[0]];
            let p1 = this._pnt[x[1]];
            let p2 = this._pnt[x[2]];
            this._trg[i] = new Triangle(p0, p1, p2, this.cl[i]);
        });
        
        this.av_z = this.ptor[2];
    }
    draw(){
        this.ptor = ad_v(scal(this.or[0], _i),scal(this.or[1], _j),scal(this.or[2], _k), _O);
        this.av_z = this.ptor[2];
        this._pnt.forEach(x=>x.exist());
        this._trg.sort((x, y)=>{ return y.av_z - x.av_z});
        this._trg.forEach(x=>{x.draw()});

        //console.log(this.av_z);
    }
    gett(){
        console.log(this._trg);
    }
}

p[0] = new Point([0, 0, 0], "0");
p[1] = new Point([1, 0, 0], "x");
p[2] = new Point([0, 1, 0], "y");
p[3] = new Point([0, 0, 1], "z");

//let crap = new Shit([2,2,0], Sq_xy0);
//let crap2 = new Shit([-2,2,0], Sq_xy0, 2);

let _o = [
    /*new Shit([0,0,0], Sq_xy0),
    new Shit([0,0,0], Sq_xz0, 2),
    new Shit([0,0,4], Sq_xy0, 3),
    new Shit([0,4,0], Sq_xz0, 4),*/

    new Shit([2,2,0], Sq_xy1),
    new Shit([2,2,4], Sq_xy1, 2),
    new Shit([0,2,2], Sq_xz1, 3),
    new Shit([4,2,2], Sq_xz1, 4),
]
_o.sort((x, y)=>{ return (y.av_z - x.av_z)});

p.forEach(x=>{x.draw()});

_o.forEach(x=>x.draw());

console.log(_o[2]._pnt)