/*
    This script contains bits of html content used in all (or at least the majority) of pages on this
    website. This includes the navigation bar, footer, etc.
*/

function addSnippets(level){
    /* For now, snippets are coded as strings that are included into webpages
        by changing their respective elements' innerHTML. The goal is to have
        snippets in their own html files. Those files would be read and imported
        into the webpages. That should make them easier to work with.
     */
    var snippets=[addFooter,addNavBar];
    snippets.forEach((snippet)=>{
        try{
            snippet(level);
        }
        catch(err){
            //do nothing
        }
    });
}

function addFooter(level){
    var footer=document.getElementsByTagName("footer")[0];
    var footerHTML=
        "<div class=\"footer-section\" id=\"footer-sitename\">" +
        "    <span class=\"website-title\" id=\"footer-website-title\">Stylish Donuts</span>" +
        "</div>" +
        "<div class=\"footer-section\" id=\"footer-section-a\">" +
        "    <h2 class=\"footer-section-title\">Order<!-- sample text --></h2>" +
        "    <ul>" +
        "        <li><a href=\"#\">Vegan<!-- sample text --></a></li>" +
        "        <li><a href=\"#\">Peanut Allergy<!-- sample text --></a></li>" +
        "        <li><a href=\"#\">Dairy Free<!-- sample text --></a></li>" +
        "        <li><a href=\"#\">Gluten Free<!-- sample text --></a></li>" +
        "        <li><a href=\"#\">Keto<!-- sample text --></a></li>" +
        "    </ul>" +
        "</div>" +
        "<div class=\"footer-section\" id=\"footer-section-b\">" +
        "    <h2 class=\"footer-section-title\">Section B<!-- sample text --></h2>" +
        "    <ul>" +
        "        <li><a href=\"#\">That<!-- sample text --></a></li>" +
        "        <li><a href=\"#\">Could<!-- sample text --></a></li>" +
        "        <li><a href=\"#\">Be<!-- sample text --></a></li>" +
        "        <li><a href=\"#\">Included<!-- sample text --></a></li>" +
        "        <li><a href=\"#\">At The<!-- sample text --></a></li>" +
        "        <li><a href=\"#\">Bottom<!-- sample text --></a></li>" +
        "        <li><a href=\"#\">Of The<!-- sample text --></a></li>" +
        "    </ul>" +
        "</div>" +
        "<div class=\"footer-section\" id=\"footer-section-c\">" +
        "    <h2 class=\"footer-section-title\">Section C</h2>" +
        "    <ul>" +
        "        <li><a href=\"#\">Webpages</a></li>" +
        "        <li><a href=\"#\">Such</a></li>" +
        "        <li><a href=\"#\">As a</a></li>" +
        "        <li><a href=\"#\">Sitemap</a></li>" +
        "        <li><a href=\"#\">Or Socials</a></li>" +
        "    </ul>" +
        "</div>" +
        "<div id=\"footer-copyright\">" +
        "    <span id=\"copyright-statement\">COSC484 Group 4 &copy; 2022</span>" +
        "    <!-- Maybe make \"Group 4\" into a link to our github or something -->" +
        "</div>";


    footer.innerHTML=footerHTML;
}

function addNavBar(level){
    const navElement=document.getElementById("navigation-container");
    //getSnippetFromFile("nav-bar.html",navElement,level);
    var navBarHTML=
        "<div id=\"navigation-bar\">" +
        "    <ul id=\"nav-links\">" +
        "        <li><a href=\"#\" class=\"homepage-link\"></a></li><!--" +
        "     --><li><a href=\"#\">Order<!-- sample text --></a></li><!--" +
        "     --><li><a href=\"#\">Account<!-- sample text --></a></li><!--" +
        "     --><li class=\"current-page\"><a href=\"#\">Cart<!-- sample text --></a></li><!--" +
        "     --><li><a href=\"#\">About<!-- sample text --></a></li>" +
        "    </ul>" +
        "</div>" +
        "<div id=\"search-container\">" +
        "    <form id=\"searchbar\">" +
        "        <div id=\"search-input-container\">" +
        "            <input type=\"search\" name=\"searchquery\" id=\"search-input\" placeholder=\"Search for donuts...\" />" +
        "            <button type=\"submit\">" +
        "                <div id=\"search-button-onhover\"></div>" +
        "            </button>" +
        "        </div>" +
        "    </form>" +
        "</div>";
    
    navElement.innerHTML=navBarHTML;
}

function getSnippetFromFile(filename,element,level){
    var xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        let snippet=this.response;
        snippet=editLinks(snippet,level);
        document.getElementById(id).innerHTML=snippet;
    }
    xhttp.open("GET","Snippets/"+filename);
    xhttp.send();
}

function editLinks(str,level){
    var dots="../".repeat(level);
    return str.replaceAll("href=\"","href=\""+dots);
}