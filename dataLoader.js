$(document).ready(function(da){

    var Get_SongData = $.getJSON('http://127.0.0.1:8080/sliderOwn/songdatabase.json', function(songs){
       
        

        sessionStorage.songs = JSON.stringify(songs);

        var songData = JSON.parse(sessionStorage.songs);

        console.log("<.......>");
        console.log(songData);
        console.log("<.......>");


    });


})