// $("h1").addClass('big-title');
// $("a").attr("href","http://www.yahoo.com")


// for(var i = 0; i < S; i++){
//     document.querySelectorAll('button')['i'].addEventListener("click",function(){
//         document.querySelection("h1").style.color = "purple";
//     });
// }

// $('button').click(function(){
//     $("h1").css("color","purple");
// });

// $("input").keypress(function(event){
//     // console.log(event.key);
//     $("h1").text(event.key);
// })

// $("h1").on("click",function(){
//     // console.log(event.key);
//     $("h1").css("color","purple");
// })

$("button").on("click",function(){
    $("h1").animate({opacity:0.5});
})