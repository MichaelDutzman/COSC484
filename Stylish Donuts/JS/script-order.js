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