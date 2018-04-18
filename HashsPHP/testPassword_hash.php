<?php
/**
 * Created by PhpStorm.
 * User: josemalcher
 * Date: 18/04/2018
 * Time: 17:41
 */

$senha = "123456";

$hash = password_hash($senha, PASSWORD_DEFAULT);

if (password_verify($senha, $hash)) {
    $teste = "Senha correta";
    echo $teste . " " . $hash;
} else {
    $teste = "Senha incorreta";
    echo $teste;
}