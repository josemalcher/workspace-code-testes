## Generated content for a column

https://datatables.net/examples/ajax/null_data_source.html

Conteúdo gerado para uma coluna

Em algumas tabelas, você pode desejar que algum conteúdo seja gerado automaticamente. Isso pode ser feito de várias maneiras:

columns.render para conteúdo dinâmico (isto é, com base nos dados da linha)
columns.defaultContent para conteúdo estático (ou seja, strings simples)

Este exemplo mostra o uso de columns.defaultContent para criar um elemento de botão na última coluna da tabela. Um simples ouvinte de evento de click jQuery é usado para observar cliques na linha e, quando ativado, usa o método row().data() para obter os dados da linha e mostrar um pouco de informação sobre ela em uma caixa de alert . Este é um caso de uso simples, mas pode ser construído para ser arbitrariamente complexo.

Observe também que a opção columns.data da coluna foi definida como null para indicar que a coluna não contém informações contidas no objeto da fonte de dados.

**js**
- https://code.jquery.com/jquery-1.12.4.js
- https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js

**css**
- https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css

