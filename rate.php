<?php

define('STORE', 'ratings.dat');

function put_contents($file,$content) {
	$f = fopen($file,"w");
	fwrite($f,$content);
	fclose($f);
}

if(isset($_REQUEST["rating"])) {
	$rating = $_REQUEST["rating"];
	$storedRatings = unserialize(file_get_contents(STORE));
	$storedRatings[] = $rating;
	put_contents(STORE, serialize($storedRatings));
	$count = count($storedRatings);
	$average = round(array_sum($storedRatings) / $count, 4);
	$xml = "<ratings>
				<rating>$rating</rating>
				<average>$average</average>
				<count>$count</count>
			</ratings>";
	header('Content-type: text/xml'); 
	echo $xml;
}

?>