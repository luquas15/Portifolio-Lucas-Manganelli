function escreveTitulo(){
    function activeWorld(element){
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        arrText.forEach((letra, i) =>{
            setTimeout(()=>{
                element.innerHTML += letra;
            }, 75 * i);
        })
    }
    const title = document.querySelector('.digitando');
    activeWorld(title);
}
escreveTitulo();

function menuMobile(){
    const activeMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');
    
    
    activeMenu.addEventListener('click',()=>{
        activeMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

}
menuMobile();

const divCurso = document.querySelectorAll('.cursos_content div');
const liCurso = document.querySelectorAll('.cursos_content ul li');


function sobreMim(){
    
    const divCurso = document.querySelectorAll('.cursos_content div');
    const liCurso = document.querySelectorAll('.cursos_content ul li');
    const divEducacao = document.querySelectorAll('.educacao_content div'); 
    const liEducacao = document.querySelectorAll('.educacao_content ul li'); 

    divEducacao[0].classList.add('ativo');
    liEducacao[0].classList.add('ativo');
    divCurso[0].classList.add('ativo');
    liCurso[0].classList.add('ativo');
    
    function slideShow(index){
        divCurso.forEach((div)=>{
            div.classList.remove('ativo')
        })
        liCurso.forEach((buttom)=>{
            buttom.classList.remove('ativo');
        })
        divCurso[index].classList.add('ativo');
        liCurso[index].classList.add('ativo');
    }
    
    function slideShow2(index){
        divEducacao.forEach((div)=>{
            div.classList.remove('ativo')
        })
        liEducacao.forEach((buttom)=>{
            buttom.classList.remove('ativo');
        })
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    }
    liEducacao.forEach((event, index) => {
        event.addEventListener('click', () =>{
            slideShow2(index);
        })
    });

    liCurso.forEach((event, index) => {
        event.addEventListener('click', () =>{
            slideShow(index);
        })
    });  
}

sobreMim();

function removeClick(index){
    buttomGeral.forEach((item)=>{
        item.classList.remove('.ativo');
    });
    buttomGeral[index].classList.add('.ativo')
}

buttomGeral.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        removeClick(index);
    })
    
})

