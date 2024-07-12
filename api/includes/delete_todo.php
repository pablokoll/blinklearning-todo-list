<?php

function deleteTask($id)
{
    $tasksFile = './db/tasks.json';
    
    if (file_exists($tasksFile)) {
        $tasks = json_decode(file_get_contents($tasksFile), true);
        $updatedTasks = array_filter($tasks, function ($task) use ($id) {
            return $task['id'] != $id;
        });

        $updatedTasks = array_values($updatedTasks);

        if (file_put_contents($tasksFile, json_encode($updatedTasks)) === false) {
            return ["error" => "Couldn't updated the file"];
        }
        return ["success" => true];
    } else {
        return ["error" => "Internal error"];
    }
}
