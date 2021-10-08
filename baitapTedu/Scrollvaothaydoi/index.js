document.addEventListener('DOMContentLoaded',function(){
    //bắt sự kiện
    var trangthai = "duoi300";
    var menu = document.querySelector('.menu');
    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset > 500){
            if(trangthai == 'duoi300'){
                menu.classList.add('nholai');
                trangthai = "tren300";
            }
        }
        else {
            if(trangthai == "tren300"){
                menu.classList.remove('nholai');
                trangthai = "duoi300";
            }
        }
    });
},false);