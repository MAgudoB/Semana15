function Player2(){
    this.id;
    this.x=50;
    this.y=50;

    this.img=new Image();
    this.img.src="img/players/player1.png";

    




    this.move=function(){


    }


    this.paint=function(){        
        interactiveContext.drawImage(this.img,this.x,this.y);
    }

}