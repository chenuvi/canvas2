var div = document.getElementById('canvas')
var draw = false
div.onmousedown = function(a){
  draw = true
  var x = a.clientX
  var y = a.clientY
  var divA = document.createElement('div')
  divA.style = "width:6px;height:6px;" + "background: black; border-radius: 3px;" + "position: absolute;left:" + (x-1.5) +"px;" + "top: " + (y-1.5) + "px;" 
  div.appendChild(divA)
}


div.onmousemove = function(a){
  if(draw){
     var x = a.clientX
  var y = a.clientY
  var divA = document.createElement('div')
  divA.style = "width:6px;height:6px;" + "background: black; border-radius: 3px;" + "position: absolute;left:" + (x-1.5) +"px;" + "top: " + (y-1.5) + "px;" 
  div.appendChild(divA)
  }
 
}
  
div.onmouseup = function(z){
  draw = false
}
