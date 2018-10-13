//menu
ddsmoothmenu.init({
    mainmenuid: "smoothmenu1", //menu DIV id
    orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
    classname: 'ddsmoothmenu', //class added to menu's outer DIV
    //customtheme: ["#1c5a80", "#18374a"],
    contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
});

//run right
var space_top = $('.padding-content-detail').offset().top;

$(document).scroll(function(){
    var curPos = $(document).scrollTop();

    //share
    var offset_top = $('.padding-content-detail').offset().top;
    var height_div = $('.padding-content-detail').height();

    var sum_height = parseInt(parseInt(space_top) + parseInt(height_div)) - parseInt(200);

    if(curPos >= parseInt(offset_top)){
        if(curPos >= parseInt(sum_height)){
            $('#share-run').removeClass('active-share');
        }else {
            $('#share-run').addClass('active-share');
        }
    }else{
        $('#share-run').removeClass('active-share');
    }

    //run right
    if(curPos >= 350) {
        $('#fixedmenu').show(10);
    } else {
        $('#fixedmenu').hide(10);
    }
});
$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

//popup
function PopupCenterDual(url, title, w, h) {
// Fixes dual-screen position Most browsers Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

// Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

//back
function goBack() {
    window.history.back()
}