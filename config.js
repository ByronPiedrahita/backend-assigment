module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'wQkjjxQMcZ',
        password: process.env.MYSQL_PASS || 'z46BJLrx92',
        database: process.env.MYSQL_DB || 'wQkjjxQMcZ',
    },
}