window.addEventListener("scroll", (e) => {
    console.log("y", window.scrollY);
  })

$(document).ready(function(){
    $(".scroll_move").click(function(event){         

        event.preventDefault();

        $('html,body').animate({scrollTop:$(this.hash).offset().top});
    });

    $(window).on("scroll",function(){
        if($(window).scrollTop()>1000){
            $(".btn_bg").addClass("btn_show")
        }else{
            $(".btn_bg").removeClass("btn_show")
        }

        if($(window).scrollTop()>7732){
            $(".btn_bg").removeClass("btn_show")
        }
        if($(window).scrollTop()>11800){
            $(".btn_bg").addClass("btn_show")
        }

        if($(window).scrollTop()>1570){
            $(".scroll_opacity0").addClass("scroll_opacity1")
        }else{
            $(".scroll_opacity0").removeClass("scroll_opacity1")
        }

    })

});