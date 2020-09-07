"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (chars) => {
    return new RegExp('^(?!.*(?:' + chars.join('|') + '))', 'g');
};
