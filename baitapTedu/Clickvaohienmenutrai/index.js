document.addEventListener("DOMContentLoaded",function(){
     var nut = document.querySelector('.nut');
     var menutrai = document.querySelector('.menutrai');
     var den = document.querySelector('.den');
     var trang= document.querySelector('.mautrang');
     var khoito = document.querySelector('.noidungto');

     nut.onclick = function(){
         den.classList.add('len');
        //  khoito.classList.add('dichphai');
         trang.classList.add('trangquay');
         menutrai.classList.remove('vetrai');
     }
     den.onclick = function(){
         den.classList.remove('len');
        //  khoito.classList.remove('dichphai');
         trang.classList.remove('trangquay');
         menutrai.classList.add('vetrai');


     }
},false);