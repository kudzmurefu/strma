var getData = sessionStorage.getItem("songs");
var converter = JSON.parse(getData);

var data = converter;
console.log('-----------');
console.log('nnnnnnnnnnn');
console.log(data);


// $(document).ready(function(){
// $.getJSON('http://127.0.0.1:8080/sliderOwn/songdatabase.json',function(data){ 

    var output = '';
    for(x = 0; x < data.length; x++){

    output += '<div class="item">' + '<img width="170px" height="170px" src="assets/images/albumCovers/'+data[x].SongArtwork 
    +'" alt="">' + '<div id="songTextContainer">'+ '<p class="songTitle" >' + data[x].SongName
     + '</p>'+ '<br>' + '<p class="songArtist">'+ data[x].ArtistName + '</p>' + '</div>' +'<br>' + '</div>';
    }
    
    $("#innerContainer").append(output);
    
    
    
    // OnClick of Item
    $(".item").click(function(){
        
        $(".item").removeAttr('style');  
        $(this).css("background","#c1e40bbf");
        console.log(this);
    });