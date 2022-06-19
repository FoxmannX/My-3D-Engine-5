document.onkeydown = function(e){
    ctx.clearRect(0,0,Canvas.width, Canvas.height);
    
    if(e.key == "ArrowLeft"){
        _i = rot_y(_i, 0.04*pi);
        _j = rot_y(_j, 0.04*pi);
        _k = rot_y(_k, 0.04*pi);
        _O = rot_y(_O, 0.04*pi);
    }
    if(e.key == "ArrowRight"){
        _i = rot_y(_i, -0.04*pi);
        _j = rot_y(_j, -0.04*pi);
        _k = rot_y(_k, -0.04*pi);
        _O = rot_y(_O, -0.04*pi);
    }

    if(e.key == "w"){
        _O = ad_v(_O, [0, 0, -0.2]);
    }
    if(e.key == "s"){
        _O = ad_v(_O, [0, 0, 0.2]);
    }
    if(e.key == "a"){
        _O = ad_v(_O, [0.2, 0, 0]);
    }
    if(e.key == "d"){
        _O = ad_v(_O, [-0.2, 0, 0]);
    }
    _o.sort((x, y)=>{ return (y.av_z - x.av_z)});
    p.forEach(x=>{x.exist(); x.draw()});
    
    _o.forEach(x=>x.draw());
}