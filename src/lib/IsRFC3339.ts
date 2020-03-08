export default (): RegExp => {
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
};
