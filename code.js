var windows=[];
function newWindow(title, url) {
    windows.push($("<div class=\"win\" title=\"" + title + "\"><div class=\"title\">" + title + "</div><iframe src=\"" + url + "\"></iframe></div>"));
    var currentid=windows.length;
    windows[currentid].appendTo($("body"));
    windows[currentid].draggable({
            stack: "body .win",
            containment: $('body'),
            cursor: "move"
        });
        windows[currentid].resizable();
}
