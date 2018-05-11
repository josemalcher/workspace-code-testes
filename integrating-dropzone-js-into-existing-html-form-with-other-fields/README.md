## 

LINK: https://stackoverflow.com/questions/17872417/integrating-dropzone-js-into-existing-html-form-with-other-fields

The "dropzone.js" is the most common library for uploading images. If you want to have the "dropzone.js" as just part of your form, you should do the following steps:

1) for the client side:

```html
<form action="/" enctype="multipart/form-data" method="POST">
        <input type="text" id ="Username" name ="Username" />
        <div class="dropzone" id="my-dropzone" name="mainFileUploader">
            <div class="fallback">
                <input name="file" type="file" multiple />
            </div>
        </div>
    </form>
    <div>
        <button type="submit" id="submit-all"> upload </button>
    </div>
```

```javascript
<script>
        Dropzone.options.myDropzone = {
            url: "/Account/Create",
            autoProcessQueue: false,
            uploadMultiple: true,
            parallelUploads: 100,
            maxFiles: 100,
            acceptedFiles: "image/*",

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

                this.on('sendingmultiple', function (data, xhr, formData) {
                    formData.append("Username", $("#Username").val());
                });
            }
        };
    </script>
```