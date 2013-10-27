<!doctype html>
<html>
<head>
  <title>Video</title>
  <style type="text/css">
   body {background:#fff;margin:0;padding:0;}
  </style>
</head>
<body>
<script type="text/javascript" src="./js/modernizr-2.5.3.min.js"></script>
<script type="text/javascript" src="./js/swfobject.js"></script>
<script src="./js/jquery-1.8.3.min.js"></script>

<div id="video_popup_box" style="height:<?php print $_GET['height'];?>px;overflow:hidden;">
    <video autoplay="autoplay" poster="./imgMobile/knowledge/video.jpg" style="display:none;" controls width="<?php print $_GET['width'];?>" height="<?php print $_GET['height'];?>">
        <source src="videos/video<?php print $_GET['id'];?>.mp4" type="video/mp4" />
    </video>
    <object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='<?php print $_GET['width'];?>' height='<?php print $_GET['height'];?>' id='player1' name='player1'>
        <param name='movie' value='videos/cwplayer.swf'>
        <param name='allowfullscreen' value='true'>
        <param name='allowscriptaccess' value='always'>
        <param name='wmode' value='transparent'>
        <param name='flashvars' value='xml_path=videos/video<?php print $_GET['id'];?><?php print $_GET['width'];?>.xml'>
        <embed id='player1'
               name='player1'
               src='videos/cwplayer.swf'
               width='<?php print $_GET['width'];?>'
               height='<?php print $_GET['height'];?>'
               allowscriptaccess='always'
               allowfullscreen='true'
               wmode="transparent"
               flashvars="xml_path=videos/video<?php print $_GET['id'];?><?php print $_GET['width'];?>.xml"
            />
    </object>

    <script>
        if ( Modernizr.touch ) {
            $('.videoobject').css('display','none');
            $('video').css('display','block');
        }
    </script>
</div>
</body>
</html>