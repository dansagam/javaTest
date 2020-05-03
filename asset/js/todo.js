let body = document.querySelector('body')
let lis = document.querySelectorAll('li');
let ul = document.querySelector('ul');
let h1 = document.querySelector('h1');
let spans = document.querySelectorAll('span');
let input = document.querySelector('input[type ="text"]')
let icon = document.querySelector('.fa-plus')
let op;


input.addEventListener('keypress', (event)=>{
    if(event.which === 13){// 13 is the keyCode of the event enter key
        //to test it console.log(event)
        //expand the object and check the which proto attribute
        let newy = document.createElement('li')
        let newUl = ul.appendChild(newy)
        newUl.innerHTML = '<span>X</span> ' + input.value 
        input.value = '';
    }
})


body.addEventListener('click', function(e){
    e.preventDefault();
    lis.forEach(function(li){
        li.addEventListener('click',function(){
            li.classList.toggle('done');
        })
    })
    spans.forEach((span)=>{
        span.addEventListener('click', function(){
            span.style.visibility = 'visible'
            if(span.style.visibility === "visible"){
                op =1;
                let timer = setInterval( function() {
                    if(op <= 0.1){
                    clearInterval(timer);
                    span.parentElement.remove()
                    }
                    span.parentElement.style.opacity = op;
                    op -= op * 0.1;
                }, 100)
            }
            // preventDefault = false
        })
    })
})

icon.addEventListener('click',()=>{ 
    if(input.style.display === 'none'){
        op =0.1;
        let timer = setInterval( function() {
            if(op >= 1){
            clearInterval(timer);
            }
            input.style.opacity = op;
            op = op + 0.05;
        }, 100)
        input.style.display = 'block'
    }   
    input.classList.toggle('showUp')
    input.addEventListener('transitionrun',()=>{
    })
    input.addEventListener('transitionend',()=>{
        input.style.display ='none'
    })
})
