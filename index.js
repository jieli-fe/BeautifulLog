class BeautifulLog {
    static keyStyle = `padding: 1px 3px;border-radius: 3px 0 0 3px; color: #fff; font-size: 12px; background: #606060`
    static valueStyle = `padding: 1px 3px; border-radius: 0 3px 3px 0; color: #fff; font-size: 12px; background: #1475b2`
    constructor(obj, { keyStyle: keyStyle, valueStyle: valueStyle } = {}) {
        this.keyStyle = keyStyle
        this.valueStyle = valueStyle
    }
    static log(key, value) {
        console.log(`%c${key}%c${value}`, this.keyStyle, this.valueStyle);
    }
    log(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                BeautifulLog.log(key, value)
            }
        }
    }
}

export default BeautifulLog