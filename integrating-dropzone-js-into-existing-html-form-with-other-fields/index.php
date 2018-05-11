<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="dropzone.min.css" />
</head>
<body>

<form id="my-awesome-dropzone" action="/upload" class="dropzone">
    <div class="dropzone-previews"></div>
    <div class="fallback"> <!-- this is the fallback if JS isn't working -->
        <input name="file" type="file" multiple />
    </div>

</form>
<button type="submit" id="submit-all" class="btn btn-primary btn-xs">Upload the file</button>

<script type="text/javascript" src="dropzone.js"></script>
<script>
    /*Dropzone.options.myDropzone = {
        url: "upload.php",
        autoProcessQueue: false,
        uploadMultiple: true,
        parallelUploads: 100,
        maxFiles: 100,
        acceptedFiles: "image/!*",

        init: function () {

            var submitButton = document.querySelector("#submit-all");
            var wrapperThis = this;

            submitButton.addEventListener("click", function () {
                wrapperThis.processQueue();
            });

            this.on("addedfile", function (file) {

                // Create the remove button
                var removeButton = Dropzone.createElement("<button class='btn btn-lg dark'>Remove File</button>");

                // Listen to the click event
                removeButton.addEventListener("click", function (e) {
                    // Make sure the button click doesn't submit the form:
                    e.preventDefault();
                    e.stopPropagation();

                    // Remove the file preview.
                    wrapperThis.removeFile(file);
                    // If you want to the delete the file on the server as well,
                    // you can do the AJAX request here.
                });

                // Add the button to the file preview element.
                file.previewElement.appendChild(removeButton);
            });

            /!*this.on('sendingmultiple', function (data, xhr, formData) {
                formData.append("Username", $("#Username").val());
            });*!/
        }
    };*/
    Dropzone.options.myAwesomeDropzone = { // The camelized version of the ID of the form element

        // The configuration we've talked about above
        autoProcessQueue: false,
        uploadMultiple: true,
        parallelUploads: 25,
        maxFiles: 25,

        // The setting up of the dropzone
        init: function() {
            var myDropzone = this;

            // Here's the change from enyo's tutorial...

            $("#submit-all").click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                myDropzone.processQueue();
            });
        }
    }
</script>
</body>
</html>