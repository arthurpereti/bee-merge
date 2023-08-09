let des = document.getElementById('des').getContext('2d')

let bg = new Bg(0,0,500,700, 'assets/bg.png')
let bg2 = new Bg(0,-700,500,700, 'assets/bg.png')
let flor = new Flor(0,0,50,50, 'assets/flower1.png')
let bee = new Bee(200,500,100,100,'assets/bee1.png')
let spider = new Spider(100,100,100,100,'assets/spider1.png')
let texto_pontos = new Texto()
let texto_vidas = new Texto()
let val_pts = new Texto()
let val_vidas = new Texto()

let texto_game_over = new Texto()
let jogar = true

// let spider2 = new Obj(0,0,100,100,'darkorchid')

document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        // console.log('pressionado a tecla "a" ')
        bee.dir = - 5
    }else if(event.key === 'd'){
        // console.log('pressionado a tecla "d" ')
        bee.dir = 5
    }else if(event.key === 's'){
        console.log('pressionado a tecla "s" ')
    }else if(event.key === 'w'){
        console.log('pressionado a tecla "w" ')
    }
})
document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        // console.log('soltou a tecla "a" ')
        bee.dir = 0
    }else if(event.key === 'd'){
        // console.log('soltou a tecla "d" ')
        bee.dir = 0
    }else if(event.key === 's'){
        console.log('soltou a tecla "s" ')
    }else if(event.key === 'w'){
        console.log('soltou a tecla "w" ')
    }
})

function game_over(){
    if(bee.vidas <= 0){
        jogar = false
    }
}

function colisao(){
    if(bee.colid(spider)){
        spider.recomeca()
        bee.vidas -=1
    }
    if(bee.colid(flor)){
        flor.recomeca()
        bee.pts +=1
    }
}

function desenha(){
    bg.desenha_obj()
    bg2.desenha_obj()
    if(jogar){        
        bee.desenha_obj()
        spider.desenha_obj()
        flor.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        val_pts.des_texto(bee.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(bee.vidas,120,40, 'white','30px Times')
    }else{
        texto_game_over.des_texto('Game Over',128,350, 'green','50px Times')
    }
}

function atualiza(){
    bg.move(3,700,0)
    bg2.move(3,0,-700)
    if(jogar){
        bee.move()
        bee.anim('bee')
        spider.move()
        spider.anim('spider')
        flor.move()
        flor.anim('florwer')
        colisao()
        game_over()
    }
    
}

function main(){
    des.clearRect(0,0,500,700)
    atualiza()
    desenha()
}

setInterval(main,10)