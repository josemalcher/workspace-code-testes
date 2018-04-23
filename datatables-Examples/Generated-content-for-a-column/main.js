$(document).ready(function() {
    var table = $('#example').DataTable( {
        "ajax": "data_array.json",
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button id='btn_alterar'>Editar</button>"
        } ]
    } );

    $('#example tbody').on( 'click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();
        alert( data[0] +"'s salary is: "+ data[ 5 ] );
    } );
} );