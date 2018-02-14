<html>

<head>
<link rel="stylesheet" type="text/css" href="style.css">
<header><h1>
Strma Song <br>Uploader</h1></header>
<head>

<body>

	<div class="container11">
		<form id="formData" action="uploadting.php" method="post" enctype="multipart/form-data">
			<input type="hidden" name="size" value="1000000"></input>
			<br/>
			<input id="inputField" type="text" name="song" placeholder="Song Name">
			<br/>
			<input id="inputField" type="text" name="artist" placeholder="Artist Name">
			<br/>
			<input id="inputField" type="text" name="iframe" placeholder="ifwrame URL">
			<br/>
			<select id="inputField" name="type" size="4">
				<option value=""> </option>
				<option value="Single">Single</option>
				<option value="Album">Album</option>
				<option value=""> </option>
				</select>
			<br/>
			<input id="inputField" type="file" name="artwork">
			<br/>
			<input id="submitButton" type="submit" name="upload" value="Upload Data">
					
		</form>
	</div>
	<div class="container22">
		<form id="formData" action="artistUpload.php.php" method="post" enctype="multipart/form-data">
			<input type="hidden" name="size" value="1000000"></input>
			<br/>
			<input id="inputField" type="text" name="artistName" placeholder="artist name">
			<br/>
			<input id="inputField" type="file" name="picture">
			<br/>
			<input id="submitButton" type="submit" name="upload" value="Upload Data">
					
		</form>
	</div>
	
</body>

</html>