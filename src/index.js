const one = document.querySelector('#overall-1')
const two = document.getElementById('overall-2')
const three = document.getElementById('overall-3')
const four = document.getElementById('design-1')
const five = document.getElementById('design-2')
const six = document.getElementById('design-3')
const seven = document.getElementById('design-4')
const eight=document.getElementById('text-1')
const nine=document.getElementById('img-1')
const ten=document.getElementById('img-2')
const eleven=document.getElementById('img-3')
const twelve=document.getElementById('img-4')
const thirteen=document.getElementById('form-1')
const fourteen=document.getElementById('form-2')
const fifteen =document.getElementById('form-3')
const sixteen=document.getElementById('form-4')
const seventeen=document.getElementById('form-5')

let hide = false;

document.querySelector("#hide").addEventListener('click', (e)=>{
    if (e.target.innerHTML === "Hide Checked Items"){
        e.target.innerHTML= "Show Checked Items"
        hide=true;
    }
    else if(e.target.innerHTML === "Show Checked Items"){
        e.target.innerHTML = "Hide Checked Items"
        hide=false;
    }
    renderItems()
})

let items = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen]

const renderItems = () => {
    let renderList = []
    let removeList = []
    let first=true
    if (hide === true){
        items.forEach((item)=>{
            if (item.checked === true){
                removeList.push(item)
            } 
            else if (item.checked===false){
                renderList.push(item)
            }
        })
        removeList.forEach((item)=>{
            document.querySelector(`#${item.name}`).style = "display: none"
        })
    }
    else if(hide===false){
        renderList=items
        renderList.forEach((item)=>{
            document.querySelector(`#${item.name}`).style = "display: block"
        })
    }
    renderList.forEach((item)=>{
        if(first){
            if(document.querySelector(`#${item.name}`).classList.contains("odd")){
                document.querySelector(`#${item.name}`).classList.remove("odd")
                document.querySelector(`#${item.name}`).classList.add("even")
            }
            first=false
        }
        else if(!first){
            if(document.querySelector(`#${item.name}`).classList.contains("even")){
                document.querySelector(`#${item.name}`).classList.remove("even")
                document.querySelector(`#${item.name}`).classList.add("odd")
            }
            first=true
        }
    })
}

items.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        renderItems()
    })
})

