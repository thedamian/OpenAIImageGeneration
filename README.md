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

Example of what it generated for the full description above:
![image example](https://oaidalleapiprodscus.blob.core.windows.net/private/org-7SWtnQrHPOSKve6mQoTrzK4j/user-TrqpnGyHlzLzwOsY8hol5dMH/img-uIuyhDAzoW52QTmKnPGFhR2u.png?st=2023-11-21T03%3A02%3A50Z&se=2023-11-21T05%3A02%3A50Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-20T20%3A14%3A47Z&ske=2023-11-21T20%3A14%3A47Z&sks=b&skv=2021-08-06&sig=N0sBTvjWGuME6qBdgGn2w7PCYWX%2BzuU5rhyjaMpal0Q%3D)
