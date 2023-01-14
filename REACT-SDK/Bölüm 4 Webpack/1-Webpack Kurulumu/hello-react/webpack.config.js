const path = require('path'); //çıkış dosyasına path verebilmek için node js modulu ekleniyor.

module.exports = {
    entry: './src/index.js', // giriş dosyası. düzenlencek dosya path i
    output: {
        path: path.resolve(__dirname, 'dist'), // dist klasorunun path ini verir. __dirname değişkeni node js gelen modul kullanımı
        filename: 'bundle.js' // dist kalsoru altındaki bundle.js dosyası (çıkış dosyası)
    }
}