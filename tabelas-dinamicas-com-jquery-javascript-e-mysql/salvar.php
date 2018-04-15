<?php
$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$cargo = $_POST['cargo'];
$email = $_POST['email'];
$parentesco = $_POST['parentesco'];




// faz consulta no banco para inserir os dados do usuario
$sql = "insert into cad_dependentes (nome, cpf, cargo, email, parentesco) values ('$nome', '$cpf', '$cargo', '$email', '$parentesco')";