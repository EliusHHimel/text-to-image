window.onload = function () {
    const element = document.getElementById("imagewrap")
    html2canvas(element, {
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
    }, {
        onrendered: function (canvas) {
            canvas.className = "html2canvas";
            var image = canvas.toDataURL("image/png");
            document.getElementById("downloadLink").href = image;
        },
        useCORS: true,
        backgroundColor: null,
        canvas: null,
        width: '20px'
    });
}

fetch('https://api.github.com/users/EliusHHimel')
    .then(res => res.json())
    .then(data => console.log(data))

// function changePicture(image) {
//     var at = $(image).attr('at');
//     var newpath = '../images/' + at;
//     $("#img_prev").attr('src', newpath);
// }


// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#img_prev')
//                 .attr('src', e.target.result)
//                 .width(640)
//                 .height(640);
//         };
//         reader.readAsDataURL(input.files[0]);
//     }
// };