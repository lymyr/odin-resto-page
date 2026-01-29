import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: "./src/template.html"
     }),
   ],
   output: {
     filename: 'main.js',
     path: path.resolve(import.meta.dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
    }
 };