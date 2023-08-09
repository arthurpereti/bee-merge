class Obj{
    frame = 1
    tempo = 0

    constructor(x,y,width,height,imagem){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.imagem = imagem
    }    

    desenha_obj(){
        // des.fillStyle = this.color
        // des.fillRect(this.x, this.y, this.width, this.height)
        let img = new Image()
        img.src = this.imagem
        des.drawImage(img, this.x, this.y, this.width, this.height)
    }
    anim(nome){
        this.tempo +=1
        if(this.tempo > 12){
            this.tempo = 0
            this.frame +=1
        }
        if(this.frame>4){
            this.frame=1
        }
        this.imagem = "assets/"+nome+this.frame+".png"
    }
}

class Bee extends Obj{
    dir = 0
    diry = 0
    pts = 0
    vidas = 3

    move(){
        this.x += this.dir
        if(this.x<= 16){
            this.x = 16
        }else if(this.x >= 400){
            this.x = 400
        }
        this.y += this.diry
        if(this.y<= 50){
            this.y = 50
        }else if(this.y >= 550){
            this.y = 550
        }
    }

    colid(objeto){
        if((this.x < objeto.x + objeto.width)&&
            (this.x + this.width > objeto.x)&&
            (this.y < objeto.y + objeto.height)&&
            (this.y + this.height > objeto.y)){
            return true       
        }else{
            return false
        }

    }
}

class Spider extends Obj{

    move(){
        this.y += 2
        if(this.y >= 750){
            this.y = -50
            this.x = Math.random() * (400 - 0) // a aranha tem 100 px de largura
        }
    }
    
    recomeca(){
        this.y = -200
        this.x = Math.random() * (400 - 0) // a aranha tem 100 px de largura
    }
}

class Bg extends Obj{
    move(vel,limit,pos){
        this.y +=vel
        if(this.y>limit){
            this.y = pos
        }
    }
}

class Flor extends Spider{
    recomeca(){
        this.y = -100
        this.x = Math.random() * (400 - 0) // a aranha tem 100 px de largura
    }
}

class Texto{
    des_texto(text,x,y,cor,font){
        des.font = font
        des.fillStyle = cor
        des.fillText(text,x,y)
    }
}