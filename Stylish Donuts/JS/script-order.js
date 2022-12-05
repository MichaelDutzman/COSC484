window.addEventListener("load",function(e){
    addValues();
});

function addValues(){
    const parameters=(new URL(document.location)).searchParams;
    
    var username=(parameters.get("username") || "exampleuser");
    document.getElementById("username-hidden").value=username;
}

function thirdFunction(argument){
    alert("Ingredients:" + argument);
}
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10); 
    if(value <12){
        value = isNaN(value)? 0 : value;
        value ++;
        input.value = value; 
    }  
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10); 
    if (value > 0) {
        value = isNaN(value)? 0 : value;
        value --;
        input.value = value;
    }
}


function addToCart(){
    var donuts=[];
    var prices=[]; // this is an array just in case the prices change from all being $6
    for(var i=1;true;i++){ // get amounts from inputs
        try{ // try to keep finding inputs with the name range1, range2, etc. ...
            donuts[(i-1)]=parseInt(document.getElementById("range"+i).value);
        }
        catch(e){ // ... and if you reach one that doesn't exist, then stop searching
            break;
        }
    }

    for(var i=0;i<donuts.length;i++){
        prices[i]=6; // all prices are set to $6. A different statement would need to be written if prices change from all being $6
    }
}

function updateCart(inputID){
    var amount=parseInt(document.getElementById(inputID).value);
    document.getElementById("cart-donut-amount-"+inputID).innerHTML=amount;
    allDonuts[diet][inputID].amount=amount;
    document.getElementById("cart-donut-price-"+inputID).innerHTML="($"+(allDonuts[diet][inputID].price*amount)+")";
    
    var total=0;
    for(var donut in allDonuts[diet]){
        total+=(allDonuts[diet][donut].price*allDonuts[diet][donut].amount);
    }
    document.getElementById("cart-total").innerHTML=total;
}

function writeHTML(){
    var i=0;
    for(x in allDonuts[diet]){
        let shortName=x;
        let fullName=allDonuts[diet][x].name;

        document.getElementById("cart-details-container").innerHTML+=
        "<div class=\"cart-details\" id=\"cart-details-"+shortName+"\">\n" +
        "    <span class=\"cart-donut-name\" id=\"cart-donut-name-"+shortName+"\">"+fullName+"</span>\n" +
        "    <span class=\"cart-donut-amount\" id=\"cart-donut-amount-"+shortName+"\">0</span>\n" +
        "    <span class=\"cart-donut-price\" id=\"cart-donut-price-"+shortName+"\">($0)</span>" +
        "</div>\n";

        document.getElementsByClassName("pro-container")[0].innerHTML+=
        "<div class=\"pro1\">" +
        "    <img id=\"pic"+i+"\" class=\"img\" src=\""+shortName+".jpg\" alt=\""+fullName+"\">" +
        "    <h4>"+fullName+" <i onClick=\"thirdFunction('"+listify(allDonuts[diet][x].ingredients)+"')\" class=\"fa-solid fa-circle-info\"></i></h4>" +
        "    <div class=\"desc\">" +
        "        <p>$6</p>" +
        "        <div class=\"counter\">" +
        "            <span class=\"down\" onClick='decreaseCount(event, this); updateCart(\""+shortName+"\");'>-</span>" +
        "            <input id=\""+shortName+"\" name=\""+shortName+"\" type=\"text\" value=\"0\" onchange='updateCart(\""+shortName+"\");' placeholder=\"0\">" +
        "            <span class=\"up\"  onClick='increaseCount(event, this); updateCart(\""+shortName+"\");'>+</span>" +
        "        </div>" +
        "    </div>" +
        "</div>";

        i++;
    }
}