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
    var s = readLine();
    var word = [];
    var allWords = [];

    for (i=0; i<s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            allWords.push(word.join(''));
            word = [];
        }
        word.push(s[i]);
    }
    allWords.push(word.join(''));
    console.log(allWords.length);
}
