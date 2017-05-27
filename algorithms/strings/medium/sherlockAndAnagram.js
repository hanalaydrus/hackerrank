process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function isAnagram (a, b) {
    var y = a.split("").sort().join(""),
        z = b.split("").sort().join("");
    if (z === y) {
        return true;
    } else {
        return false;
    }
}

function makeSubString (word) {
    var wordLength = word.length;
    var wordSubString = [];

    for (i=0;i<wordLength;i++){
        for (j=0;j<(wordLength-i);j++) {
            wordSubString.push(word.substr(j,(i+1)));
        }
    }
    return wordSubString;
}

function processData(input) {
    var in_a = input.split('\n');
    var n = parseInt(in_a[0]);

    for (var i = 1; i <= n; i++){
        var s = in_a[i];
        var subString = makeSubString(s);
        var count = 0;

        for (var x=0;x<subString.length;x++){
            for (var y=(x+1);y<subString.length;y++){
                if((subString[x].length == subString[y].length) && (x != y)) {
                   if (isAnagram(subString[x],subString[y]) == true) {
                       count++;
                       continue;
                   }
                } else {
                    break;
                }
            }
        }
        console.log(count);
    }
}
