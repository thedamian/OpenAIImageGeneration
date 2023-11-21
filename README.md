# Open AI Image Generation example  

It's simple. Publish this and you'll have an endpoint that will (slowly) reply to you a url for your image generation.

You use it by hitting http://localhost:8080/create with a POST like:
```
{
    "prompt": "Create an image that represents the following story line: Just sit right back and you'll hear a tale,\nA tale of a fateful trip\nThat started from this tropic port... (you finish the rest)"
}
```

You MUST install an older version of the openAI library as I haven't found how to do this with the 4.x version of their library.

so do the old ```npm i ``` but just in case after run: 
```
npm i openai@3.1.0
```