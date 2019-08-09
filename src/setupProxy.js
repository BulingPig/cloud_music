const proxy = require("http-proxy-middleware");
module.exports = function (app){

    app.use("/wangyi",proxy({
        target:"http://localhost:4000",
        changeOrigin:true,
        pathRewrite:{
            "^/wangyi":""
        }
    }))
}