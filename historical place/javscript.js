$(document).ready(function(){
    $(window).on('load scroll',function(){
        $('section').each(function(){
            let top=$(window).scrollTop();
            let height=$(this).height();
            let offset=$(this).offset().top-200;
            let id=$(this).attr('id');
            
            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});