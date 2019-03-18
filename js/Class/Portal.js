function Portal(x,y,type){
    this.active=true;
    this.type=type;
    this.x=x;
    this.y=y;
    this.direction;
    this.width=20;
    this.height=40;    
    this.img=new Image();


    if(type==0){
        this.img.src="img/bluePortal.png";
    }else{
        this.img.src="img/yellowPortal.png";
    }

    this.draw=function(){
        INTERACTIVE_CTX.drawImage(this.img,this.x - (this.width/2),this.y - (this.height/2),this.width,this.height);
    }
}