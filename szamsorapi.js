var http = require('http');

let makeArray = (num) => {

    let array = [];
    for (let i = 1; i <= num; i++) {
        array[i] = i;
    }
    return array;

}

let mathFunction = (mathName, number) => {

    let num = Number(number);

    switch (mathName) {

        case "fibonacci":

            let fibArray = [];

            fibArray.push(0, 1);
            fibArray.length = num;

            if (num >= 2) {
                for (let i = 2; i < fibArray.length; i++) {
                    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
                }
            }
            return fibArray;

        case "prim":

            let primeCheck = numbs => {
                if (numbs < 2)
                    return false;

                for (let i = 2; i < numbs; i++)
                    if (numbs % i == 0)
                        return false;

                return true;
            }

            let primeNumbers = (a, b) => {

                if (a > b)
                    return false;

                let primeArray = [];

                for (let i = a; i <= b; i++)
                    if (primeCheck(i))
                        primeArray.push(i);

                return primeArray;
            }
            return primeNumbers(1, num);


        case "paratlan":

            let uniqueNum = makeArray(num).filter(el => el % 2 != 0);
            return uniqueNum;


        case "paros":

            let coupleNum = makeArray(num).filter(el => el % 2 == 0);
            return coupleNum;


        case "negyzetgyok":

            let sqr = makeArray(num).map(el => Math.sqrt(el));
            return sqr;


        case "exp":

            let exp = makeArray(num).map(el => Math.exp(el));
            return exp;

        default:
            break;
    }

}

let server = http.createServer(function(request, response) {

    let reqArray = request.url.split("/");

    console.log(reqArray);

    switch (true) {
        case request.method == "GET" && reqArray[1] == "fibonacci":

            response.writeHead(200, { "Content-type": "application/json; charset=utf-8" });
            response.write(
                JSON.stringify(
                    mathFunction(reqArray[1], reqArray[2])
                )
            );
            response.end();

            break;

        case request.method == "GET" && reqArray[1] == "prim":

            response.writeHead(200, { "Content-type": "application/json; charset=utf-8" });
            response.write(
                JSON.stringify(
                    mathFunction(reqArray[1], reqArray[2])
                )
            );
            response.end();

            break;

        case request.method == "GET" && reqArray[1] == "paratlan":

            response.writeHead(200, { "Content-type": "application/json; charset=utf-8" });
            response.write(
                JSON.stringify(
                    mathFunction(reqArray[1], reqArray[2])
                )
            );
            response.end();

            break;

        case request.method == "GET" && reqArray[1] == "paros":

            response.writeHead(200, { "Content-type": "application/json; charset=utf-8" });
            response.write(
                JSON.stringify(
                    mathFunction(reqArray[1], reqArray[2])
                )
            );
            response.end();

            break;

        case request.method == "GET" && reqArray[1] == "negyzetgyok":

            response.writeHead(200, { "Content-type": "application/json; charset=utf-8" });
            response.write(
                JSON.stringify(
                    mathFunction(reqArray[1], reqArray[2])
                )
            );
            response.end();

            break;

        case request.method == "GET" && reqArray[1] == "exp":

            response.writeHead(200, { "Content-type": "application/json; charset=utf-8" });
            response.write(
                JSON.stringify(
                    mathFunction(reqArray[1], reqArray[2])
                )
            );
            response.end();

            break;



        default:

            response.writeHead(200, { "Content-type": "text/plain; charset=utf-8" });
            response.write("Ezt a kérést nem tudom teljesíteni");
            response.end();

            break;
    }

});

server.listen(3000);