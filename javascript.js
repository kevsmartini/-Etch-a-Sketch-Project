const container = document.querySelector('.container')
const sliderDiv = document.querySelector('.slidecontainer')
const selectColor = document.querySelector('#selectColor')



const buttonNew = document.createElement('button')
buttonNew.textContent = 'New'
sliderDiv.appendChild(buttonNew)

const buttonReset = document.createElement('button')
buttonReset.textContent = 'Reset'
sliderDiv.appendChild(buttonReset)

const buttonRgb = document.createElement('button')
buttonRgb.textContent = 'RGB'
sliderDiv.appendChild(buttonRgb)

const buttonPen = document.createElement('button')
buttonPen.textContent = 'Pen'
sliderDiv.appendChild(buttonPen)

const buttonClear = document.createElement('button')
buttonClear.textContent = 'Clear'
sliderDiv.appendChild(buttonClear)




let amount = 16

const size = 500/amount



const gridContainer = (amount, size) => {
    for(let i = 1; i <= amount; i++ ){
        const grid = document.createElement('div')
        grid.classList.add("grid")
        container.appendChild(grid)
        
        
            for(let g = 1; g <= amount; g++ ){
            const grid2 = document.createElement('div')
            grid2.classList.add("grid2")
            grid2.style.height = `${size}px`
            grid2.style.width = `${size}px`
            grid.appendChild(grid2)
        
            grid2.addEventListener("click", (event) =>{           

        
            event.target.style.backgroundColor = currentColor
        
                })
        
        
        
            }
        }
}

let currentColor = selectColor.value

selectColor.addEventListener('change', () => {
    // Actualiza el color actual cuando cambia el valor del select
    currentColor = selectColor.value;
});

gridContainer(amount,size)


///////SLIDER TO CHOOSE HOW MANY SQUARES IS WANTED
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
  }

////// BUTTON  MAKE A NEW GRID
buttonNew.addEventListener('click',()=>{

    amount = output.innerHTML
    const size = 500/amount

    container.innerHTML = ''

    gridContainer(amount,size)

})  


///// BUTTON TO RESET THE GRID AT 16X16
buttonReset.addEventListener('click',()=>{

    amount = 16
    const size = 500/amount
    output.innerHTML = amount

    container.innerHTML = ''

    gridContainer(amount,size)


}) 





//////// BUTTON TO SELECT RBG MODE

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}


buttonRgb.addEventListener("click", (event) =>{    

    
   
    Array.from(container.children).forEach(parent => {
        Array.from(parent.children).forEach(child => {

            child.addEventListener("click", (event) =>{           

                const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`

                event.target.style.backgroundColor = rndCol
            
            })
        }); 
    })

})


buttonPen.addEventListener("click", (event) =>{    

    
   
    Array.from(container.children).forEach(parent => {
        Array.from(parent.children).forEach(child => {

            child.addEventListener("click", (event) =>{           

                event.target.style.backgroundColor = selectColor.value
            
            })
        }); 
    })

})

buttonClear.addEventListener("click", (event) =>{    

    
   
    Array.from(container.children).forEach(parent => {
        Array.from(parent.children).forEach(child => {

            child.addEventListener("click", (event) =>{           

                event.target.style.backgroundColor = 'bisque'
            
            })
        }); 
    })

})



       


      

