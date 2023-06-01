$(function(){
    $(".sub").hide()
    $(".main li, .sub").hover(function(){

        var n=$(this).index()
        console.log("n:",n)

        $(".sub").stop().show()
    },function(){
        $(".sub").stop().hide()

    })

    $(".sub_list>li").hover(function(){
        var_n=$(this).index()
        console.log("n:",n)
        $(".main li a").removeClass("on")
        $(".main li").eq(n).find("a").addClass("on")
    },function(){
        $(".main li a").removeClass("on")

    })

    // $(".fade li").hide()
    // $(".fade li").eq(0).show()

    // $(".fade li").eq(0).siblings().hide()

    // $(".fade li:gt(0)").hide()

    $(".fade li").eq(0).show
    $(".fade li").eq(1).show
    $(".fade li").eq(2).show

    var n=0
    setInterval(function(){
        $(".fade li").eq(n).fadeOut()

        if(n==2){
            n=0
        }else{
            n++
        }

        $(".fade li").eq(n).fadeIn()
    },2500  )


    //탭메뉴

    // $(".contents h2").click(function(){
    //     $(".contents h2").removeClass("on")
    //     $(this).addClass("on")
    //     $(".contents ul").hide()
    //     $(this).next().show()
    // })

    $(".notice h2").click(function(){
        $(".contents h2").removeClass("on")
        $(".contents ul").hide()
        $(this).addClass("on")
        $(this).next().show()
    })
    $(".gallery h2").click(function(){
        $(".contents h2").removeClass("on")
        $(".contents ul").hide()
        $(this).addClass("on")
        $(this).next().show()
    })

    //팝업
    $(".open_popup").click(function(){
        $(".popup").show()
    })
    $(".close").click(function(){
        $(".popup").hide()
    })
})