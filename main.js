// function checkForLastName() {
//     if (document.getElementById("lastNameField").value.length === 0) 
//     {   alert("Please enter your last name");
// document.getElementById("lastNameField").focus();
//      return false;
//     }
// }

// function returnValidField() {
//     if (document.getElementById("name").value.length > 10) {
//         alert("Your Given Num Is Too Large");
//         document.getElementById("name").focus();
//         return false;
//     }
//     if (document.getElementById("name").value.length < 5) {
//         alert("Your Given Num Is Too Small");
//         document.getElementById("name").focus();
//         return false;
//     }
// }







//*************************Dua App*********************************//

function signup()
{
var inp1=document.getElementById('input').value;
var inp2=document.getElementById('input1').value;
var inp3=document.getElementById('input2').value;
var inp4=document.getElementById('input3').value;
var inp5=document.getElementById('input4').value;
var array=[];
array.push(inp1);
array.push(inp2);
array.push(inp3);
array.push(inp4);
array.push(inp5);
console.log(array);
localStorage.setItem("userdata",array);
if(inp1=="" || inp2=="" || inp3=="" || inp4=="" || inp5=="")
{
    alert('plz filll in the form first');
}
else{
    window.location.href="login.html";
}
}











