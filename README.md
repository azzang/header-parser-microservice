# Request Header Parser Microservice
## Functionality:
parses request headers, returns IP address, language and operating system. relies on the following parsing packages:
* [request-ip]
* [accept-language-parser]
* [useragent]

## Endpoint
``https://guarded-fjord-46721.herokuapp.com/``

## Response Example
{"ipAddress": "99.162.152.179", "language": "en-US", "operatingSystem":"Linux"}

[request-ip]: https://github.com/pbojinov/request-ip
[accept-language-parser]: https://github.com/opentable/accept-language-parser
[useragent]: https://github.com/3rd-Eden/useragent
