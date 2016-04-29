$(document).ready(function () {
    var takepic = $("#take-picture");
    var showpic = $("#show-picture");
    var picplac = $('#error');

    takepic.change(function(event) {
        // Get a reference to the taken picture or chosen file
        var files = event.target.files,
            file;
        if (files && files.length > 0) {
            file = files[0];
            // Create ObjectURL
            var imgURL = window.URL.createObjectURL(file);
            showpic.attr('src',imgURL);

            // Set img src to ObjectURL
            console.log(file);
            console.log(imgURL);
            getLoco();
            // TODO: let user accept picture
            // TODO: send info to ?
            // TODO: error if:
            //          location info is blocked
        }
    });

    function getLoco(){
        console.log('hi)')
        navigator.geolocation.getCurrentPosition(function(position){
            $('#coords').append(position.coords.latitude)
            $('#coords').append(position.coords.longitude)
        })
    }
})
/*
var takePicture = document.querySelector("#take-picture"),
    showPicture = document.querySelector("#show-picture");
    picplace = $('#picplace');

takePicture.onchange = function (event) {
    // Get a reference to the taken picture or chosen file
    var files = event.target.files,
        file;
    if (files && files.length > 0) {
        file = files[0];
    }
    picplace.append(file);
    // Create ObjectURL
    var imgURL = window.URL.createObjectURL(file);

    // Set img src to ObjectURL
    showPicture.src = imgURL;
};
*/
/*
if (takePicture && showPicture) {
    // Set events
    takePicture.onchange = function (event) {
        // Get a reference to the taken picture or chosen file
        var files = event.target.files,
            file;
        if (files && files.length > 0) {
            file = files[0];
            try {
                // Create ObjectURL
                var imgURL = window.URL.createObjectURL(file);

                // Set img src to ObjectURL
                showPicture.src = imgURL;

                // Revoke ObjectURL
                URL.revokeObjectURL(imgURL);
            }
            catch (e) {
                try {
                    // Fallback if createObjectURL is not supported
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
                        showPicture.src = event.target.result;
                    };
                    fileReader.readAsDataURL(file);
                }
                catch (e) {
                    //
                    var error = document.querySelector("#error");
                    if (error) {
                        error.innerHTML = "Neither createObjectURL or FileReader are supported";
                    }
                }
            }
        }
    };
}
*/