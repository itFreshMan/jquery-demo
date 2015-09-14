/**
 * Created by Administrator on 2015/9/14.
 */
;(function($){

    //全局的，对应 $.nav(); 调用
 /*
    $.extend({
        'nav':function(){
            $('.nav').css({
                'list-style': 'none',
                'margin':0,
                'padding': 0,
                'display': 'none'
            });

            $('.nav').parent().hover(
                function(){
                    $(this).find('.nav').slideDown('nomal');
                },
                function(){
                    $(this).find('.nav').stop().slideUp('nomal');
                }
            )
        }
    });*/

   //局部的 调用： $('.list').eq(0).nav('red'); //附带传递的参数
    $.fn.extend({
        'nav':function(color){
            $(this).find('.nav').css({
                'list-style': 'none',
                'margin':0,
                'padding': 0,
                'display': 'none',
                'color':color
            });

            $(this).find('.nav').parent().hover(
                function(){
                    $(this).find('.nav').slideDown('nomal');
                },
                function(){
                    $(this).find('.nav').stop().slideUp('nomal');
                }
            )
        }
    });

})(jQuery);
