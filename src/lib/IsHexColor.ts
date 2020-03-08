export default (): RegExp => {
   return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;
};
