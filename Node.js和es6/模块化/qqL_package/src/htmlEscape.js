
//定义转义html字符转义
function htmlEscript(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, (match) => { // /g全局替换
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'

            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

//还原html
function UNhtmlEscript(Str) {
    return Str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<';
            case '&gt;':
                return '>';
            case '&quot;':
                return '"';
            case '&amp;':
                return '&';

        }
    })
}
module.exports = {
    htmlEscript,
    UNhtmlEscript
}