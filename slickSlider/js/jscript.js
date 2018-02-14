$(document).ready(function(){

    var getData = sessionStorage.getItem("songs");
    var converter = JSON.parse(getData);

    var data = converter;
    console.log('-----------');
    console.log('nnnnnnnnnnn');
    console.log(data);

//   $.getJSON('uploader/songdatabase.json',function(data){ 
//     console.log(data);

// slider #1; FOR EXAMPLE
          var output = '';
          for(x = 0; x < data.length; x++){
          output += '<div  class="songItem">' + '<img width="150px" height="150px" src="slickSlider/albumCovers/'+data[x].SongArtwork 
          +'" alt="">' + '<div id="songTextContainer">'+ '<p class="songTitle" >' + data[x].SongName
           + '</p>'+ '<br>' + '<p class="songArtist">'+ data[x].ArtistName + '</p>' + '</div>' +'<br>' + '</div>';
          $('#slider1').slick('slickAdd', output);
          }
    
                                // Initialize Slider
                                $('#slider2').slick('slickAdd', output);
                                // ONCLick of song
                                $('.songItem').click(function(){
                                    // $('#nowPlaying').remove();
                                    $('.songItem').css("background","none");                              
                                    $(this).css("background","#1b1717f5");
                                    // $(this).append('<p id="nowPlaying">Now Playing....<p/>')
                                    // $('.container').css("height","220px");
                                    // $('.slick-prev').css({"left":"-25px","background-color":"#880e26","height":"148px","width":"20px","margin-top":"-43px"});
                                    // $('.slick-next').css({"right":"-25px","background-color":"#880e26","height":"148px","width":"20px","margin-top":"-43px"});

                                var gettTitle = $(this).find('p.songTitle').text();
                                var gettArtist = $(this).find('p.songArtist').text();

                                // Loop thru DATABASE & find title matching title text of clicked <DIV>
                                for(i =0; i < data.length; i++){
                                    if(gettTitle == data[i].SongName){
                                    console.log(true);
                                    
                                        // Launch Player Container if match & if theres song already playing then remove it & re-initiate
                                        PlayingTest = $("#playerContent").has("iframe");
                                        if(PlayingTest){
                                        $("#iframe").remove();
                                        $('#songPlayer').css("display","block");
                                        $('#playerContent').append('<p id="iframe" style="position: fixed;bottom: -31px;width: 107%;padding-left: 11px;background: #191817;height: 50px;padding-top: 18px;">'+ data[i].iframeURL + '</p>');
                                        }
                                }
                                }
                                }); //END OF SLIDER 

// slider #x; FOR y (if has new data source, must GET JSON)

});
    
    // slider #2; FOR ALBUMS
    $('#slider2').slick({
      infinite: true,   slidesToShow: 5,    slidesToScroll: 2,    arrows:true,  variableWidth: true,    });

