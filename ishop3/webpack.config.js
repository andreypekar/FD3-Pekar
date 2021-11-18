const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const extractCSS = new MiniCssExtractPlugin({
    filename: "bundle.css"
});

module.exports = { 
    entry: "./App.js", // основной файл приложения
    output:{ 
        path: __dirname, // путь к каталогу выходных файлов
        filename: "bundle.js"  // название создаваемого файла 
    }, 
    devtool:'source-map',
    module:{ 
        rules:[
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }            
        ] 
    },
    plugins: [
        extractCSS
    ]
}