;(function($){
    $.fn.star=function(options){
        var defaults={
            target:".UL",
            index:0,
            target1:".content",
            tap:'.fa',
            class:['show','hide'],
            evt:['click','mouseover','mouseout'],
            html:['太差劲了吧!','一般般吧!','一般般吧!','侬着使吧!','Prefect!']  
        }
        var opts=$.extend({},defaults,options),
            _this=this,
            target=$(opts.target),
            target1=$(opts.target1);
            function auto(){
            target.on(opts.evt[1],opts.tap,function(){
                $(this).addClass(opts.class[1])
                $(this).prevAll().addClass(opts.class[1])
            }).on(opts.evt[2],opts.tap,function(){
                $(this).removeClass(opts.class[1])
                $(this).prevAll().removeClass(opts.class[1])
            }).on(opts.evt[0],opts.tap,function(){
                $(this).addClass(opts.class[0])
	            $(this).prevAll().addClass(opts.class[0])
	            $(this).nextAll().removeClass(opts.class[0])
                 opts.index=$(this).index();
                switch(opts.index){
                    case opts.index:
                        target1.html(opts.html[opts.index])
                        break;
                }
            })
           
            
            }
      auto();      
    }
    
})(jQuery);