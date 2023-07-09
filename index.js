const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    //await characterAI.authenticateWithToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJpc3MiOiJodHRwczovL2NoYXJhY3Rlci1haS51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDg5NTIzMzEyMzIwNzQzMzk3MTAiLCJhdWQiOlsiaHR0cHM6Ly9hdXRoMC5jaGFyYWN0ZXIuYWkvIiwiaHR0cHM6Ly9jaGFyYWN0ZXItYWkudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY4NzM0ODI3OCwiZXhwIjoxNjg5OTQwMjc4LCJhenAiOiJkeUQzZ0UyODFNcWdJU0c3RnVJWFloTDJXRWtucVp6diIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.Fq8fjHtLwcEJ2Y81LidBGT92P02KYThai71ljxZa3ILP883ep6jd5nXY_RR3AOeiTKjpSt3gSaYVbkJ4CS3BTVenKJdTqf-ebNhl1N5yeHN58IU_nTpBSd2TYLFOJdp0_au7XUH0KpOhAzWtpxrFSGRwKJrJotNsGeZVu1xUgNJha9LgfjwgVfD_D1UeZk-ehVrvcN0NtAUyQP-WV7jiqJN5bwMoT6IuJUCSp2ztXXjXE1qmBsFdRL-BmGcSkcxm2niD5ivNlZagRCwhYMedb8z1n4Y7HxU65Q3UyjGOkVgSggpk1dYaoDzalctYgrZw3kWhQpQAsi416Lcb49yUug");

	await characterAI.authenticateAsGuest();
	
    const characterId = "v3lyisRb7INyd5BUdUKEKS1-MUTBom9dY9qV9-2ioTE" // Discord moderator

    const chat = await characterAI.createOrContinueChat(characterId);
    const response = await chat.sendAndAwaitResponse('Repeat what i said before that message', true)

    console.log(response);
    // use response.text to use it in a string.
})();