function sortFunction(a, b) {
    if (a[0] > b[0]) return  1;
    if (a[0] < b[0]) return -1;

    if (a[1] > b[1]) return  1;
    if (a[1] < b[1]) return -1;
    return 0;
}

function processData(input) {
    var answer = input.split('\n');
    var answer1 = answer[0].split(' ');
    var n = parseInt(answer1[0]);
    var m = parseInt(answer1[1]);
    var k = parseInt(answer1[2]);
    var trainTracks = [];
    var wide = n*m;
    if (k>0) {
        for (var i = 1; i<(k+1); i++) {
            var track = answer[i].split(' ');
            var trackParseInt = track.map(function(x){return parseInt(x)})
            trainTracks.push(trackParseInt);
        }
        trainTracks.sort(sortFunction);

        var rx = trainTracks[0][0];
        var c1x = trainTracks[0][1];
        var c2x = trainTracks[0][2];
        wide -= (c2x-c1x+1);

        for (var i = 1; i<k; i++) {
            var r = trainTracks[i][0];
            var c1 = trainTracks[i][1];
            var c2 = trainTracks[i][2];

            if (r == rx) {
                if ((c1 >= c1x) && (c2 <= c2x)) {

                } else if ((c1 >= c1x) && (c2 >= c2x) && (c1 <= c2x)) {
                    wide -= (c2-c2x);
                    c2x = c2;
                } else if (c1 > c2x) {
                    wide -= (c2 -c1 +1);
                    c1x = c1;
                    c2x = c2;
                }

            } else {
                rx = r;
                c1x = c1;
                c2x = c2;
                wide -= (c2x-c1x+1);
            }
        }
    }
    console.log(wide);
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
