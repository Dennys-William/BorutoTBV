
const trailer = document.querySelector('.trailer')
const main = document.querySelector('main')
const main1 = document.querySelector('.main1')

const menuA = document.querySelector('.menu-A')
const closeA = document.querySelector('.close-A')


const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.inicio ul');
const inicio = document.querySelector('.inicio') 

menuToggle.addEventListener('click', () => {
    //E o que fazer o negocio aparecer
    menu.classList.toggle('active');

    //Animanão do burguer e o X
    menuA.classList.toggle('menu-B')
    closeA.classList.toggle('close-B')

    //Essa parte e para animação de quando clicar
    inicio.classList.toggle('pos')

 
    //Essa parte de baixo vai sumir com todo o html para que quando eu aperta o 'burguer' possa aparecer o negocio, caso contrario não vai aparecer nada. Ou seja deixa ele visivel.
    main.classList.toggle('sumir')
    main1.classList.toggle('sumir')
    trailer.classList.toggle('sumir')
    
    //main.classList.toggle('sumir');
});









let bot = document.querySelector('.botao1')
bot.addEventListener('click', aperte)

let botao1 = document.querySelector('.botao1')
let imagem = document.querySelector('.imagem')
let imagem1 = document.querySelector('.imagem1')
let video = document.querySelector('.video')

const foto = document.querySelector('.foto')
const foto1 = document.querySelector('.foto1')
 setTimeout(() => {
    foto.classList.toggle('opacity')
    foto1.classList.toggle('opacity1')
}, 800)

const fotoV = document.querySelector('.fotoV')
let minilogo = document.querySelector('.mini-logo')
let mini = document.querySelector('.mini-logo')

minilogo.addEventListener('click', () => {

    minilogo.classList.toggle('mini-logo-animacao')

    const isHidden = foto.style.visibility === 'hidden'
    if(isHidden) {
    foto.style.height = '90%'
    foto.style.visibility = 'visible'

    
    fotoV.style.visibility = 'hidden'
    fotoV.innerHTML = '';    
     
  

    }

    else {
    foto.style.height = '0%'
    foto.style.visibility = 'hidden'


    fotoV.style.height = '90%'
    fotoV.style.visibility = 'visible'
    
    setTimeout(function() {
        /*
 fotoV.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/3RPTG9NSwLg?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'; 
        */

         
        fotoV.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/27OC0piDN4Y?autoplay=1&rel=0&loop=1&playlist=27OC0piDN4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

        },800)

    }

    
   

}) 

//Celular
const fotoV1 = document.querySelector('.fotoV1')
let minilogoc = document.querySelector('.mini-logo-c')
let minic = document.querySelector('.mini-logo-c')

minilogoc.addEventListener('click', () => {

    minilogoc.classList.toggle('mini-logo-c-animacao')

    const isHiddenC = foto1.style.visibility == 'hidden'
    if(isHiddenC) {
    foto1.style.width = '100%'
    foto1.style.visibility = 'visible'

    fotoV1.style.visibility = 'hidden'
    fotoV1.innerHTML = '';    
    }
    else {
    foto1.style.width = '0%'
    foto1.style.visibility = 'hidden'  

    fotoV1.style.width = '100%'
    fotoV1.style.visibility = 'visible'
    
    setTimeout(function() {
        /*
         fotoV1.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/3RPTG9NSwLg?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'; 
        */
         fotoV1.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/27OC0piDN4Y?autoplay=1&rel=0&loop=1&playlist=27OC0piDN4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        },800)
        
    }

    

})

//Fim do celular

// PC
let masashi = document.querySelector('.masashi')
let descricao = document.querySelector('.descricao')

masashi.addEventListener('mouseenter', () => {
    descricao.classList.toggle('descricao-pos')
})



//Fim do pc

let masashiC = document.querySelector('.masashi-c')
let descricaoC = document.querySelector('.descricao-c')
masashiC.addEventListener('click', () => {
    descricaoC.classList.toggle('descricao-c-pos')
})




    


/*
fotoE.addEventListener('click', setTimeout(() => {
    foto1.classList.toggle('escondido')
},1000)

)
*/



function aperte() {
    imagem.style.display = 'none'
    imagem.style.position = 'absolute'
    botao1.style.width = '0%'
    imagem1.style.width = '0%'
    video.style.width = '100%'
    
    setTimeout(function() {
    /*
    video.innerHTML = '<iframe  class="video"  src="https://www.youtube.com/embed/3RPTG9NSwLg?si=zbza5u2GxLgVfIYT?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    */
   /*
    video.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/3RPTG9NSwLg?si=zbza5u2GxLgVfIYT&autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    */
    /*
    video.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/SgwcVz-0fes?si=zkgCy6Vmk47h4qto&autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
*/
/*
video.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/YHo_Mc51zsA?si=BcNndvTSA_2p85xa&autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
*/
/*
video.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/YHo_Mc51zsA?autoplay=1&rel=0&loop=1&playlist=YHo_Mc51zsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
*/
/*
video.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/fn38109nagA?si=IucfpzVkS2fC48rZ&autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
*/

/*
video.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/fn38109nagA?autoplay=1&rel=0&loop=1&playlist=fn38109nagA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

*/
video.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/fn38109nagA?autoplay=1&rel=0&loop=1&playlist=fn38109nagA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';



    video.style.textAlign = 'left'

    },800)
  

}










