function countdown() {
    let timestamp = 1653998400000;
    let target = new Date(timestamp);
    let now = new Date();
    let time_left = Math.round((target - now) / 1000);

    let days = Math.floor(time_left / 86400);
    time_left %= 86400;
    let hours = Math.floor(time_left / 3600);
    time_left %= 3600;
    let minutes = Math.floor(time_left / 60);
    let seconds = time_left % 60;
    let out = "";

    out += `${days}:${String(hours).padStart(2, "0")}:`;
    out += `${String(minutes).padStart(2, "0")}:`;
    out += `${String(seconds).padStart(2, "0")}`;

    document.getElementById("clock").innerHTML = out;
    setTimeout(countdown, 1000);
}
