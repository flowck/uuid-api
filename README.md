# uuid-api

[![Build Status](https://travis-ci.com/flowck/uuid-api.svg?branch=master)](https://travis-ci.com/flowck/uuid-api)

As simple as that: This api will respond with brand new uuid:

**Get a single uuid**

/api/uuids


```
{
  "uuid": "1852004a-be84-45dd-9544-b62ce9ce9f80",
  "version": 4,
  "createdAt": "2018-12-27T15:16:15.210Z"
}
```

**Get a :n uuids**

/api/uuids/1000


```
{
"uuids": [
  {
    "uuid": "ffd4bd64-a3ee-4fd6-a805-a9eb66830566",
    "createdAt": "2018-12-27T15:19:50.005Z"
  },
  {
    "uuid": "22708ff8-8e6b-424b-b072-9d536e0a4fb2",
    "createdAt": "2018-12-27T15:19:50.005Z"
  },
  {
    "uuid": "049db276-6e36-4533-98ef-03edb4fce8d9",
    "createdAt": "2018-12-27T15:19:50.005Z"
  },
  {
    "uuid": "7c216215-e49d-478a-a9fd-fe174a84b4df",
    "createdAt": "2018-12-27T15:19:50.005Z"
  }
  ],
  "version": 4
}
```

## Running it

* Install the dependencies: ```npm i```

* Run the application: ```npm start```

* Run prettier: ```npm run p:w``` 

* Tests: npm test

# MIT License

Copyright 2018 Firmino Changani

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.