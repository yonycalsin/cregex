"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (min, max) => {
    return new RegExp('^.{' + min + ',' + max + '}$');
};
