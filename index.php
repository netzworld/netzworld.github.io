<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>really quick to keep track</title>
</head>
<body>
<style>
button {
    display: inline-block;
    margin-right: 2em;
    padding: 1em;
}
.nl{
    display: block;
}
div{
    margin-right: 3em;
    display: inline;
}
</style>
    
   
    
    <h2>Total touches for game</h2>

    <div class="teamA">
        <h3 >Team A</h3>
        <div class="a1">
            <button id="a1">A1</button>
            <div id="a1text"></div>
        </div>

        <div class="a2">
            <button id="a2">A2</button>
            <div id="a2text"></div>
        </div>

    </div>

    <div class="teamB">
        <h3 style="margin-top: 1em;">Team B</h3>
        <div class="b1">
            <button id="b1">B1</button>
            <div id="b1text"></div>
        </div>


        <div class="b2">
            <button id="b2">B2</button>
            <div id="b2text"></div>
        </div>

    </div>

    

    <button id="reset">RESET</button>
 
    


<script>
    var a1_touch_count = 0;
    var a2_touch_count = 0;
    var b1_touch_count = 0;
    var b2_touch_count = 0;

   

    document.getElementById("a1").onclick = function() {
        a1_touch_count++;
        var d1 = document.getElementById("a1text")
       d1.textContent = a1_touch_count;
    };
    document.getElementById("a2").onclick = () => {
        a2_touch_count++;
        var d2 = document.getElementById("a2text")
       d2.textContent = a2_touch_count;
    };
    document.getElementById("b1").onclick = () => {
        b1_touch_count++;
        var d1 = document.getElementById("b1text")
       d1.textContent = b1_touch_count;
    };
    document.getElementById("b2").onclick = () => {
        b2_touch_count++;
        var d2 = document.getElementById("b2text")
       d2.textContent = b2_touch_count;
    };
    document.getElementById("reset").onclick = () => {
        a1_touch_count = 0;
        a2_touch_count = 0;
        b1_touch_count = 0;
        b2_touch_count = 0;
        document.getElementById("a1text").textContent = a1_touch_count;
        document.getElementById("a2text").textContent = a2_touch_count;
        document.getElementById("b1text").textContent = b1_touch_count;
        document.getElementById("b2text").textContent = b2_touch_count;
    }

</script>


<?php 
echo "HI"
?>

</body>
</html>