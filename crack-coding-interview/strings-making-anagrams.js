process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a = readLine().split('');
    var b = readLine().split('');
    
    var lengthA = a.length;
    var lengthB = b.length;
    var totalLength = lengthA + lengthB;
    var count = 0;
    
    for(var i = 0; i < lengthA;i++){
        for(var j = 0; j < lengthB; j++){
            if(a[i] == b[j]){
                b.splice(j,1);
                count++;
                break;
            }
        }
    }
    
    console.log(totalLength - (count*2));
}