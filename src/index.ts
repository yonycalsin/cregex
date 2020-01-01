/*!
 * Cregex v1.0.4 (https://github.com/yonicb/cregex)
 * Copyright 2019 The Cregex Authors
 * Copyright 2019 Yoni Calsin <@helloyonicb@gmail.com>.
 * Licensed under MIT (https://github.com/yonicb/cregex/blob/master/LICENSE)
 */
const cregexs = {
    isEmail: {
        cregex: (): RegExp => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    isEmpty: {
        cregex: (): RegExp => /^\s*$/i
    },
    isNoEmpty: {
        cregex: (): RegExp => /^(\w+\S+)$/
    },
    blacklist: {
        cregex: <T = string>(chars: T[] = []): RegExp => {
            return new RegExp(`^(?!.*(?:${chars.join("|")}))`, 'g')
        }
    }
}

module.exports = cregexs;