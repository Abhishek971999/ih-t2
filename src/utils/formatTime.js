
export function formatTime(timerVal) {
    let min = Math.floor(timerVal / 60);
    let sec = timerVal - (min * 60);
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    return `${min}:${sec}`;
}