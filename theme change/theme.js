themeKey = "theme";

function switchTheme(themeName) {
    var name = "default";
    if (themeName == null) {
        var storedName = sessionStorage.getItem(themeKey);
        if (storedName != null)
            name = storedName;
    } else {
        name = themeName;
        sessionStorage.setItem(themeKey, name);
    }
    var link =  $("link, [type='text/css']");
    link.attr("href", name + ".css");    
}