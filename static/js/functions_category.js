//menu
ddsmoothmenu.init({
    mainmenuid: "smoothmenu1", //menu DIV id
    orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
    classname: 'ddsmoothmenu', //class added to menu's outer DIV
    //customtheme: ["#1c5a80", "#18374a"],
    contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
});

//carousel
// $('#carouselExampleFade').carousel({
//     interval: 8000
// });
//
// $('#carouselExampleFadeNext').carousel({
//     interval: 4000
// });
//
// $('.carousel').carousel({
//     interval: 50000
// });

//load ajax
//page home
// $("#loadmore-home").click(function () {
//     //block button
//     $('#loadmore-home').attr('disabled', 'disabled');
//
//     var page_load = document.getElementById('page_load').value;
//     var cate_id = document.getElementById('cate_id').value;
//     var str = $('[data-root=baseUrlRoot]').val();
//     var url = str + "load-ajax?page=" + page_load + "&cate_id=" + cate_id;
//
//     //notify
//     $('#notify').html("<p style='text-align: center; padding: 10px 0 0 0;'><img src='" + str + "images/main-loader.gif'/></p>");
//
//     $.ajax({
//         url: url,
//         cache: false,
//         type: 'POST',
//         dataType: 'html',
//         success: function (data) {
//             //fill data
//             if (data !== '') {
//                 //set value batdau
//                 document.getElementById('page_load').value = (parseInt(page_load) + parseInt(1));
//
//                 //fill data
//                 $('#return_ajax_product').append(data);
//
//                 //block button
//                 $('#loadmore-home').removeAttr('disabled');
//
//                 //notify
//                 $('#notify').html("");
//             } else {
//                 //block button
//                 $('#loadmore-home').attr('disabled', 'disabled');
//
//                 //notify
//                 $('#notify').html("No data.");
//             }
//         },
//         error: function () {
//             $('#notify').html("Err.");
//         },
//     });
//     //$(".loading-page").hide();
// });

//page category
$("#loadmore-category").click(function () {
    loadCategory();
});

function loadCategory() {
    //block button
    $('#loadmore-category').attr('disabled', 'disabled');

    var page_load = document.getElementById('page_load').value;
    var cate_id = document.getElementById('cate_id').value;
    var str = $('[data-root=baseUrlRoot]').val();
    var url = str + "load-ajax-category?page=" + page_load + "&cate_id=" + cate_id;

    //notify
    $('#notify').html("<p style='text-align: center; padding: 10px 0 0 0;'><img src='" + str + "images/main-loader.gif'/></p>");

    $.ajax({
        url: url,
        cache: false,
        type: 'POST',
        dataType: 'html',
        success: function (data) {
            //fill data
            if (data !== '') {
                //set value batdau
                document.getElementById('page_load').value = (parseInt(page_load) + parseInt(1));

                //fill data
                $('#return_ajax_product').append(data);

                //block button
                $('#loadmore-category').removeAttr('disabled');

                //autoload
                document.getElementById('autoload').value = 0;

                //notify
                $('#notify').html("");
            } else {
                //block button
                $('#loadmore-category').attr('disabled', 'disabled');

                //notify
                $('#notify').html("No data.");
            }
        },
        error: function () {
            $('#notify').html("Err.");
        },
    });
    //$(".loading-page").hide();
}

//run right
$(document).scroll(function () {
    var brower_height = $(window).height();
    var offset_top = $('.b-loadmore').offset().top;
    var scrollTop = $(document).scrollTop();
    var bottomScroll = parseInt(offset_top) - parseInt(900);

    var autoload = document.getElementById('autoload').value;
    var numberload = document.getElementById('numberload').value;
    console.log(numberload);

    if (parseInt(autoload) == parseInt(0)) {
        if (parseInt(numberload) < parseInt(1)) {
            if (parseInt(bottomScroll) < parseInt(scrollTop)) {
                document.getElementById('autoload').value = 1;
                document.getElementById('numberload').value = parseInt(numberload) + parseInt(1);
                loadCategory();
            }
        }
    }

    // console.log(brower_height+'-');
    // console.log(offset_top+'--');
    // console.log(scrollTop+'---');
    // console.log(bottomScroll+'----');

    var curPos = $(document).scrollTop();

    //run right
    if (curPos >= 350) {
        $('#fixedmenu').show(10);
    } else {
        $('#fixedmenu').hide(10);
    }
});
$('.scrollup').click(function () {
    $("html, body").animate({scrollTop: 0}, 600);
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