// connect to Database
    var firebaseRef = firebase.database().ref();
    

        var artistsDB = firebaseRef.child("artists");
            var connecttt_artist = artistsDB;
        var albumsDB = firebaseRef.child("albums");
            var connecttt_albums = albumsDB;
        var songsDB = firebaseRef.child("songs");
            var connecttt_songs = songsDB;
        var tracklist = "";
        var countt = 0;
        count_artist = 0;
        count_albums = 0;
        count_songs = 0;
        var result_Artist = "";
        


                        // add extra tracklist fields
                        $("#addField").click(function(){
                            // Adjust Height
                            currHeight = $("#formArea").height();
                                x =  (currHeight*0.06);
                                newHeight = currHeight + x;
                                        bodyCurr = $("body").height();
                                        newBody = x + bodyCurr;

                                var extraField = `<input class="trackList"name="tracks[]">`;
                                $(".mainFields").append(extraField); 
                                $("#formArea").css("height",newHeight);
                                $("body").css("height",newBody);

                        })

                        // create tracklist array
                        $(function(){
                                    $(".listAttacher").click(function(){
                                        tracklist = [];            
                                        $('input[name^=tracks]').each(function(){
                                            tracklist.push($(this).val());
                                        });
                                        countt = 0;
                                        // console.log(countt);
                                        console.log(tracklist);

                                    });
                        });       

                        
// .....Database Checker & Search on Enter..........//

            // OnEnter keypress//
            $(".searchBar").keypress(function(event) {
                        valuee = $(".searchBar").val();
                        if (event.which == 13) {
                            event.preventDefault();
                            alert(valuee);
                        }
            });

            // .........SONG entries.......//
            $(".uploadSong").click(function(){
                var title = $("#title").val();
                var artist = $("#artist").val();
                var year = $("#year").val();
                var imagee = $("#image").val();
                var iframePath = $("#iframe").val();

                        // push to Database
                            songsDB.push({
                                songTitle: title,
                                artist: artist,
                                year: year,
                                image: imagee,
                                iframe: iframePath
                            })
                            // clear fields
                            $("#title").val(" ");
                            $("#artist").val(" ");
                            $("#year").val(" ");
                            $("#image").val(" ");
                            $("#iframe").val(" ");

                            // temporary storage for DB checks
                        var songName_Temp = $('#title').val();
                        var songArtist_temp = $('#artist').val();
                        

                    // check DB
                        connecttt_songs.on('value', function(data){
                            var songData = data.val();
                            var keys = Object.keys(songData);
                                for(var c=0; c < keys.length; c++){
                                    var k = keys[c];
                                    var songName_DB = songData[k].songTitle;
                                    var songArtist_DB = songData[k].artist;
                                    
                                        // if data exists in DB
                                        if(songName_Temp == songName_DB && songArtist_temp == songArtist_DB){
                                            $("p.statusDBs").remove();
                                            $(".entryStatusS").append(`<p class="statusDBs">Data Uploaded</p>`);
                                            // clear fields
                                            $("#title").val("");
                                            $("#artist").val("");
                                            $("#year").val("");
                                            $("#iframe").val("");
                                            $("#image").val("");
                                        }
                                            else{
                                                console.log("Artist Data not Entered" + count_songs);
                                            }          
                                }
                        })
                                            // Counter increment
                                            if($(".entryStatuss").has("p.statusS")){
                                                count_songs++;
                                                $(".counterSongs").text(count_songs);
                                            } 
            })
                            
            // })

            // .......ARTIST entries.......//
            $(".uploadArtist").click(function(){
                    var artistName = $("#artistNamee").val();
                    var artistImage = $("#artistimage").val();
                    var genre = $("#genre").val();

                        // temporary storage for DB checks
                        var artistName_Temp = $("#artistNamee").val();;

                        // push to Database
                        artistsDB.push({
                            artistName: artistName,
                            artistImage: artistImage,
                            genre: genre
                        })
                        // check DB
                        connecttt_artist.on('value', function(data){
                            var artistData = data.val();
                            var keys = Object.keys(artistData);
                                for(var a=0; a < keys.length; a++){
                                    var k = keys[a];
                                    var artistname_DB = artistData[k].artistName;
                                    
                                        // if data exists in DB
                                        if(artistName_Temp == artistname_DB){
                                            $("p.statusDB").remove();
                                            $(".entryStatus").append(`<p class="statusDB">Data Uploaded</p>`);
                                            // clear fields
                                            $("#artistNamee").val(" ");
                                            $("#artistimage").val("");
                                            $("#genre").val("");
                                        }
                                            else{
                                                console.log("Artist Data not Entered" + count_artist);
                                            }          
                                }
                        })
                                            // Counter increment
                                            if($(".entryStatus").has("p.statusDB")){
                                                count_artist++;
                                                $(".counterAlbums").text(count_artist);
                                            }                       
            })

            // .......Album entries.......//
            $('.uploadAlbum').click(function(){
                var albumtitle = $('#albumTitle').val();
                var albumArtist = $('#AlbumArtist').val();
                var releaseDate = $('#ReleaseDate').val();
                var Producer = $("#Producer").val();
                var albumGenre = $("#genre").val();
                var AlbumTracklist = tracklist;
                

                            // push to Database
                            albumsDB.push({
                                albumTitle: albumtitle,
                                Artist: albumArtist,
                                releaseDate: releaseDate,
                                Producer: Producer,
                                Tracklist: tracklist
                            })

                    // temporary storage for DB checks
                        var albumName_Temp = $('#albumTitle').val();
                        var albumAtist_temp = $('#AlbumArtist').val();
                        

                    // check DB
                        connecttt_albums.on('value', function(data){
                            var albumData = data.val();
                            var keys = Object.keys(albumData);
                                for(var b=0; b < keys.length; b++){
                                    var k = keys[b];
                                    var albumName_DB = albumData[k].albumTitle;
                                    var albumArtist_DB = albumData[k].Artist;
                                    console.log(albumName_DB);
                                    
                                        // if data exists in DB
                                        if(albumAtist_temp == albumArtist_DB && albumName_Temp == albumName_DB){
                                            $("p.statusDBa").remove();
                                            $(".entryStatusA").append(`<p class="statusDBa">Data Uploaded</p>`);
                                            // clear fields
                                            $(".formfield").val("");
                                            $("#AlbumArtist").val("");
                                            $("#ReleaseDate").val("");
                                            $("#Producer").val(" ");
                                            $("#genre").val("");
                                            $(".tracklist").remove();
                                            $(".mainFields").append(`<input class="trackList"name="tracks[]">`);
                                        }
                                            else{
                                                console.log("Artist Data not Entered" + count_artist);
                                            }          
                                }
                        })
                                            // Counter increment
                                            if($(".entryStatusA").has("p.statusDBa")){
                                                count_albums++;
                                                $(".counterAlbums").text(count_albums);
                                            } 
            })
