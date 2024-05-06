module.exports = {
    resolve: {
        fallback: { 
            "url": false,
            "path": false,
            "stream": false,
            "buffer": false,
            "querystring": false,
            "http": require.resolve("stream-http"),
            "crypto": require.resolve("crypto-browserify"),
            "zlib": false,
        },
    },
    node: { 
        fs: 'empty',
    }
}