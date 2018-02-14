
<?php
	$msg = "";
	
//if Upload button is pressed
if (isset($_POST['upload'])){
	$target = "uploads/".basename($_FILES['artwork']['name']);
	
	
	
	//connecting to our database
	$db = mysqli_connect("127.0.0.1", "root", "", "strma2.0");
	$tmp_name = $_FILES['artwork']['tmp_name'];
	$name = $_FILES['artwork']['name'];
	//getting the submitted form data
	$SongName = $_POST['song'];
	$ArtistName = $_POST['artist'];
	$MusicType = $_POST['type'];
	$SongArtwork = $_FILES['artwork']['name'];
	$iframeURL = $_POST['iframe'];
	
	//saving submitted data into database table songsDB
	$sql = "INSERT INTO songsDB (SongName,ArtistName,MusicType,SongArtwork,iframeURL) VALUES ('$SongName','$ArtistName','$MusicType','$SongArtwork','$iframeURL')";
	mysqli_query($db, $sql); //stores the submitted data into table
	
	//now moving the uploaded image to uploads folder
	if(move_uploaded_file($_FILES['artwork']['tmp_name'], $target)){
		$msg = "Uploaded Successful";
	}else{
			$msg = "There was a problem uploading Data";
		}
	}

// header("refresh:1; url=..uploader\uploader.php");
// header()

?>
<meta http-equiv="refresh" content="1; URL='http://localhost/testing/uploader.php'" />