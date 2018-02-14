var getData = sessionStorage.getItem("songs");
var converter = JSON.parse(getData);

var atrist = converter;
console.log('-----------');
console.log('nnnnnnnnnnn');
console.log(artist);

// $.getJSON('uploader/songdatabase.json',function(artist){
//     console.log("artist legends");

        // slider #1; FOR EXAMPLE
        var entries = '';
        for(z = 0; z < artist.length; z++){
        entries += '<p>' + artist[z].SongName+ '</p>';
        $("#legendary").append(entries);
    }
        // $('#legendary').slick();
                // $("#legendary").append(entries);
                // $('#legendary').slick('slickAdd', entries);

                // $('#legendary').slick({
                //     infinite: true,   slidesToShow: 3,    
                //     slidesToScroll: 2,    arrows:true,  variableWidth: true,    });      

// slider #2; FOR ALBUMS

