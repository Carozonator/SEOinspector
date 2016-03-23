$.fn.seoInspector = function ( currentUrl ){
    var homePage = currentUrl;
    var visitedPages = Array();
    searchLinks(homePage);
    function searchLinks( url ){
        console.log(" Current Page: ", url);
        if (visitedPages.indexOf(url)>=0){
            return;
        }else{
            visitedPages.push(url);
        }
        $.get( url, function( data ) {
            var hrefs = $(data).find("a");
            var imgs = $(data).find("img");
            console.log("  Images:")
            for (var i=0; i<imgs.length;i++){
                console.log("    ",$(imgs[i]).attr("src"));
            }
            console.log(" - - - - - - -  - - - - - ");
            console.log("  Links:")
            for (var i=0; i<hrefs.length;i++){
                console.log("    href=",$(hrefs[i]).attr("href")," class=",$(hrefs[i]).attr("class")," id=",$(hrefs[i]).attr("id"));
            }
            for (var i=0; i<hrefs.length;i++){
                if ($(hrefs[i]).attr("href").search(homePage)>=0){
                    searchLinks($(hrefs[i]).attr("href") );
                }
            }
        });
    }
});
