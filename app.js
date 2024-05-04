//Factory Function
function hurryColor(r,g,b){
    const changeCol={};
    changeCol.r=r;
    changeCol.g=g;
    changeCol.b=b;
    changeCol.colrCh = function(){
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`;
    };
    changeCol.updateCol = function(){
       const { r, g, b } = this;
       // return `rgb(${r}+${100},${g}+${100},${b}+${100})`;
        return 'rgb('+(r+100)+','+(g+100)+','+(b+100)+')';
    };
    return changeCol;

}
//Java Script Class

class Color{
    constructor(r,g,b){
        this.r=r;
        this.g=g;
        this.b=b;  
    }
    deStruct(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`;
    }
   col12() {
        const {r,g,b} = this;
        return "rgb("+(r+12)+","+(g+12)+","+(b+12)+")";
    }
    funnyTag(){
        let dani = this.deStruct();
        console.log(`Anil ${dani} erriflower`);
        console.log(`1+${eval(12+this.r)} `);
    }
}
const a1 = new Color(111,222,121);


//inheritance
class Rcb
{
    constructor(p1,p2,p3){
        this.p1 = 'Virat Kohli';
        this.p2 = 'Ab Devilliers';
        this.p3 = 'Chris Gayle';
    }
    topPlayers()
    {
        const { p1, p2, p3 } = this;
        return `${p1} and ${p2} and ${p3} are the best players in the world!`;
    }
}
class Kohli extends Rcb{
    constructor(p1){
        super(p1);
    }
    playerInfo(s1,avg,runs){
        this.s1=s1;
        this.avg=avg;
        this.runs=runs;
        //let p1= super(p1);
        return `${this.p1} Scored ${runs} at ${s1} StrikeRate with top  ${avg} avg`;
    }

}
class Abd extends Rcb{
    constructor(p1,p2,p3){
        super(p1,p2,p3);
    }
    playerInfo(s1,avg,runs){
        this.s1=s1;
        this.avg=avg;
        this.runs=runs;
         return `${this.p2} Scored ${runs} at ${s1} StrikeRate with  ${avg}`;
    }

}
class Gayle extends Rcb{
   constructor(p1,p2,p3){
    super(p1,p2,p3);
   }
    playerInfo(s1,avg,runs,){
        this.s1=s1;
        this.avg=avg;
        this.runs=runs;
       
        return `${this.p3} Scored ${runs} at ${s1} StrikeRate with top ${avg}`;
    }

}

let rcb = new Rcb("Virat Kohli","AB Devilliars","Chris Gayle");

