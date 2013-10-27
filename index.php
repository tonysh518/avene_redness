<?php
    include('./header.php');
?>
<body id="home">
<?php
    include('./nav.php');
?>
<!-- f -->

<div class="page" data-style="opacity:0" data-animate="opacity:1" data-delay="1000" data-time="400" data-easing="easeInOutQuart">
    <a href="siyan.php" class="home_siyan" data-style="right:-550px;" data-animate="right:0" data-delay="1700" data-time="1000" data-easing="easeInOutQuart">
        <div class="tit"></div>
        <div class="text"></div>
    </a>
    <div class="home_hua"></div>
    <div class="home_img home_avene" data-style="left:0%;" data-animate="left:50%" data-delay="1500" data-time="1000" data-easing="easeInOutQuart">
        <div class="tit"></div>
        <div class="text"></div>
    </div>
    <div class="home_img home_cool" data-style="left:0%;" data-animate="left:50%" data-delay="1500" data-time="1000" data-easing="easeInOutQuart">
        <div class="tit"></div>
        <div class="text"></div>
    </div>
    <div class="home_img home_new" data-style="left:0%;" data-animate="left:50%" data-delay="1600" data-time="1000" data-easing="easeInOutQuart">
        <div class="tit"></div>
        <div class="text"></div>
    </div>
    <div class="home_img home_sos" data-style="left:-30%;" data-animate="left:50%" data-delay="1500" data-time="1000" data-easing="easeInOutQuart">
        <div class="tit"></div>
        <div class="text"></div>
    </div>
    <div class=" home_check home_check1 cs-clear" data-style="left:-10%;opacity:0;" data-animate="left:50%;opacity:1;" data-delay="1800" data-time="1000" data-easing="easeInOutQuart">
        <div class="home_img checkbox"></div>
        <div class="home_img checktxt"></div>
    </div>
    <div class=" home_check home_check2 cs-clear" data-style="left:-10%;opacity:0;" data-animate="left:50%;opacity:1;" data-delay="1850" data-time="1000" data-easing="easeInOutQuart">
        <div class="home_img checkbox"></div>
        <div class="home_img checktxt"></div>
    </div>
    <div class=" home_check home_check3 cs-clear" data-style="left:-10%;opacity:0;" data-animate="left:50%;opacity:1;" data-delay="1900" data-time="1000" data-easing="easeInOutQuart">
        <div class="home_img checkbox"></div>
        <div class="home_img checktxt"></div>
    </div>
    <a href="video.php?id=1&width=800&height=450" class="home_img fadeEle home_video" data-style="left:-10%;opacity:0;" data-animate="left:50%;opacity:1;" data-delay="1950" data-time="1000" data-easing="easeInOutQuart">
        <div class="tit"></div>
        <div class="text">
            <video controls width="600" height="383" poster="imgMobile/home/video.jpg">
                <source src="videos/video1.mp4" type="video/mp4" />
            </video>
        </div>
    </a>
</div>
<!--  -->
<?php
    include('./footer.php');
?>