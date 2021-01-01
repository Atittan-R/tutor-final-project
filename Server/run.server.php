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
                <input type="text" name="cmd">
                <input type="submit" name="cmd_send">
                <input type="submit" name="run" class="button" value="Run Server.js" />
                <input type="submit" name="stop" class="button" value="Stop Server.js" />
            </form>
            <br>
            <br>
        </div>
        <div class="center">
            <?php 
            error_reporting(E_ALL);
            ini_set('display_errors', '1');
            
        if(array_key_exists('run', $_POST)) {
                runServer();
        }else if(array_key_exists('stop', $_POST)) {
                stopServer();
        }else if(array_key_exists('cmd_send', $_POST)) {
            cmdrun($_POST["cmd"]);
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
        
        function cmdrun($cmd) {
            try {
                //code...
                while (@ob_end_flush()); // end all output buffers if any

                $proc=popen($cmd, 'r');
                echo ('<pre>');

                while ( !feof($proc)) {
                    echo fread($proc, 4096);
                    @flush();
                }

                echo ('</pre>');
            } catch (\Throwable $th) {
                //throw $th;
                echo ('<pre></pre>');
            }
            
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