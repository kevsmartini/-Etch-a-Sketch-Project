
const body = document.querySelector('body')

const button = document.createElement('button')
button.textContent = 'Add Size'
body.appendChild(button)
let input = 16

const initialSize = (size)=>{

    for(i=0; i <= size; i++){
        const container = document.createElement('div')
        container.classList.add('row')
        body.appendChild(container)
    
        for (let c = 0; c <= size; c++) {
           const colunm = document.createElement('div')
           colunm.classList.add('colunm')
           container.appendChild(colunm)
    
           colunm.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "purple"
    
           })
    
           colunm.addEventListener("click", (event) => {
            event.target.style.backgroundColor = "lightgray"
    
           })
    
            
        }
    }
}


button.addEventListener('click', ()  => {

   input = prompt('How many squares Do you want per side?')
   //console.log(input);
})



if(input === 16){

    
    initialSize(input)

}else if(input > 16){

    initialSize(input)
    console.log(input);
   
}



