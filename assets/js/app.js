$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
  if(event.which===13)
  {
    var text=$("input").val();
    $("input").val("");
    $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>"+text+"</li>");
    
  }
  
  
});
$(".fa-plus").on("click",function(){
  
  $("input").fadeToggle();
})