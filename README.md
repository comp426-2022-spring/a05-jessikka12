<!-- DELETE EVERYTHING ABOVE THIS LINE -->

# Coinserver Description

This package exposes endpoints and provides a web interface to emulate random chance coin flip events in the following ways:

1. Flip one coin - returns result of a coin flip
2. Flip many coins - returns the results of many coin flips with a summary
3. Guess a coin flip and - returns the result of a flip and guess match

# Coinserver Installation

Run `npm install` inside the package root directory.

This package was buid using Node.js LTS (16.x).
Other package dependency and version information can be found in `package.json`.

# Coinserver Runtime Documentation
```
node server.js [options]

--port, -p	Set the port number for the server to listen on. Must be an integer
            between 1 and 65535. Defaults to 5000.

--debug, -d If set to true, creates endlpoints /app/log/access/ which returns
            a JSON access log from the database and /app/error which throws 
            an error with the message "Error test successful." Defaults to 
            false.

--log, -l   If set to false, no log files are written. Defaults to true.
            Logs are always written to database.

--help, -h	Return this message and exit.
```

# Coinserver API Documentation

## Endpoints

### /app/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/
```

#### Response body

```
{"message":"Your API works! (200)"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flip/
```

#### Response body

```
{"flip":"tails"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 16
ETag: W/"10-N9e0DDykqBPnqphc8f4bzHcjsuM"
Date: Sun, 10 Apr 2022 15:36:01 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flips/:number/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flips/10/
```

#### Response body

```
{"raw":["heads","tails","tails","tails","heads","heads","heads","heads","tails","heads"],"summary":{"tails":4,"heads":6}}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 121
ETag: W/"79-ASADpBbRRst6F1e6lzOUFHThC3Y"
Date: Sun, 10 Apr 2022 15:38:43 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/coin/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flip/coin/
```

#### Response body

```
404 NOT FOUND
```

#### Response headers

```
HTTP/1.1 404 Not Found
X-Powered-By: Express
Date: Tue, 19 Apr 2022 21:40:17 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/call/:guess/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flip/call/heads/
```

#### Response body

```
{"call":"heads","flip":"tails","result":"lose"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Sun, 10 Apr 2022 15:39:45 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/call/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"guess":"heads"}' http://localhost:5000/app/flip/call/
```

#### Response body

```
{"call":"heads","flip":"heads","result":"win"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Thu, 07 Apr 2022 16:30:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/coins/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"number":"30"}' http://localhost:5000/app/flip/coins/
```

#### Response body

```
{"raw":["heads","heads","heads","tails","heads","heads","tails","tails","tails","heads","heads","heads","heads","heads","heads","tails","tails","heads","heads","heads","heads","heads","heads","heads","tails","heads","tails","heads","tails","heads"],"summary":{"heads":21,"tails":9}}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 283
ETag: W/"11b-9dPTqGfngSPFEOq4loChIlpdSIE"
Date: Thu, 07 Apr 2022 15:23:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/log/access/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/log/access/
```

#### Response body

```
[{"id":1,"remoteaddr":"::ffff:127.0.0.1","remoteuser":null,"time":"1650404522431.0","method":"GET","url":"/app/log/access/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.74.0"}]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 442
ETag: W/"1ba-PGp4niS906vVa5iGW6o3JYI+lAA"
Date: Tue, 19 Apr 2022 21:44:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/log/access/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/log/access/
```

#### Response body

```
404 NOT FOUND
```

#### Response headers

```
HTTP/1.1 404 Not Found
X-Powered-By: Express
Date: Tue, 19 Apr 2022 21:48:39 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/log/error/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/log/error/
```

#### Response body

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Error: Error test successful.<br> &nbsp; &nbsp;at /home/jessikka12/comp426/a05-jessikka12/index.js:64:15<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/home/jessikka12/comp426/a05-jessikka12/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/home/jessikka12/comp426/a05-jessikka12/node_modules/express/lib/router/route.js:137:13)<br> &nbsp; &nbsp;at Route.dispatch (/home/jessikka12/comp426/a05-jessikka12/node_modules/express/lib/router/route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/home/jessikka12/comp426/a05-jessikka12/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /home/jessikka12/comp426/a05-jessikka12/node_modules/express/lib/router/index.js:281:22<br> &nbsp; &nbsp;at Function.process_params (/home/jessikka12/comp426/a05-jessikka12/node_modules/express/lib/router/index.js:341:12)<br> &nbsp; &nbsp;at next (/home/jessikka12/comp426/a05-jessikka12/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at Object.addData (/home/jessikka12/comp426/a05-jessikka12/src/middleware/mymiddleware.js:23:5)<br> &nbsp; &nbsp;at /home/jessikka12/comp426/a05-jessikka12/index.js:48:13</pre>
</body>
</html>
```

#### Response headers

```
HTTP/1.1 500 Internal Server Error
X-Powered-By: Express
Content-Security-Policy: default-src 'none'
X-Content-Type-Options: nosniff
Content-Type: text/html; charset=utf-8
Content-Length: 1297
Date: Tue, 19 Apr 2022 21:58:48 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/login/ (POST)

_Not yet implemented_

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/user/new/ (POST)

_Not yet implemented_

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/user/update/ (PATCH)

_Not yet implemented_

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/user/delete/ (DELETE)

_Not yet implemented_

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```
