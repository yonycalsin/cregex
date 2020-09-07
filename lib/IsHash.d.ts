declare type Algorithm = 'md5' | 'md4' | 'sha1' | 'sha256' | 'sha384' | 'sha512' | 'ripemd128' | 'ripemd160' | 'tiger128' | 'tiger160' | 'tiger192' | 'crc32' | 'crc32b';
declare const _default: (algorithm: Algorithm) => RegExp;
export default _default;
