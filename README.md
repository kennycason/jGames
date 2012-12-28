jGames
======

JQuery plugin for displaying various board games

View post for more detail usage
http://ken-soft.com/2011/08/08/jgames/

Simple Chess Example:
```html
<code>
<script type="text/javascript" src="js/jgames/jquery.jgames.js"></script>
<link href="js/jgames/css/style.css" rel="stylesheet" type="text/css" />

<div id="chess"></div>

<script type="text/javascript">
        var board_chess = [
            ["br", "bn", "bb", "bk", "bq", "bb", "bn", "br"],
            ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
            ["wr", "wn", "wb", "wk", "wq", "wb", "wn", "wr"]];
       $("#chess").chess(board_chess);
</script>
</code>
```
