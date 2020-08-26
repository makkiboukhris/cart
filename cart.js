
function Increment(id,p,d){
    let inp=document.getElementById(id)
    let val=parseInt(inp.value)
    val++
    inp.value=val
    let subtotal=document.getElementById(d)
    subtotal.innerHTML=val*p
}
function decrement(id,p,d){  
        let inp=document.getElementById(id)
        let val=parseInt(inp.value)
        if(val>1){
        val--
        inp.value=val
        let subtotal=document.getElementById(d)
        subtotal.innerHTML=val*p}
}
function remove(id,id1,id2) {
    var x = document.getElementById(id);
    let y = document.getElementById(id1)
    let z = document.getElementById(id2).textContent
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
    
      console.log(y)
      y.innerHTML=parseInt(y.innerHTML)-parseInt(z)
      x.style.display = "none";
    }
  }
  function like(id){
    let x=document.getElementById(id)
    console.log(x)
    if(x.style.color=='black'){
      x.style.color='red'
    }else x.style.color='black'
  }
function total(id1,id2,id3,id4,tot){
let x=document.getElementById(id1).textContent
let y=document.getElementById(id2).textContent
let z=document.getElementById(id3).textContent
let t=document.getElementById(id4).textContent
let m=document.getElementById(tot)
m.innerHTML=parseInt(x)+parseInt(y)+parseInt(z)+parseInt(t)
}




