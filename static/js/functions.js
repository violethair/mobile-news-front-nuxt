//menu
$(document).ready(function () {
    ddsmoothmenu.init({
        mainmenuid: "smoothmenu1", //menu DIV id
        orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
        classname: 'ddsmoothmenu', //class added to menu's outer DIV
        //customtheme: ["#1c5a80", "#18374a"],
        contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
    });

    //menu
    $('.menu-mobile-show').click(function () {
        $('body').addClass('show-menu');
        $('.view-data-news').removeClass('active');
        $('body').removeClass('show-topnews');
    });
    $('.menu-close').click(function () {
        $('body').removeClass('show-menu');
    });

    $('.view-data-news').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('show-topnews');
        } else {
            $(this).addClass('active');
            $('body').addClass('show-topnews');
            $('body').removeClass('show-menu');
        }
    });

    //load ajax page home
    $("#loadmore-home").click(function () {
        //block button
        $('#loadmore-home').attr('disabled', 'disabled');

        var page_load = document.getElementById('page_load').value;
        var str = $('[data-root=baseUrlRoot]').val();
        var csrfToken = document.getElementById('csrfToken').value;
        var url = str + "load-ajax";

        //notify
        $('#notify').html("<p style='text-align: center; padding: 10px 0 0 0;'><img src='" + str + "images/main-loader.gif'/></p>");

        $.ajax({
            url: url,
            type: 'POST',
            headers: {'X-XSRF-TOKEN': csrfToken},
            dataType: 'html',
            data: {
                "page": page_load,
                "_csrfToken": csrfToken
            },
            success: function (data) {
                //fill data
                if (data !== '') {
                    //set value batdau
                    document.getElementById('page_load').value = (parseInt(page_load) + parseInt(1));

                    //fill data
                    $('#ajax_load_allnews').append(data);

                    //block button
                    $('#loadmore-home').removeAttr('disabled');

                    //notify
                    $('#notify').html("");
                } else {
                    //block button
                    $('#loadmore-home').attr('disabled', 'disabled');

                    //notify
                    $('#notify').html("No data.");
                }
            },
            error: function () {
                $('#notify').html("Err.");
            },
        });
    });

    $("#viewMoreTab2").click(function () {
        //block button
        $('#viewMoreTab2').attr('disabled', 'disabled');

        var page_load = document.getElementById('page_load_analysis').value;
        var str = $('[data-root=baseUrlRoot]').val();
        var csrfToken = document.getElementById('csrfToken').value;
        var analysis_id = document.getElementById('analysis_id').value;
        var url = str + "load-ajax-analysis";

        //notify
        $('#notify_analysis').html("<p style='text-align: center; padding: 10px 0 0 0;'><img src='" + str + "images/main-loader.gif'/></p>");

        $.ajax({
            url: url,
            type: 'POST',
            headers: {'X-XSRF-TOKEN': csrfToken},
            dataType: 'html',
            data: {
                "page": page_load,
                "analysis_id": analysis_id,
                "_csrfToken": csrfToken
            },
            success: function (data) {
                //fill data
                if (data !== '') {
                    //set value batdau
                    document.getElementById('page_load_analysis').value = (parseInt(page_load) + parseInt(1));

                    //fill data
                    $('#ajax_load_analysis').append(data);

                    //block button
                    $('#viewMoreTab2').removeAttr('disabled');

                    //notify
                    $('#notify_analysis').html("");
                } else {
                    //block button
                    $('#viewMoreTab2').attr('disabled', 'disabled');

                    //notify
                    $('#notify_analysis').html("No data.");
                }
            },
            error: function () {
                $('#notify_analysis').html("Err.");
            },
        });
    });

    $("#viewMoreCategory").click(function () {
        //block button
        $('#viewMoreTab2').attr('disabled', 'disabled');

        var page_load = document.getElementById('page_load').value;
        var str = $('[data-root=baseUrlRoot]').val();
        var csrfToken = document.getElementById('csrfToken').value;
        var category_id = document.getElementById('category_id').value;
        var url = str + "load-ajax-category";

        //notify
        $('#notify').html("<p style='text-align: center; padding: 10px 0 0 0;'><img src='" + str + "images/main-loader.gif'/></p>");

        $.ajax({
            url: url,
            type: 'POST',
            headers: {'X-XSRF-TOKEN': csrfToken},
            dataType: 'html',
            data: {
                "page": page_load,
                "category_id": category_id,
                "_csrfToken": csrfToken
            },
            success: function (data) {
                //fill data
                if (data !== '') {
                    //set value batdau
                    document.getElementById('page_load').value = (parseInt(page_load) + parseInt(1));

                    //fill data
                    $('#ajax_load_category').append(data);

                    //block button
                    $('#viewMoreCategory').removeAttr('disabled');

                    //notify
                    $('#notify').html("");
                } else {
                    //block button
                    $('#viewMoreCategory').attr('disabled', 'disabled');

                    //notify
                    $('#notify').html("No data.");
                }
            },
            error: function () {
                $('#notify').html("Err.");
            },
        });
    });

    $("#viewMoreTabCharMap").click(function () {
        //block button
        $('#viewMoreTabCharMap').attr('disabled', 'disabled');

        var page_load = document.getElementById('page_load_charmap').value;
        var str = $('[data-root=baseUrlRoot]').val();
        var csrfToken = document.getElementById('csrfToken').value;
        var url = str + "load-ajax-charmap";

        var ipKeySearch = document.getElementById('ipKeySearch').value;

        //notify
        $('#notify_charmap').html("<p style='text-align: center; padding: 10px 0 0 0;'><img src='" + str + "images/main-loader.gif'/></p>");
        $.ajax({
            url: url,
            type: 'POST',
            headers: {'X-XSRF-TOKEN': csrfToken},
            dataType: 'html',
            data: {
                'ipKeySearch': ipKeySearch,
                "page": page_load,
                "_csrfToken": csrfToken
            },
            success: function (data) {
                //fill data
                if (data !== '') {
                    //set value batdau
                    document.getElementById('page_load_charmap').value = (parseInt(page_load) + parseInt(1));

                    //fill data
                    $('#ajax_load_charmap').append(data);

                    //block button
                    $('#viewMoreTabCharMap').removeAttr('disabled');

                    //notify
                    $('#notify_charmap').html("");
                } else {
                    //block button
                    $('#viewMoreTabCharMap').attr('disabled', 'disabled');

                    //notify
                    $('#notify_charmap').html("No data.");
                }
            },
            error: function () {
                $('#notify_charmap').html("Err.");
            },
        });
    });

    $("#search_coinmap").click(function () {
        searchCoinMap();
    });

    function searchCoinMap() {
        //block button
        $('#search_coinmap').attr('disabled', 'disabled');

        var ipKeySearch = document.getElementById('ipKeySearch').value;
        var num = ipKeySearch.length;
        if(parseInt(num) < parseInt(3)) return false;

        var str = $('[data-root=baseUrlRoot]').val();
        var csrfToken = document.getElementById('csrfToken').value;
        var url = str + "load-ajax-charmap-search";

        //ipKeySearch.length

        //notify
        $('#notify_charmap_search').html("<p style='text-align: center; padding: 10px 0 0 0;'><img src='" + str + "images/main-loader.gif'/></p>");
        //$('#viewMoreTabCharMap').hide();

        $.ajax({
            url: url,
            type: 'POST',
            headers: {'X-XSRF-TOKEN': csrfToken},
            dataType: 'html',
            data: {
                "key": ipKeySearch,
                "_csrfToken": csrfToken
            },
            success: function (data) {
                //fill data
                if (data !== '') {
                    $('#viewMoreTabCharMap').show();

                    //set value batdau
                    document.getElementById('page_load_charmap').value = 2;

                    //fill data
                    $('#ajax_load_charmap').html(data);

                    //block button
                    $('#search_coinmap').removeAttr('disabled');

                    //notify
                    $('#notify_charmap_search').html("");
                } else {
                    $('#viewMoreTabCharMap').hide();

                    //fill data
                    $('#ajax_load_charmap').html('');

                    //block button
                    $('#search_coinmap').removeAttr('disabled');

                    //notify
                    $('#notify_charmap_search').html("No data.");
                }
            },
            error: function () {
                $('#notify_charmap_search').html("Err.");
                $('#search_coinmap').removeAttr('disabled');
            },
        });
    }

    $('.market_two').click(function () {
        $('.wrap-search-two').show();
        $('.map-btc').show();
        $('.crypto').removeClass('active');

        //block button
        $('#search_coinmap').attr('disabled', 'disabled');

        document.getElementById('ipKeySearch').value = '';

        var str = $('[data-root=baseUrlRoot]').val();
        var csrfToken = document.getElementById('csrfToken').value;
        var url = str + "load-ajax-charmap-search";

        //ipKeySearch.length

        //notify
        $('#notify_charmap_search').html("<p style='text-align: center; padding: 10px 0 0 0;'><img src='" + str + "images/main-loader.gif'/></p>");
        //$('#viewMoreTabCharMap').hide();

        $.ajax({
            url: url,
            type: 'POST',
            headers: {'X-XSRF-TOKEN': csrfToken},
            dataType: 'html',
            data: {
                "key": 'allCoin',
                "_csrfToken": csrfToken
            },
            success: function (data) {
                //fill data
                if (data !== '') {
                    //set value batdau
                    document.getElementById('page_load_charmap').value = 2;

                    //fill data
                    $('#ajax_load_charmap').html(data);

                    //block button
                    $('#search_coinmap').removeAttr('disabled');

                    //notify
                    $('#notify_charmap_search').html("");
                } else {
                    //fill data
                    $('#ajax_load_charmap').html('');

                    //block button
                    $('#search_coinmap').removeAttr('disabled');

                    //notify
                    $('#notify_charmap_search').html("No data.");
                }
            },
            error: function () {
                $('#notify_charmap_search').html("Err.");
                $('#search_coinmap').removeAttr('disabled');
            },
        });
    });

    function changeMoney() {
        var data = document.getElementById("change_money").value;
        if(data == 'usd'){
            $('.price-usd').show();
            $('.price-btv').hide();
        }else{
            $('.price-usd').hide();
            $('.price-btv').show();
        }
        console.log(data);
    }

    function changeCharMap() {
        var data = document.getElementById("choose_map").value;
        if((data == 'currency') || (data == '')){
            $('.wrap-search-two').show();
            $('.map-btc').show();
            $('.crypto').removeClass('active');
        }
        if(data == 'crypto'){
            $('.wrap-search-two').hide();
            $('.map-btc').hide();
            $('.crypto').addClass('active');
        }
        console.log(data);
    }

    $('#clickRegisterEmail').click(function () {
        var str = $('[data-root=baseUrlRoot]').val();
        var csrfToken = document.getElementById('csrfToken').value;
        var textEmail = document.getElementById('textEmail').value;
        $.ajax({
            url: str + 'register-email',
            type: 'POST',
            headers: {'X-XSRF-TOKEN': csrfToken},
            dataType: 'html',
            data: {
                "email": textEmail,
                "_csrfToken": csrfToken
            },
            success: function (data) {
                document.getElementById('textEmail').value = '';
                alert(data);
            }
        });
    });

    $("#viewMoreTag").click(function () {
        //block button
        $('#viewMoreTag').attr('disabled', 'disabled');

        var page_load = document.getElementById('page_load').value;
        var str = $('[data-root=baseUrlRoot]').val();
        var csrfToken = document.getElementById('csrfToken').value;
        var category_id = document.getElementById('category_id').value;
        var url = str + "load-ajax-tag";

        //notify
        $('#notify').html("<p style='text-align: center; padding: 10px 0 0 0;'><img src='" + str + "images/main-loader.gif'/></p>");

        $.ajax({
            url: url,
            type: 'POST',
            headers: {'X-XSRF-TOKEN': csrfToken},
            dataType: 'html',
            data: {
                "page": page_load,
                "category_id": category_id,
                "_csrfToken": csrfToken
            },
            success: function (data) {
                //fill data
                if (data !== '') {
                    //set value batdau
                    document.getElementById('page_load').value = (parseInt(page_load) + parseInt(1));

                    //fill data
                    $('#ajax_load_tag').append(data);

                    //block button
                    $('#viewMoreTag').removeAttr('disabled');

                    //notify
                    $('#notify').html("");
                } else {
                    //block button
                    $('#viewMoreTag').attr('disabled', 'disabled');

                    //notify
                    $('#notify').html("No data.");
                }
            },
            error: function () {
                $('#notify').html("Err.");
            },
        });
    });
})

//run right
// $(document).scroll(function(){
//     var curPos = $(document).scrollTop();
//
//     //run right
//     if(curPos >= 350) {
//         $('#fixedmenu').show(10);
//     } else {
//         $('#fixedmenu').hide(10);
//     }
// });
// $('.scrollup').click(function(){
//     $("html, body").animate({ scrollTop: 0 }, 600);
//     return false;
// });

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