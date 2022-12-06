/*
    This script contains bits of html content used in all (or at least the majority) of pages on this
    website. This includes the navigation bar, footer, etc.
*/

const companySlogan="Tasty donuts for every diet";

var dots="";
function addSnippets(level){
    /* For now, snippets are coded as strings that are included into webpages
        by changing their respective elements' innerHTML. The goal is to have
        snippets in their own html files. Those files would be read and imported
        into the webpages. That should make them easier to work with.
     */
    dots="../".repeat(level);
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
        "    <h2 class=\"footer-section-title\">Order</h2>" +
        "    <ul>" +
        "        <li><a href=\""+dots+"Order/Vegan/vegan_main.html\">Vegan</a></li>" +
        "        <li><a href=\""+dots+"Order/PeanutFree/peanutFree.html\">Peanut Allergy</a></li>" +
        "        <li><a href=\""+dots+"Order/DairyFree/dairyFree.html\">Dairy Free</a></li>" +
        "        <li><a href=\""+dots+"Order/GlutenFree/glutenFree.html\">Gluten Free</a></li>" +
        "        <li><a href=\""+dots+"Order/Keto/keto.html\">Keto</a></li>" +
        "    </ul>" +
        "</div>" +
        "<div class=\"footer-section\" id=\"footer-section-b\">" +
        "    <h2 class=\"footer-section-title\">Connect</h2>" +
        "    <ul>" +
        "        <li><a href=\"https://www.github.com/MichaelDutzman/COSC484/\">GitHub</a></li>" +
        "        <li><a href=\"http://www.linkedin.com\">LinkedIn</a></li>" +
        "        <li><a href=\"http://www.facebook.com\">Facebook</a></li>" +
        "        <li><a href=\"http://www.instagram.com\">Instagram</a></li>" +
        "    </ul>" +
        "</div>" +
        "<div class=\"footer-section\" id=\"footer-section-c\">" +
        "    <h2 class=\"footer-section-title\">Support</h2>" +
        "    <ul>" +
        "        <li><a href=\"#\">Donate</a></li>" +
        "        <li><a href=\"#\">Share</a></li>" +
        "        <li><a href=\"#\">Join</a></li>" +
        "        <li><a href=\"#\">Contact</a></li>" +
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

    //class="current-page" should be added to the <li> that contains the link to the current page
    var navBarHTML=
        "<div id=\"navigation-bar\">" +
        "    <ul id=\"nav-links\">" +
        "        <li><a href=\""+dots+"index.html\" class=\"homepage-link\"><img src=\""+dots+"ICSS/Images/Logos/sd_donut_logo.png\" /></a></li><!--" +
        "     --><li><a href=\""+dots+"Order/default.html\">Order<!-- sample text --></a></li><!--" +
        "     --><li><a href=\""+dots+"Account/login.html\">Account<!-- sample text --></a></li><!--" +
//      "     --><li><a href=\"#\">Cart<!-- sample text --></a></li><!--" +
//      "     --><li><a href=\"#\">About<!-- sample text --></a></li>" +
        "<!----></ul>" +
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
    //console.log(navBarHTML);
    navElement.innerHTML=navBarHTML;
}

/**
 * Reads the contents of a file and writes it into an HTMLElement. The contents of the file should
 * be the HTML that should be written into the page.
 * @param {string} filename a string with the location of the file containing the snippet
 * @param {HTMLElement} element the HTMLElement to which the snippet will be written
 * @param {int} level 
 * @depricated Use addSnippets() instead
 */
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
    return str.replaceAll("href=\"","href=\""+dots)
              .replaceAll("src=\"","src=\""+dots);
}