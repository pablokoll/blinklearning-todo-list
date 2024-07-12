<?php

function addTask($task)
{
    $tasksFile = './db/tasks.json';

    $tasks = json_decode(file_get_contents($tasksFile), true);

    $lastId = end($tasks)['id'] ?? 0;
    $newTask = [
        "id" => $lastId + 1,
        "title" => $task['title'],
        "description" => $task['description']
    ];

    $tasks[] = $newTask;

    file_put_contents($tasksFile, json_encode($tasks));

    return $newTask;
}