var index=1;
var array;
var x=document.getElementsByTagName("div");
       

function myfunction(ind)

{
    if(index===7)
{
    window.location.href='result.html';
}

for(var i=0;i<x.length;i++)
   {
        x[i].style.display = 'none';
    x[index-1].style.display = 'block';
}
array=x.length;
var btn=document.getElementById('save');
index++;

// if(index === 6)
//     {
//         btn.style.display='block';
//         // window.location.href='result.html';
//     }
//     else{
//         btn.style.display='none'
//     }
}
  myfunction();
var marks=0;
function naya()
{
var radios = document.getElementsByTagName('input');
var value;
for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
        value = radios[i].value;       
    }
    }
    if(value==='QUAID-E-AZAM'){
        marks = marks+10;
        localStorage.setItem("marks",marks);
}
if(value==='ISLAMABAD'){
    marks = marks+10;
    localStorage.setItem("marks",marks);
}
if(value==='7'){
    marks = marks+10;
    localStorage.setItem("marks",marks);
}
if(value==='1971'){
    marks = marks+10;
    localStorage.setItem("marks",marks);
}
if(value==='Hafiz'){
    marks = marks+10;
    localStorage.setItem("marks",marks);
}
if(value==='by using var')
{
    marks=marks+10;
    localStorage.setItem('marks',marks);
}
// if(value===''){
//     marks = marks+10;
// }
// if(value===''){
//     marks = marks+10;
// }

// console.log(value);
// console.log(marks);
}
