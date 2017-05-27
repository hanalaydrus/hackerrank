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
        for (i=0;i<subString.length;i++) {
            if (subString[i] != -1) {
                for (j=0;j<subString.length;j++) {
                    if ((i != j) && (subString[j] != -1)){
                        if (isAnagram(subString[i],subString[j]) == true) {
                            count++;
                            subString[i] = -1;
                            subString[j] = -1;
                        }
                    }
                }
            }
        }
        console.log(count);
    }
}
