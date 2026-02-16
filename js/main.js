function scrollTo(id){
    var tag = $("a[name='"+ id +"']");
    $('html,body').animate({scrollTop: tag.offset().top}, 'slow');
}

$('#goto_up, #navmenu_goto_up').click(function() { $('html, body').animate({ scrollTop: 0 }, 500); });

$("#navmenu_goto_about").click(function() { 
    $('html, body').animate({ scrollTop: 0 }, 500); 
    openCloseNavmenu();
});

$("#goto_pictures, #navmenu_goto_pictures").click(function() { 
    scrollTo('section_pictures'); 
    openCloseNavmenu();
});
$("#goto_games").click(function() { 
    scrollTo('section_games'); 
    openCloseNavmenu();
});
$(".goto_contact").click(function() { 
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 600); // 600ms animáció
    
    openCloseNavmenu();
});

