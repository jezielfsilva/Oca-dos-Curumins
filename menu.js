$("CLASSE DA DIV COM OS LINKS").addClass("closed");
$('CLASSE DO BOTAO').click(function(){
    if($("CLASSE DA DIV COM OS LINKS").hasClass("closed")) {
        $("CLASSE DA DIV COM OS LINKS").animate({top:'POSIÇÃO ABERTO'},{duration:400}).removeClass("closed");
    }
    else {
        $("CLASSE DA DIV COM OS LINKS").animate({top:'POSIÇÃO FECHADO'},{duration:400}).addClass("closed");
    }
});
$('CLASSE DO LINK').click(function(){
        $("CLASSE DA DIV COM OS LINKS").animate({top:'POSIÇÃO FECHADO'},{duration:400}).addClass("closed");
});