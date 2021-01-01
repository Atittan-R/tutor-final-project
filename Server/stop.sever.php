<?php
$pid = exec('netstat -ano | find "LISTENING" | find "3986"');
//echo ($pid . "\n");

$task = substr($pid, 44, 45);
$sss = substr($task, 25);
// echo exec('taskkill /f /pid' . $sss);

$output = null;
$retval = null;
echo exec('taskkill /f /pid' . $sss, $output, $retval);