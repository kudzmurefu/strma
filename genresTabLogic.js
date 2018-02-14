var getData = sessionStorage.getItem("songs");
var converter = JSON.parse(getData);

var songs = converter;
    // console.log('-----------');
    // console.log('nnnnnnnnnnn');
    console.log(songs);

// $(document).ready(function(){
//     $.getJSON('uploader/songdatabase.json',function(songs){ 

      var songlist = '';
      console.log(songs.length);
      for(s = 0; s < songs.length; s++){
          

        songlist += '<div class="SongContainer">' + '<img id="artworkSonglist" src="slickSlider/albumCovers/' + songs[s].SongArtwork +'"width="50px" height="50px">' 
            + '<div id="SonglistText">' + '<p class="SongListTitle">' + songs[s].SongName + '</p>' + 
                '<p class="SongListArtist">' + songs[s].ArtistName +'</p></div></div>';
        
                // Append Songs to "songList" DIV
                $(".songList").append(songlist);
                }

                $(".SongContainer").click(
                    
                    
                    
                    function(){
                        var songNamee = $(this).find('p.SongListTitle').text();
                        var artistNamee = $(this).find('p.SongListArtist').text();
                    
                    for(c = 0; c < songs.length; c++){
                        console.log(songs.length);
                        if(songNamee == songs[c].SongName && artistNamee == songs[c].ArtistName){
                            // console.log(songs[c].SongName + songs[c].ArtistName)

                            PlayingTest = $("#playerContent").has("iframe");
                            if(PlayingTest){
                            $("#iframe").remove();
                            $('#songPlayer').css("display","block");
                            $('#playerContent').append('<p id="iframe">'+ songs[c].iframeURL + '</p>');
                            }
                        }
                    }
                })

                

//     });
// });