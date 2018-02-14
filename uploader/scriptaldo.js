/*function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'songdatabase.json', true);
    xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
    
    // .open will NOT return a value but simply returns undefined in async mode so use a callback
    callback(xobj.responseText);}    }
    xobj.send(null);
    }
    
    // Call to function with anonymous callback
    loadJSON(function(response) {
    // Do Something with the response e.g.
    songdata = JSON.parse(response);
    
    // Assuming json data is wrapped in square brackets as Drew suggests
    var songs = songdata;
    var output = '';

    for(var x = 0; x < songs.length; x++){
        output += '<li>' + songs[x].SongName + '</li>';
    }
    document.getElementsById('view').innerHTML = output;
    
});*/


/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var response = JSON.parse(xhttp.responseText);
    
        var output = '';

        for(var x = 0; x < response.length; x++){
            output += '<li>' + response[x].SongName + '</li>';
            }
        document.getElementById('view').innerHTML = output;
        }
    };
    xhttp.open("GET", "songdatabase.json", true);
    xhttp.send();*/

    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var response = JSON.parse(xhttp.responseText);
    
        var output1 = '';
        var output2 = ' '

        for(var x = 0; x < response.length; x++){
           //output2 +=  '<img src="' +  response[x].MusicArtwork + '" class="imagg" width="50px" height="60px">';
            output1 += '<img src="' +  response[x].MusicArtwork + '" class="imagg" width="50px" height="60px">' + '<br>' + '<span class="spanno">' + response[x].SongName + '</span>' + '<br/>' + '<span>' + response[x].ArtistName + '</span>' + '<br>'  + '<br>';
            
            }
        document.getElementById('view').innerHTML = /*output2 +*/ output1;
        }
    };
    xhttp.open("GET", "songdatabase.json", true);
    xhttp.send();