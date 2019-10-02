<?php

function encode($input) {
    return preg_replace_callback('/(.)\1{1,}/', function($matches) {
        return strlen($matches[0]) . $matches[1];
    }, $input);
}

function decode($input) {
    return preg_replace_callback('/(\d+)(\D)/', function($matches) {
        return str_repeat($matches[2], intval($matches[1]));
    }, $input);
}
