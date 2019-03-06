var windows=[];
function newWindow(title, url) {
    var currentid=windows.length;
    windows.push($("<div class=\"win\" title=\"" + title + "\"><div class=\"title\"><div class=\"title-text\">" + title + '</div><div class=\"buttons\"><button class="mdl-button mdl-js-button mdl-button--icon"><i class="material-icons">minimize</i></button><button class="mdl-button mdl-js-button mdl-button--icon"><i class="material-icons">crop_square</i></button><button class="mdl-button mdl-js-button mdl-button--icon"><i class="material-icons">close</i></button></div></div><iframe src=\"' + url + "\"></iframe></div>"));
    windows[currentid].appendTo($("body"));
    windows[currentid].draggable({
            stack: "body .win",
            containment: $('body'),
            cursor: "move"
        });
        windows[currentid].resizable();
}
