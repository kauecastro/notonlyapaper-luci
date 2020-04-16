# TEQUILA API Doc.

Tequila API is an REST API that manage generic tags related to consumers of any kind of plataforms that provides Videos On Demand. This means that you can create tags, like what movies the consumer want to see in the future or what series he want to favorite. 

## Setup

First, you have to make sure that you have the following plataforms installed in your enviroment:

- * https://www.docker.com/products/docker-desktop : `Docker;`
- * https://nodejs.org/en/download/ : `NodeJS`;

Ti initialize the API in your local enviroment, you have to open your terminal, go to the root of the project and put the following comands:

Install all dependencies:
```npm install```

Initialize the server:
```npm start```

This will initialize your server in a localhost:3000.

## Endpoints

Tequila API is an service that manage only tags about Video On Demand plataforms, so we follow a default schemma for all:

```
{
  "consumerId˜: ˜Id of the consumer˜,
  "key": "The key is the name of the tag, we will explain this in the next topic."
  "value": "Value is the Identity of the content, for example: Id or any unique identity of the movie or serie"
}
```

The key is the name of the tag that you want to create for your content ( Serie or movie ). The following endpoint is to return all tags available:

``` GET - /tag/keys ``` 

Other routes:

Create a tag:
```POST - /tag```

Sample request: 

```
  POST - localhost:3000/tag
  
  body: 
    {
      "consumerId":"12",
      "key": "LAST_SEEN",
      "value": "MOV123"
    }
``` 

Get a tag:
```GET - /tag```

Sample request: 

Get the last seem movie with id 12 of the consumer 12.
```
  GET - localhost:3000/tag?key=LAST_SEEM&consumerId=12&value=MOV2
``` 

Get all last seem movies or series.
```
  GET - localhost:3000/tag?key=LAST_SEEM&value=MOV2
``` 

Get all tags for the movie MOV2.
```
  GET - localhost:3000/tag?value=MOV2
``` 

Get a tag:
```DELETE - /tag```

Sample request: 

Delete the last seem movie with id 12 of the consumer 12.
```
  DELETE - localhost:3000/tag?key=LAST_SEEM&consumerId=12&value=MOV2
``` 








