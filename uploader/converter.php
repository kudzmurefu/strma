<?php

function get_data(){
    $connect = mysqli_connect("127.0.0.1","root","","strma2.0");
    $query = "SELECT * FROM songsdb";
    $result = mysqli_query($connect, $query);
    $song_data = array();
    while($row = mysqli_fetch_array($result)){

        $song_data[] = array(
            'SongName'      =>   $row["SongName"],
            'ArtistName'    =>   $row["ArtistName"],
            'MusicType'     =>   $row["MusicType"],
            'iframeURL'     =>   $row["iframeURL"],
            'SongArtwork'   =>   $row["SongArtwork"]
        );
    }
    return json_encode($song_data);
}
/*echo '<pre>';
print_r(get_data());
echo '</pre>';*/

$file_name = 'songdatabase1' . '.json';
if(file_put_contents($file_name, get_data())){
    echo $file_name . 'file created';
}
else{
    echo 'There is problem creating file';
}
?>