function processData(input) {
    var array = input.split('\n');
    var v = parseInt(array[0]);
    var n = parseInt(array[1]);
    var ar = array[2].split(' ');
    ar = ar.map(function(x){return parseInt(x)})

    var value = ar.findIndex(function(x){return x == v })
    console.log(value)

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
