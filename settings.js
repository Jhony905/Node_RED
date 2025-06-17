//flowFile: 'flows_srv-d188t13ipnbc73bahc20-hibernate-9c749677d-2s2kg.json',
//credentialSecret: process.env.CREDENTIAL_SECRET || 'clave-segura',

module.exports = {
    flowFile: process.env.FLOWS_FILE || 'flows.json',
    credentialSecret: process.env.CREDENTIAL_SECRET || 'clave-segura',

    httpAdminRoot: "/",
    httpNodeRoot: "/",
    userDir: "./.nodered",

    functionGlobalContext: {
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASS: process.env.MYSQL_PASS,
    MYSQL_DB: process.env.MYSQL_DB
    },


    editorTheme: {
        projects: {
            enabled: false
        }
    }
}
