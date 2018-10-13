var detail = (function (module) {
    module.init = function () {
        var summaries = $('.fix_web_scroll');
        var height = $('.thenew-main .w1000').clientHeight;
        var rightBox = $('.thenew-main .w1000 .w300').outerHeight(true);
        var leftBox = $('.thenew-main .w1000 .w700').outerHeight(true);
        if (leftBox > rightBox) {
            summaries.each(function (i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];
                summary.scrollToFixed({
                    marginTop: $('.fix_web_scroll').outerHeight(true) + height, limit: function () {
                        var limit = 0;
                        if (next) {
                            limit = $(next).offset().top - $(this).outerHeight(true);
                        } else {
                            limit = $('.stop-scroll-home').offset().top - $(this).outerHeight(true);
                        }
                        return limit;
                    }, zIndex: 999
                });
            });
        }
    }
    return module;
}(detail || {}));

var list = (function (module) {
    module.init = function () {
        var summaries = $('.fix_web_scroll_list');
        var height = $('.thenew-main .w1000').clientHeight;
        var rightBox = $('.thenew-main .w1000 .w300').outerHeight(true);
        var leftBox = $('.thenew-main .w1000 .w700').outerHeight(true);
        if (leftBox > rightBox) {
            summaries.each(function (i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];
                summary.scrollToFixed({
                    marginTop: $('.fix_web_scroll_list').outerHeight(true) + height, limit: function () {
                        var limit = 0;
                        if (next) {
                            limit = $(next).offset().top - $(this).outerHeight(true);
                        } else {
                            limit = $('.stop-scroll').offset().top - $(this).outerHeight(true);
                        }
                        return limit;
                    }, zIndex: 999
                });
            });
        }
    }
    return module;
}(list || {}));

$(document).ready(function () {
    detail.init();
    list.init();
});