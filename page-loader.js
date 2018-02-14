$('.iconHolder').click(function() {

    // GET DATA FROM SESSION STORAGE
    var getData = sessionStorage.getItem("songs");
    var converter = JSON.parse(getData);

    var data = converter;
    console.log('-----------');
    console.log('nnnnnnnnnnn');
    console.log(data);

    // GET NAME OF CLICKED PAGE
    pageName  = $(this).find('p.iconTitle').text();
    console.log(pageName);
    
    // highlight the clicked link
    $('p.iconTitle').css({"color":"white","font-size":"10px", "border-bottom":"none","letter-spacing":"3px"});
    $("p.iconTitle").hover(function(){
        $(this).css({"color":"rgba(255, 255, 255, 0.37)"});},
        function(){
            $(this).css({"color":"white"});
        });

    $(this).find('p.iconTitle').css({"padding-bottom":"3px","color":"#ffffff","font-size":"12px", "letter-spacing":"3px","border-bottom":"solid 1px #ffffff40"});
    

var nameOfClass = '';
// load respective page on click
nameOfClass = $(this).find('p.icontitle').text();

                // CSS for background gradients
                                        
                var ArtistsGradient = ` `;

                var SearchGradient = `  `;

// conditional for page look up
        if(nameOfClass == "HOME"){
            // $(".slider").load("navigationroutes\home.html");
            console.log(nameOfClass);

            $(".HOMEheaderContainer").css("margin-bottom","-110px");
            $(".HOMEheaderContainer").css("height","160");
            $("#playlist-container").css("display","inline-block");
            $('.HOMEheaderContainer').css({
                        "background":"-moz-linear-gradient(top, rgba(93, 82, 85, 0.33) 25%, rgba(9, 8, 8, 0.8)80%, rgb(9, 8, 8) 97%),url(../assets/images/navigationroutes/artists/business3.jpg)",
                        "background":"-webkit-linear-gradient(top, rgba(93, 82, 85, 0.33) 25%, rgba(9, 8, 8, 0.8)80%, rgb(9, 8, 8) 97%),url(../assets/images/navigationroutes/artists/business3.jpg)",
                        "background":"linear-gradient(to bottom, rgba(93, 82, 85, 0.33) 25%, rgba(9, 8, 8, 0.8)80%, rgb(9, 8, 8) 97%),url(../assets/images/navigationroutes/artists/business3.jpg)",
                        "filter":"progid:DXImageTransform.Microsoft.gradient( startColorstr='#9e1128', endColorstr='#db0c0b0b',GradientType=0 )"});
                        // $(".HOMEheaderContainer").fadeIn(300);
        $('#mainPager').css("display","block");
            $('#topBar').css("background","rgb(31, 26, 26)");
            $('#topBar_text').css("color","rgb(138, 138, 138)");


            // page load
            $("#mainPager").load("http://127.0.0.1:8080/navigationroutes/home.html");           
                }
           
                    else if(nameOfClass == "ARTIST"){
                        console.log(nameOfClass);
                        
                        $(".HOMEheaderContainer").css("margin-bottom","0px");   
                        $(".HOMEheaderContainer").css("height","105px");
                        $("#playlist-container").css("display","none");
                        
                        $('.HOMEheaderContainer').css({
                                "background":"-moz-linear-gradient(top, rgb(153, 173, 51) 19%, rgba(218, 206, 123, 0.31), rgb(9, 8, 8) 93%)",
                                "background":"-webkit-linear-gradient(top, rgb(153, 173, 51) 19%, rgba(218, 206, 123, 0.31), rgb(9, 8, 8) 93%)",
                                "background":"linear-gradient(to bottom, rgb(153, 173, 51) 19%, rgba(218, 206, 123, 0.31), rgb(9, 8, 8) 93%)",
                                "filter":"progid:DXImageTransform.Microsoft.gradient( startColorstr='#9e1128', endColorstr='#db0c0b0b',GradientType=0 )"});
                        $(".HOMEheaderContainer").fadeIn(500);
                        $('#topBar').css("background","rgb(145, 169, 21)");
                        $('#topBar_text').css("color","rgba(255, 254, 254, 0.55)");
                       
                        // $("#headerLegendary").removeAttr({style});
                        
                        // page load
                        $("#mainPager").load("http://127.0.0.1:8080/navigationroutes/artists.html");
                            }

                            else if(nameOfClass == "SEARCH"){
                                console.log(nameOfClass);
                                $(".songResults").css("top","-189px");
                                $("#playlist-container").css("display","none");
                                $(".HOMEheaderContainer").css({"height":"100px", "margin-bottom":"-15px",});
                                
                                $('.HOMEheaderContainer').css({
                                        "background":"-moz-linear-gradient(top, rgba(31, 113, 77, 0.76) 15%, rgba(67, 134, 154, 0.23), rgb(9, 8, 8) 93%);",
                                        "background":"-webkit-linear-gradient(top, rgba(31, 113, 77, 0.76) 15%, rgba(67, 134, 154, 0.23), rgb(9, 8, 8) 93%)",
                                        "background":"linear-gradient(to bottom, rgba(31, 113, 77, 0.76) 15%, rgba(67, 134, 154, 0.23), rgb(9, 8, 8) 93%)",
                                        "filter":"progid:DXImageTransform.Microsoft.gradient( startColorstr='#9e1128', endColorstr='#db0c0b0b',GradientType=0 )"});
                                // $(".HOMEheaderContainer").fadeIn(200);
                                $('#topBar').css("background","rgb(27, 97, 68)");
                                $('#topBar_text').css("color","rgb(138, 183, 165)");

                                // page load
                                 $("#mainPager").load("http://127.0.0.1:8080/navigationroutes/search.html");
                                    }

});