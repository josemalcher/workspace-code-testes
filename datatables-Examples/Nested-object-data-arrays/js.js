$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "objects_subarrays.txt",
        "columns": [
            { "data": "name[, ]" },
            { "data": "hr.0" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "hr.2" },
            { "data": "hr.1" }
        ]
    } );
} );