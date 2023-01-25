const ytdl = require('youtube-dl-exec');

const form = document.getElementById("download-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const videoUrl = document.getElementById("video-url").value;

    ytdl.exec(videoUrl, {
        '-o': './'
    }).then(() => {
        console.log("Video downloaded!");
    }).catch((err) => {
        console.log("An error occurred: " + err);
    });
});