import * as React from 'react';

interface IPercentCircle {
    percent: number
}
interface IBeatgingHeart{
    base?: number,//心的大小,
    color?: string//心的填充色
    onClick?: Function//点击事件
    className?: string
}

class PercentCircle extends React.PureComponent<IPercentCircle, any> {
    private canvas;
    
    componentDidMount() {
        let percent = this.props.percent;
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 2;
        //设置笔触的颜色
        ctx.strokeStyle = '#E9E9E9';
        ctx.arc(32, 32, 28, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#00DBEB';
        ctx.arc(32, 32, 28, -90 * Math.PI / 180, (percent * 3.6 - 90) * Math.PI / 180);  
        ctx.stroke();
        ctx.font = '24px Arial';
        ctx.fillStyle = '#4a4a4a';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(`${percent}%`, 32, 32);
    }
    render() {
        return(
            <canvas ref={(ref)=>{this.canvas=ref}} width="65" height="65" style={{zoom:'0.5'}}/>
        )
    }
}

class BeatingHeart extends React.PureComponent<IBeatgingHeart, any> {
    private canvas;
    private ctx;
    private delay = 20;
    private minSize = 2;
    private maxSize = 6;
    private upDealyArray = [10,40,70,100,130,160,190];
    
    static defaultProps = {
        base:　0.2
    }
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.ctx = this.canvas.getContext("2d");
        this.ctx.translate(100, 100);
        this.ctx.rotate(Math.PI);
        this.loop(this.minSize,true);
    }

    loop(i,up) {
        setTimeout(()=>{
            if(up) {
                if(i<this.maxSize) {
                    i++;
                }else {
                    i--;
                    up = !up;
                    this.delay = 70;
                }
            }else {
                if(i>this.minSize) {
                    i--;
                   
                }else {
                    i++;
                    up=!up;
                }
            }
            this.delay = this.upDealyArray[i]
            this.loop(i,up);
            this.draw(i)
        },this.delay)
    }
    //画心函数
    draw(size) {
        //清空画布
        this.ctx.clearRect(-200,-200,400,400); 
        
        const vertices = [];
        for(let i=0; i<50; i++) {
            var step = i/50*(Math.PI*2);
            var vector = {
                x : size*(16 * Math.pow(Math.sin(step), 3)),
                y : size*(13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step))
            }
            vertices.push(vector);
        }
        this.ctx.beginPath();
         for(let i=0; i<50; i++) {
            const vector = vertices[i];
            this.ctx.lineTo(vector.x, vector.y);
        } 
        
        this.ctx.fillStyle = this.props.color || this.getDefatulColor();
        this.ctx.fill();
    }
    
    getDefatulColor() {
        var gra = this.ctx.createLinearGradient(0,0,200,200);// 创建渐变色
        gra.addColorStop(0,"red");
        gra.addColorStop(0.25,"orange");
        gra.addColorStop(0.5,"yellow");
        gra.addColorStop(0.75,"green");
        gra.addColorStop(1,"blue");
        return gra;
    }
    render() {
        return(
            <canvas
                className={this.props.className}
                ref={(ref)=>{this.canvas=ref}} 
                width={200} 
                height={200} 
                style={{
                    zoom:this.props.base,
                    cursor:'pointer'
                }}
                onClick={()=>{this.props.onClick && this.props.onClick()}}
            />
        )
    }
}

export {
    PercentCircle,//圆环百分比
    BeatingHeart//跳动的心
}