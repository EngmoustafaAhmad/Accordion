var btn = document.getElementsByClassName("button");

// 3 class button
for(var i=0; i<btn.length; i++){
    btn[i].addEventListener('click',function(){

        this.classList.toggle("active")//create class active in button clicked
        var content = this.nextElementSibling;
       
        if(content.style.display == 'block'){
            content.style.display = 'none'
        }else{
            content.style.display = 'block'
        }
    })
}
   