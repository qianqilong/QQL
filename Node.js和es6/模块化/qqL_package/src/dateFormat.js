//1.格式化时间函数
function dateFormat(datastr) {
    const dt = new Date(datastr);
    const y = dt.getFullYear();
    const m = padzero(dt.getMonth() + 1);
    const d = padzero(dt.getDate());

    const hh = padzero(dt.getHours());
    const mm = padzero(dt.getMinutes());
    const ss = padzero(dt.getSeconds());
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}
// 定义补0函数
function padzero(n) {
    return n > 10 ? n : '0' + n;
}
module.exports = {
    dateFormat
}