function dataFormat(dtstr) {
    const dt = new Date(dtstr);
    const y = dt.getFullYear();
    const m = padzero(dt.getMonth() + 1);
    const d = padzero(dt.getDate());

    const hh = padzero(dt.getHours());
    const mm = padzero(dt.getMinutes());
    const ss = padzero(dt.getSeconds());
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

// 补零函数
function padzero(n) {
    return n > 9 ? n : '0' + n;
}
module.exports = {
    dataFormat
}