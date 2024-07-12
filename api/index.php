<?php
require "./includes/add_todo.php";
require "./includes/get_todos.php";
require "./includes/delete_todo.php";


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    getTasksData();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['title']) || empty($data['title'])) {
        http_response_code(400);
        echo json_encode(array("message" => "The field title is required."));
        exit();
    }

    if (!isset($data['description']) || empty($data['description'])) {
        http_response_code(400);
        echo json_encode(array("message" => "The field description is required."));
        exit();
    }

    $result = addTask($data);

    http_response_code(201);
    echo json_encode($result);
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['id']) || empty($data['id'])) {
        http_response_code(400);
        echo json_encode(array("message" => "The filed 'id' is required"));
        exit();
    }

    $result = deleteTask($data['id']);


    if (isset($result['error'])) {
        http_response_code(500);
    } else {
        http_response_code(200); // Éxito en la operación
    }

    echo json_encode($result);
}
