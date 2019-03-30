var windows=[];
var numwins=0;
function newWindow(title, url) {
    var currentid=numwins;
    numwins++;
    windows[currentid]=($("<div data-win=\""+currentid+"\" class=\"win\" title=\"" + title + "\"><div class=\"title\"><div class=\"title-text\">" + title + '</div><div class=\"buttons\"><button class="min mdl-button mdl-js-button mdl-button--icon"><i class="material-icons">minimize</i></button><button class="mdl-button mdl-js-button mdl-button--icon max"><i class="material-icons">crop_square</i></button><button class="mdl-button mdl-js-button mdl-button--icon close"><i class="material-icons">close</i></button></div></div><iframe src=\"' + url + "\"></iframe></div>"));
    windows[currentid].appendTo($("body"));
    windows[currentid].draggable({
            stack: "body .win",
            containment: $('body'),
            cursor: "move"
        });
    windows[currentid].resizable();
    var $buttons=windows[currentid].children(".title").children(".buttons");
    $buttons.children(".close").click(
        function (e){
            this.parent().parent().parent().remove()
        }
        .bind(
            $buttons.children(".close")
        )
    )
   $buttons.children(".max").click(
        function (e){
            var win=this.parent().parent().parent();
            if(windows[0].attr("data-restore")){
                win.css(JSON.parse(windows[0].attr("data-restore")));
                windows[0].attr("data-restore","")
            } else {
                var tmp=win.position();
                tmp.width=win.width();
                tmp.height=win.height();
                windows[0].attr("data-restore",JSON.stringify(tmp));
                win.width($("body").width()).height($("body").height()).css({top:0,left:0});
            }
        }
        .bind(
            $buttons.children(".max")
        )
    )
}
