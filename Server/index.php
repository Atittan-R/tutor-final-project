<!DOCTYPE html>
<html>

<head>
    <title>
        Server Console
    </title>
    <style>
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        margin: 20px;
        border: 3px solid green;
    }

    pre {
        white-space: pre-wrap;
        padding-left: 10px;
    }
    </style>
</head>


<body>
    <div>
        <div style="text-align:center;">
            <h1 style="color:green;">Server Command </h1>
            <form method="post">
                <input type="submit" name="run" class="button" value="Run Server.js" />
                <input type="submit" name="stop" class="button" value="Stop Server.js" />
            </form>
            <br>
            <br>
        </div>
        <div class="center">
            <?php 
        if(array_key_exists('run', $_POST)) {
                runServer();
        }else if(array_key_exists('stop', $_POST)) {
                stopServer();
        }

        function runServer() {
            $cmd="npm start";
            while (@ob_end_flush()); // end all output buffers if any

            $proc=popen($cmd, 'r');
            echo ('<pre>');

            while ( !feof($proc)) {
                echo fread($proc, 4096);
                @flush();
            }

            echo ('</pre>');
        }

        function stopServer() {
            $task=exec('netstat -ano | find "LISTENING" | find "3986"');
            $text=substr($task, 44, 45);
            $pid=substr($text, 25);

            $cmd='taskkill /f /pid'. $pid;
            while (@ob_end_flush()); // end all output buffers if any

            $proc=popen($cmd, 'r');
            echo ('<pre>');

            while ( !feof($proc)) {
                echo fread($proc, 4096);
                @flush();
            }
            echo ('</pre>');
        }

    ?>
        </div>
    </div>
</body>

</html>