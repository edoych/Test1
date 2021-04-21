function multiplay() {
    var select_value = document.getElementById("list").value;
    var inp = document.getElementsByName('license');
        for (var i = 0; i < inp.length; i++) {
            if (inp[i].type == "radio" && inp[i].checked) {
                console.log(inp[i].value * select_value);
                var data = (inp[i].value * select_value);
            }
        }
        document.querySelector('.n_price').innerHTML = data;
}


function myFunction () {
    multiplay()
    index()
}

function index() {
    var inp = document.getElementsByName('license');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            var res = (i+1);
        }   
    }
    document.getElementById("selected_number").innerHTML = res;
}




