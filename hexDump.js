function hexDump(str, consoleLog=false) {
    let res = '';
    const hs = (s) => {
        const np2 = (d) => d.length<2?'0'+d:d;
        let h='';
        for (let b=0; b<8; b++) {
            h += (b > 0 ? ' ' : '') + ((b >= s.length) ? '__' : (np2(s.charCodeAt(b).toString(16))));
        }
        return h;
    };
    let s1='', s2='';
    for (let l=0; l<str.length;) {
        const hd = (str) => {
            let rs = '';
            for (let i=0; i<16 && i+l<str.length; i++) {
                let c = str.charAt(l+i);
                if (c === "\n" || c === "\r" || c === "\t") { c='.'; }
                rs += c;
            }
            l += rs.length;
            return rs;
        }
        s1 = hd(str);
        s2 = hd(str);
  
        res += hs(s1) + '|' + hs(s2) + ' | ' + s1+s2 + '\n';
        s1='';s2='';
    }
    if (consoleLog) { console.log(res); } else { return res; }
}
