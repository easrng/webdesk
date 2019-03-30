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
    $($(".win .close")[currentid]).click(function (e){
        this.parent().parent().parent().remove()
    }.bind($($(".win .close")[currentid])))
}
