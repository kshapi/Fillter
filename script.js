const search = document.getElementById('search')
const box = document.querySelectorAll('.box');

search.oninput = function(e){
//store search values
  const value = e.target.value.toLowerCase();


//looping Each box of li
  for(let i= 0;i <box.length;i++){
    const product = box[i].querySelectorAll('.product')[0];
//Get data from data attribute
    const data = box[i].querySelectorAll('.product')[0].dataset.set.toLowerCase();
    
   if(product){
   const text = product.innerText.toLowerCase();
//Matching search value
     if(text.includes(value) || data.includes(value)){
        box[i].style.display = '';
     }else{
      box[i].style.display= 'none';
    }
   }
 }
};


const icon = document.querySelector('.bi');

icon.addEventListener('click',toggle)

  //toggle function
    function toggle(){
    document.body.classList.toggle('dark');
  //change icon from bootstrap
    if(icon.classList.contains('bi-moon')){
      icon.setAttribute('class','bi-brightness-high');
    }else {
      icon.setAttribute('class','bi-moon');
    }
   };