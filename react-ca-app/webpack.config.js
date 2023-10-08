module.exports = {
    /*
    rest of config...
    */
    output: {
        filename: "index.js",
        pathinfo: false,
    },
    externals: {
        // Use external version of React
        "react": {
            "commonjs": "react",
            "commonjs2": "react",
            "amd": "react",
            "root": "React"
        },
        "react-dom": {
            "commonjs": "react-dom",
            "commonjs2": "react-dom",
            "amd": "react-dom",
            "root": "ReactDOM"
        }
    },
};