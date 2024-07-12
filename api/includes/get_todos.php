<?php
function getTasksData()
{
    $tasksFile = './db/tasks.json';

    if (file_exists($tasksFile)) {
        $tasks = file_get_contents($tasksFile);
        echo $tasks;
    } else {
        echo json_encode([]);
    }

}