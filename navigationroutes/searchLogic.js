$(".searchButton").click(function(){

        searchQuery = $(".searchBar").val();
                    console.log(searchQuery);
                // ...............CONNECT TO DATABASE in Session Storage........
                    // var getData = sessionStorage.getItem("songs");
                    //     var converter = JSON.parse(getData);
                    //     var SongData = converter;
                // Connect to Firebase
                var firebaseRef = firebase.database().ref();
                        // sub-folders Connect
                        var artistsDB = firebaseRef.child("artists");
                        var connecttt_artist = artistsDB;
                        var albumsDB = firebaseRef.child("albums");
                        var connecttt_albums = albumsDB;
                        var songsDB = firebaseRef.child("songs");
                        var connecttt_songs = songsDB;

    // 
            songResults = ""; /*used*/
            artistResults = "" ;
            albumResults = "" ;

                            // capitalize function
                            function Capitalizze(str){var str = str.toLowerCase().replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function(replace_latter) { 
                                    return replace_latter.toUpperCase(); });  //Can use also /\b[a-z]/g
                                    return str;
                            }  //First letter capital in each word      
    
            // Capitalize SSEARCH value
                searchedWord = Capitalizze(searchQuery);
                                    console.log("search = " + searchedWord);
                                
                //                 // LOOP thru SONG Database
                //                 for(x = 0; x < SongData.length; x++){

                //                         // Search word in DATABASE
                //                         if(searchedWord == SongData[x].SongName){
                //                                 console.log(true);
                //                                 console.log("...............");
                //                                 songResults += '<div class="SongResultItem"><img height="40px" width="40px" src="assets/images/albumCovers/'+ SongData[x].SongArtwork +'"><div class="metaSR"><p class="songNameSR">' + SongData[x].SongName +
                //                                 '</p><p class="artistNameSR">' + SongData[x].ArtistName + '</p></div></div>';

                //                                 $(".SongResultItem").remove();
                //                                 $(".songResults").append(songResults);
                //                             }
                //                                 else{
                //                                     console.log("NO MATCH");
                //                                 }


                //                         // ............................PLAYSONG..................................//
                //                         $(".SongResultItem").click(function(){
                                            
                //                             songTitlee = $(this).find('p.songNameSR').text();

                //                             for(i = 0; i < SongData.length; i++){
                //                                 if( songTitlee == SongData[i].SongName){
                //                                     console.log(true);
                                                    
                //                                         // Launch Player Container if match & if theres song already playing then remove it & re-initiate
                //                                         PlayingTest = $("#playerContent").has("iframe");
                //                                         if(PlayingTest){
                //                                         $("#iframe").remove();
                //                                         $('#songPlayer').css("display","block");
                //                                         $('#playerContent').append('<p id="iframe" style="position: fixed;bottom: -31px;width: 107%;padding-left: 11px;background: #191817;height: 50px;padding-top: 18px;">'+ SongData[i].iframeURL + '</p>');
                //                                         }
                //                                 }
                //                             }
                                    
                //                         })



                                                
                //                 };

                //                 // LOOP THRU ARTIST DATABASE

// atrists Search Query and deposit
        connecttt_artist.on("value", function(data){
            var artistSearch = data.val();
            var keys = Object.keys(artistSearch);

                for(var a = 0; a < keys.length; a++){
                        k = keys[a];
                        var artistNamee_DB = artistSearch[k].artistName;
                        var artistImage_DB = artistSearch[k].artistImage;
                            if(searchQuery == artistNamee_DB){
                                // artistResults += '<div class="artistResultItem"><img height="40px" width="40px" src="assets/images/artistProfiles/'+ artistImage_DB +'"><div class="metaAR"><p class="artistNameAR">' +artistNamee_DB +
                                //                 '</p></div></div>';

                                artistResults += '<div class="artistResultItem"><div class="metaAR"><p class="artistNameAR">' + artistSearch[k].artistName +
                                '</p></div></div>';
                                $(".artistResults").remove();
                                $(".artistResults").append(artistResults);
                            }
                }
        })
            
});