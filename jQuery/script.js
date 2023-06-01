$(function(){
    $(".sub").hide()
    $(".main>li").hover(function(){
        $(".sub").stop().show(1000)
    },function(){
        $(".sub").stop().hide(1000)

    })
})