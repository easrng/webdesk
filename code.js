window._winId = 0;

function newWindow(title, url) {
    window._winId++;
    document.body.innerHTML += "<div id=\"win-" + _winId + "\" class=\"win\" title=\"" + title + "\"><div class=\"title\">" + title + "</div><iframe src=\"" + url + "\"></iframe></div>";
    $(function() {
        $("#win-" + _winId).draggable({
                stack: "body .win",
                containment: $('body'),
                cursor: "move"
            });
        $("#win-" + _winId).resizable();
    });
}