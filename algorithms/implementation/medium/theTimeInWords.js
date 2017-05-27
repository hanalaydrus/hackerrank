function readNumber (number) {
    var readNumber = {dozens : -1, unit : -1};
    switch (number) {
        case 11 : readNumber.unit = 'eleven'; break;
        case 12 : readNumber.unit = 'twelve'; break;
        case 13 : readNumber.unit = 'thirteen'; break;
        case 15 : readNumber.unit = 'fifteen'; break;
        default :
            if ((number / 10) > 1) {
                readNumber.dozens = number - (number % 10);
                readNumber.unit = (number % 10);
            } else {
                readNumber.unit = number;
            };

            switch (readNumber.unit) {
                case 1 : readNumber.unit = 'one'; break;
                case 2 : readNumber.unit = 'two'; break;
                case 3 : readNumber.unit = 'three'; break;
                case 4 : readNumber.unit = 'four'; break;
                case 5 : readNumber.unit = 'five'; break;
                case 6 : readNumber.unit = 'six'; break;
                case 7 : readNumber.unit = 'seven'; break;
                case 8 : readNumber.unit = 'eight'; break;
                case 9 : readNumber.unit = 'nine'; break;
                case 10 : readNumber.unit = 'ten'; break;
            };

            switch (readNumber.dozens) {
                case 10 : readNumber.dozens = 'teen'; break;
                case 20 : readNumber.dozens = 'twenty'; break;
                case 30 : readNumber.dozens = 'thirty'; break;
            };
    }
    return (readNumber);
}


function main() {
    var h = parseInt(readLine());
    var m = parseInt(readLine());

    var readMinute = readNumber(m);
    var readHour = readNumber(h);
    var readTime = '';

    if (m == 0) {
        console.log(readHour.unit+" o' clock");
    } else if (m <= 30) {
        if (m == 15) {
            console.log('quarter past '+readHour.unit)
        } else if (m == 30) {
            console.log('half past '+readHour.unit)
        } else {
            if (readMinute.dozens != -1) {
                console.log(readMinute.dozens+' '+readMinute.unit+' minutes past '+readHour.unit)
            } else {
                console.log(readMinute.unit+' minutes past '+readHour.unit)
            }
        }
    } else {
        readHour = readNumber(h+1);
        readMinute = readNumber(60 - m);
        m = 60 - m;
        if (m == 15) {
            console.log('quarter to '+readHour.unit)
        } else {
            if (readMinute.dozens != -1) {
                console.log(readMinute.dozens+' '+readMinute.unit+' minutes to '+readHour.unit)
            } else {
                console.log(readMinute.unit+' minutes to '+readHour.unit)
            }
        }
    }

}
