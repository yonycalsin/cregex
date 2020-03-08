interface Algorithms {
   md5: number;
   md4: number;
   sha1: number;
   sha256: number;
   sha384: number;
   sha512: number;
   ripemd128: number;
   ripemd160: number;
   tiger128: number;
   tiger160: number;
   tiger192: number;
   crc32: number;
   crc32b: number;
}

type Algorithm =
   | 'md5'
   | 'md4'
   | 'sha1'
   | 'sha256'
   | 'sha384'
   | 'sha512'
   | 'ripemd128'
   | 'ripemd160'
   | 'tiger128'
   | 'tiger160'
   | 'tiger192'
   | 'crc32'
   | 'crc32b';

export default (algorithm: Algorithm): RegExp => {
   var lengths: Algorithms = {
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
};
