
<?php
	$msg = "";
	
//if Upload button is pressed
if (isset($_POST['upload'])){
	$target = "uploads/artist".basename($_FILES['artwork']['name']);
	
	
	
	//connecting to our database
	$db = mysqli_connect("127.0.0.1", "root", "", "strma2.0");
	$tmp_name = $_FILES['picture']['tmp_name'];
	$name = $_FILES['picture']['name'];
	//getting the submitted form data
	 
	$ArtistName = $_POST['artistName'];
	$SongArtwork = $_FILES['picture']['name'];
	
	//saving submitted data into database table songsDB
	$sql = "INSERT INTO songsDB (ArtistName,SongArtwork) VALUES ($ArtistName','$SongArtwork')";
	mysqli_query($db, $sql); //stores the submitted data into table
	
	//now moving the uploaded image to uploads folder
	if(move_uploaded_file($_FILES['picture']['tmp_name'], $target)){
		$msg = "Uploaded Successful";
	}else{
			$msg = "There was a problem uploading Data";
		}
	}

// header("refresh:1; url=..uploader\uploader.php");
// header()

?>
<meta http-equiv="refresh" content="1; URL='http://localhost/testing/uploader.php'" />