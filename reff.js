function handleSubmit() 
{
const name = document.getElementById('name').value;
const email= document.getElementById('email').value;
const phno =document.getElementById('number').value;
const project = document.getElementById('project').value;
const address =document.getElementById('address').value;
   
  sessionStorage.setItem("Name", name);
  sessionStorage.setItem("Email", email);
  sessionStorage.setItem("Phnno", phno);
  sessionStorage.setItem("Project", project);
  sessionStorage.setItem("Address", address);
  
  var x = document.getElementById("msg");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   return;

}