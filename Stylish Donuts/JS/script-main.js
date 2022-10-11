function parallaxScroll(obj){
    var isMobile=(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || window.innerWidth<=1024);
    if(!isMobile){
        document.addEventListener("scroll",function(e){
            obj.style.backgroundPositionY=(50+(window.scrollY/25))+"%";
        });
    }
}

/**
 * Adds content and sets links and footer. This function should be called when the website is loaded.
 * @param {int} level the level of the current page. 0 is for the homepage, 1 is for a subsite, 2 for a subsubsite, etc.
 */
function loadSite(level){
    //addSnippets(level);
    enableSearchBarFocusEffect("search-input","searchbar");
}

function enableSearchBarFocusEffect(inputID,parentID){
    var input=document.getElementById(inputID);
    input.addEventListener("focus",function(e){
        focusParent(parentID);
    })
    input.addEventListener("blur",function(e){
        blurParent(parentID);
    })
}
function focusParent(id){
    document.getElementById(id).classList.add("focused");
}
function blurParent(id){
    document.getElementById(id).classList.remove("focused");
}