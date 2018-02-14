





$(document).ready(function(){
    $.getJSON('uploader/songdatabase.json',function(data){ 
      console.log(data);
  
  // slider #1; FOR EXAMPLE
            var output = '';
            for(x = 0; x < data.length; x++){
            output += '<div  class="songItem">' + '<img width="150px" height="150px" src="slickSlider/albumCovers/'+data[x].SongArtwork 
            +'" alt="">' + '<div id="songTextContainer">'+ '<p class="songTitle" >' + data[x].SongName
             + '</p>'+ '<br>' + '<p class="songArtist">'+ data[x].ArtistName + '</p>' + '</div>' +'<br>' + '</div>';
            $('#slider1').slick('slickAdd', output);
            }
                          // WHen song is Clicked
                          // $('.songItem').click(function(){
                          //   $('.songItem').css("background","#1b1717f5");
                          // var gettTitle = $(this).find('p.songTitle').text();
                          // var gettArtist = $(this).find('p.songArtist').text();
  
                          // // Loop thru DATABASE & find title matching title text of clicked <DIV>
                          // for(i =0; i < data.length; i++){
                          //     if(gettTitle == data[i].SongName){
                          //     console.log(true);
                              
                          //       // Launch Player Container if match & if theres song already playing then remove it & re-initiate
                          //       PlayingTest = $("#playerContent").has("iframe");
                          //       if(PlayingTest){
                          //         $("#iframe").remove();
                          //         $('#songPlayer').css("display","block");
                          //         $('#playerContent').append('<p id="iframe">'+ data[i].iframeURL + '</p>');
                          //         }
                          // }
                          // }
                          // }); //END OF SLIDER #1
  
  // slider #2; FOR ALBUMS
            // var output1 = '';
            // for(j = 0; j < data.length; j++){
            // output1 += '<div  class="songItem">' + '<img width="150px" height="150px" src="slickSlider/albumCovers/'+data[j].SongArtwork 
            // +'" alt="">' + '<div id="songTextContainer">'+ '<p class="SongTitle">' + data[j].SongName 
            // + '</p>'+ '<br>' + '<p class="SongArtist">'+ data[j].ArtistName 
            // + '</p>' + '</div>' +'<br>' + '</div>';
            $('#slider2').slick('slickAdd', output);
            // }
            $('.songItem').click(function(){
              $('.songItem').css("background","#1b1717f5");
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
                    $('#playerContent').append('<p id="iframe">'+ data[i].iframeURL + '</p>');
                    }
            }
            }
            }); //END OF SLIDER #2
  
  // slider #x; FOR y (if has new data source, must GET JSON)
  
  });
      // slider #1; FOR EXAMPLE
      $('#slider1').slick({
        infinite: true,   slidesToShow: 5,    slidesToScroll: 2,    arrows:true,  variableWidth: true,    });
      // slider #2; FOR ALBUMS
      $('#slider2').slick({
        infinite: true,   slidesToShow: 5,    slidesToScroll: 2,    arrows:true,  variableWidth: true,    });
  
  });