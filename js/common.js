$(document).ready(function() {

	// tabs
	function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
             	var index = $(this).attr("href");
             	tab_link.removeClass("is-active");
             	tab_link.parent().removeClass("is-active");
             	$(this).addClass("is-active");
             	$(this).parent().addClass("is-active");
             	tab_cont.hide();
             	$(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }
    if ($(".js-tab-group").length) {
    	tab();
    };

    if ($(".input_phone").length) {
        $(".input_phone").mask("999 999-99-99");
    }


    // pseudo radio buttons

    function radio(){

        $(".js-radio-item").on("click", function(){
            $(this).parent().find(".js-radio-item").removeClass('is-selected');
            $(this).addClass('is-selected');
        });
    }
    if ($(".js-radio").length) {
        radio();
    };
    

});