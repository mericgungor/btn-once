$(function(){
    //a tagına disabled yeteneği kazandırıyoruz
    $("head").append("<style>a[disabled],a.disabled{pointer-events: none;cursor: default;}</style>");
});

$(document).on('click', '.btn-once', function (e) {
    var _this = $(this);
    
    $(_this).attr("disabled",true);    
    
});


