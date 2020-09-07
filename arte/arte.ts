/*!
 * Cregex v1.0.5 (https://github.com/yoicalsin/cregex)
 * Copyright 2019 The Cregex Authors
 * Copyright 2019 Yoni Calsin <@helloyonicb@gmail.com>.
 * Licensed under MIT (https://github.com/yoicalsin/cregex/blob/master/LICENSE)
 */
var cregexs = {
   isEmail: function() {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   },
   isEmpty: function() {
      return /^\s*$/i;
   },
   isNoEmpty: function() {
      return /^(\w+\S+)$/;
   },
   blacklist: function(chars) {
      if (chars === void 0) {
         chars = [];
      }
      return new RegExp('^(?!.*(?:' + chars.join('|') + '))', 'g');
   },
   isAscii: function() {
      return /^[\x00-\x7F]+$/;
   },
   isBIC: function() {
      return /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/;
   },
   isBase32: function() {
      return /^[A-Z2-7]+=*$/;
   },
   isBase64: function() {
      return /[^A-Z0-9+\/=]/i;
   },
   isBoolean: function() {
      return /^(true|false|1|0)$/gi;
   },
   isCreditCard: function() {
      return /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
   },
   isFullWidth: function() {
      return /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
   },
   isHalfWidth: function() {
      return /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
   },
   isHash: function(algorithm) {
      var lengths = {
         md5: 32,
         md4: 32,
         sha1: 40,
         sha256: 64,
         sha384: 96,
         sha512: 128,
         ripemd128: 32,
         ripemd160: 40,
         tiger128: 32,
         tiger160: 40,
         tiger192: 48,
         crc32: 8,
         crc32b: 8,
      };
      return new RegExp('^[a-fA-F0-9]{' + lengths[algorithm] + '}$');
   },
   isHexColor: function() {
      return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;
   },
   isHexadecimal: function() {
      return /^(0x|0h)?[0-9A-F]+$/i;
   },
   isLength: function(options) {
      return new RegExp('^.{' + options.min + ',' + options.max + '}$');
   },
   isLowercase: function() {
      return /^[a-z]+$/g;
   },
   isMacAddress: function() {
      return /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
   },
   isMacAddressNoColons: function() {
      return /^([0-9a-fA-F]){12}$/;
   },
   isMacAddressWithHyphen: function() {
      return /^([0-9a-fA-F][0-9a-fA-F]-){5}([0-9a-fA-F][0-9a-fA-F])$/;
   },
   isMacAddressWithSpaces: function() {
      return /^([0-9a-fA-F][0-9a-fA-F]\s){5}([0-9a-fA-F][0-9a-fA-F])$/;
   },
   isMD5: function() {
      return /^[a-f0-9]{32}$/;
   },
   isMagnetURI: function() {
      return /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;
   },
   isMobilePhone: function(locale) {
      var phones = {
         'am-AM': /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
         'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
         'ar-BH': /^(\+?973)?(3|6)\d{7}$/,
         'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
         'ar-EG': /^((\+?20)|0)?1[0125]\d{8}$/,
         'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
         'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
         'ar-KW': /^(\+?965)[569]\d{7}$/,
         'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
         'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
         'ar-TN': /^(\+?216)?[2459]\d{7}$/,
         'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
         'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
         'bn-BD': /^(\+?880|0)1[13456789][0-9]{8}$/,
         'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
         'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
         'de-DE': /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
         'de-AT': /^(\+43|0)\d{1,4}\d{3,12}$/,
         'el-GR': /^(\+?30|0)?(69\d{8})$/,
         'en-AU': /^(\+?61|0)4\d{8}$/,
         'en-GB': /^(\+?44|0)7\d{9}$/,
         'en-GG': /^(\+?44|0)1481\d{6}$/,
         'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
         'en-HK': /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
         'en-MO': /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
         'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
         'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
         'en-KE': /^(\+?254|0)(7|1)\d{8}$/,
         'en-MT': /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
         'en-MU': /^(\+?230|0)?\d{8}$/,
         'en-NG': /^(\+?234|0)?[789]\d{9}$/,
         'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
         'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
         'en-RW': /^(\+?250|0)?[7]\d{8}$/,
         'en-SG': /^(\+65)?[89]\d{7}$/,
         'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
         'en-UG': /^(\+?256|0)?[7]\d{8}$/,
         'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
         'en-ZA': /^(\+?27|0)\d{9}$/,
         'en-ZM': /^(\+?26)?09[567]\d{7}$/,
         'es-CL': /^(\+?56|0)[2-9]\d{1}\d{7}$/,
         'es-EC': /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
         'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
         'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
         'es-PA': /^(\+?507)\d{7,8}$/,
         'es-PY': /^(\+?595|0)9[9876]\d{7}$/,
         'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
         'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
         'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
         'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
         'fj-FJ': /^(\+?679)?\s?\d{3}\s?\d{4}$/,
         'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
         'fr-FR': /^(\+?33|0)[67]\d{8}$/,
         'fr-GF': /^(\+?594|0|00594)[67]\d{8}$/,
         'fr-GP': /^(\+?590|0|00590)[67]\d{8}$/,
         'fr-MQ': /^(\+?596|0|00596)[67]\d{8}$/,
         'fr-RE': /^(\+?262|0|00262)[67]\d{8}$/,
         'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
         'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
         'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
         'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
         'ja-JP': /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
         'kk-KZ': /^(\+?7|8)?7\d{9}$/,
         'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
         'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
         'lt-LT': /^(\+370|8)\d{8}$/,
         'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
         'nb-NO': /^(\+?47)?[49]\d{7}$/,
         'ne-NP': /^(\+?977)?9[78]\d{8}$/,
         'nl-BE': /^(\+?32|0)4?\d{8}$/,
         'nl-NL': /^(\+?31|0)6?\d{8}$/,
         'nn-NO': /^(\+?47)?[49]\d{7}$/,
         'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
         'pt-BR': /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
         'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
         'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
         'ru-RU': /^(\+?7|8)?9\d{9}$/,
         'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
         'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
         'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
         'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
         'th-TH': /^(\+66|66|0)\d{9}$/,
         'tr-TR': /^(\+?90|0)?5\d{9}$/,
         'uk-UA': /^(\+?38|8)?0\d{9}$/,
         'vi-VN': /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
         'zh-CN': /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/,
         'zh-TW': /^(\+?886\-?|0)?9\d{8}$/,
      };
      phones['en-CA'] = phones['en-US'];
      phones['fr-BE'] = phones['nl-BE'];
      phones['zh-HK'] = phones['en-HK'];
      phones['zh-MO'] = phones['en-MO'];
      return phones[locale];
   },
   isMultibyte: function() {
      return /[^\x00-\x7F]/;
   },
   isNumeric: function() {
      return /^[+-]?([0-9]*[.])?[0-9]+$/;
   },
   isOctal: function() {
      return /^(0o)?[0-7]+$/i;
   },
   isPort: function() {
      return /^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;
   },
   isPostalCode: function(locale) {
      var threeDigit = /^\d{3}$/;
      var fourDigit = /^\d{4}$/;
      var fiveDigit = /^\d{5}$/;
      var sixDigit = /^\d{6}$/;
      var patterns = {
         AD: /^AD\d{3}$/,
         AT: fourDigit,
         AU: fourDigit,
         BE: fourDigit,
         BG: fourDigit,
         BR: /^\d{5}-\d{3}$/,
         CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
         CH: fourDigit,
         CZ: /^\d{3}\s?\d{2}$/,
         DE: fiveDigit,
         DK: fourDigit,
         DZ: fiveDigit,
         EE: fiveDigit,
         ES: fiveDigit,
         FI: fiveDigit,
         FR: /^\d{2}\s?\d{3}$/,
         GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
         GR: /^\d{3}\s?\d{2}$/,
         HR: /^([1-5]\d{4}$)/,
         HU: fourDigit,
         ID: fiveDigit,
         IE: /^[A-z]\d[\d|w]\s\w{4}$/i,
         IL: fiveDigit,
         IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
         IS: threeDigit,
         IT: fiveDigit,
         JP: /^\d{3}\-\d{4}$/,
         KE: fiveDigit,
         LI: /^(948[5-9]|949[0-7])$/,
         LT: /^LT\-\d{5}$/,
         LU: fourDigit,
         LV: /^LV\-\d{4}$/,
         MX: fiveDigit,
         MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
         NL: /^\d{4}\s?[a-z]{2}$/i,
         NO: fourDigit,
         NZ: fourDigit,
         PL: /^\d{2}\-\d{3}$/,
         PR: /^00[679]\d{2}([ -]\d{4})?$/,
         PT: /^\d{4}\-\d{3}?$/,
         RO: sixDigit,
         RU: sixDigit,
         SA: fiveDigit,
         SE: /^[1-9]\d{2}\s?\d{2}$/,
         SI: fourDigit,
         SK: /^\d{3}\s?\d{2}$/,
         TN: fourDigit,
         TW: /^\d{3}(\d{2})?$/,
         UA: fiveDigit,
         US: /^\d{5}(-\d{4})?$/,
         ZA: fourDigit,
         ZM: fiveDigit,
      };
      return patterns[locale];
   },
   isRFC3339: function() {
      var dateFullYear = /[0-9]{4}/;
      var dateMonth = /(0[1-9]|1[0-2])/;
      var dateMDay = /([12]\d|0[1-9]|3[01])/;
      var timeHour = /([01][0-9]|2[0-3])/;
      var timeMinute = /[0-5][0-9]/;
      var timeSecond = /([0-5][0-9]|60)/;
      var timeSecFrac = /(\.[0-9]+)?/;
      var timeNumOffset = new RegExp(
         '[-+]' + timeHour.source + ':' + timeMinute.source
      );
      var timeOffset = new RegExp('([zZ]|' + timeNumOffset.source + ')');
      var partialTime = new RegExp(
         timeHour.source +
            ':' +
            timeMinute.source +
            ':' +
            timeSecond.source +
            timeSecFrac.source
      );
      var fullDate = new RegExp(
         dateFullYear.source + '-' + dateMonth.source + '-' + dateMDay.source
      );
      var fullTime = new RegExp('' + partialTime.source + timeOffset.source);
      var rfc3339 = new RegExp(fullDate.source + '[ tT]' + fullTime.source);
      return rfc3339;
   },
   isSlug: function() {
      return /^[^-_](?!.*?[-_]{2,})([a-z0-9\\-]{1,}).*[^-_]$/;
   },
   isSurrogatePair: function() {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
   },
   isUrl: function() {
      return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
   },
   isUUID: function(version) {
      if (version === void 0) {
         version = 'all';
      }
      var uuid = {
         3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
         4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
         5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
         all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      };
      return uuid[version];
   },
   isUppercase: function() {
      return /\b[A-Z0-9]+\b/;
   },
};
module.exports = cregexs;
module.exports.cregexs = cregexs;
