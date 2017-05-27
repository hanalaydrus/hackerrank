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
    var time = readLine();
    var arrTime = [time[0]+time[1],time[3]+time[4],time[6]+time[7],time[8]+time[9]];
    var arrNewTime = [];

    if (arrTime[3]=='AM') {
        if (arrTime[0]=='12') {
            arrNewTime[0]='00';
        } else {
            arrNewTime[0]=arrTime[0];
        };
    } else if (arrTime[3]=='PM') {
        if (arrTime[0]=='12') {
            arrNewTime[0]='12';
        } else {
            arrTime[0] = parseInt(arrTime[0]);
            arrNewTime[0]=arrTime[0]+12;
        };
    }
    arrNewTime[1]=arrTime[1];
    arrNewTime[2]=arrTime[2];
    console.log(arrNewTime.join(':'))
}
