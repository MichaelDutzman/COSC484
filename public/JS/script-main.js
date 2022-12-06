/**
 * "Parallax scrolling is a technique in computer graphics where background images move past
 * the camera more slowly than foreground images, creating an illusion of depth in a 2D scene
 * of distance." - Wikipedia.
 * 
 *   This funcition applies this effect on the the passed object by attaching an event handler
 * to the window's scroll event. When the user scrolls, the passed object's background is moved,
 * but only by a fraction of the distance scrolled by the user.
 *   Note: This effect is set to not work on mobile devices because of problems caused by
 * asynchronous scrolling.
 * 
 * @param {HTMLElement} obj - the HTML element whose background will be manipulated to achieve
 *                            a parallax scrolling effect
 * @param {float} rate - The rate at which the background will scroll, relative to the scroll
 *                       speed. In other words, if the rate is 0.5, the background will scroll at
 *                       half the speed of the everthing else. If the rate is 1, the background
 *                       will scroll at the same speed as everything else. If the rate is 0, the
 *                       background will stay in a fixed position whether or not the user is
 *                       scrolling.
 *                       If no rate is specified, it will be set to 0.04
 */
function parallaxScroll(obj,rate){
    rate=(rate || 0.04);
    var isMobile=(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || window.innerWidth<=1024);
    if(!isMobile){
        obj.style.backgroundAttachment="fixed";
        document.addEventListener("scroll",function(e){
            obj.style.backgroundPositionY=(50+(window.scrollY*rate))+"%";
        });
    }
}

/**
 * Adds content and sets links and footer. This function should be called when the website is loaded.
 * @param {int} level the level of the current page. 0 is for the homepage, 1 is for a subsite, 2 for
 *                    a subsubsite, etc.
 */
function loadSite(level){
    addSnippets(level);
    enableSearchBarFocusEffect("search-input","searchbar");
}

/**
 * The 
 * @param {string} inputID 
 * @param {string} parentID 
 */
function enableSearchBarFocusEffect(inputID,parentID){
    var input=document.getElementById(inputID);
    input.addEventListener("focus",function(e){
        focusParent(parentID);
    })
    input.addEventListener("blur",function(e){
        blurParent(parentID);
    })
}
/**
 * Focuses an element's parent by adding a "focus" class to the parent
 * @param {string} id the element's parent's ID
 */
function focusParent(id){
    document.getElementById(id).classList.add("focused");
}
/**
 * Blurs an element's parent by removing the "focus" class from the parent
 * @param {string} id the element's parent's ID
 */
 function blurParent(id){
    document.getElementById(id).classList.remove("focused");
}

/**
 * Changes an input's value according to whether the + or - button was
 *      pressed. This function should be set as the onclick handler for
 *      both the increase and decrease buttons.
 * @param {string} targetID the ID of the input whose value will change
 * @param {int} increment the amount that the input's value will be
 *      incremented. It is recomended that this be set to 1 for the increase
 *      button and -1 for the decrease button.
 * @returns false. This is so that the form isn't submitted when the user
 *      tries to change an input's value.
 */
function quantityChooser(targetID,increment){
    const targetElement=document.getElementById(targetID);
    var currentValue=parseInt(targetElement.value);
    const min=(targetElement.min || 0);
    const max=(targetElement.max || (currentValue+increment));
    targetElement.value=Math.min(
            Math.max((currentValue+increment),min),
        max);
    return false;
}


function listify(array = []){
    if(array.length==0){
        return "";
    }
    if(array.length==1){
        return array[0];
    }
    if(array.length==2){
        return array[0]+" and "+array[1];
    }

    var list=array[0];
    for(var i=1;i<(array.length-1);i++){
        list+=", "+array[i];
    }
    list+=", and "+array[(array.length-1)];
    return list;
}

function moneyFormat(number){
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(number);
}