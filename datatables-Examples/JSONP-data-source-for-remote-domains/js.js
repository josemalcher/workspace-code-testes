$(document).ready(function() {
    $('#example').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "jsonp.json",
            "dataType": "json"
        }
    } );
} );