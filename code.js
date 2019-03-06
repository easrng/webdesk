var windows=[];
function newWindow(title, url) {
    var currentid=windows.length;
    windows.push($("<div class=\"win\" title=\"" + title + "\"><div class=\"title\">" + title + "</div><iframe src=\"" + url + "\"></iframe></div>"));
    windows[currentid].appendTo($("body"));
    windows[currentid].draggable({
            stack: "body .win",
            containment: $('body'),
            cursor: "move"
        });
        windows[currentid].resizable();
}
