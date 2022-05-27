module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" 
                    },
                    {
                        loader: "css-loader" 
                    },
                    {
                        loader: "sass-loader" 
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    }
}