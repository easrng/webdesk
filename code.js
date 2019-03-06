function newWindow(title, url) {
    var win=$("<div class=\"win\" title=\"" + title + "\"><div class=\"title\">" + title + "</div><iframe src=\"" + url + "\"></iframe></div>";
    win.appendTo($("body"))
    win.draggable({
            stack: "body .win",
            containment: $('body'),
            cursor: "move"
        });
        win.resizable();
}
