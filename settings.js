//flowFile: 'flows_srv-d188t13ipnbc73bahc20-hibernate-9c749677d-2s2kg.json',
//credentialSecret: process.env.CREDENTIAL_SECRET || 'clave-segura',

module.exports = {
    flowFile: process.env.FLOWS_FILE || 'flows.json',
    credentialSecret: process.env.CREDENTIAL_SECRET || 'clave-segura',

    httpAdminRoot: "/",
    httpNodeRoot: "/",
    userDir: "./.nodered",

    functionGlobalContext: {},

    editorTheme: {
        projects: {
            enabled: false
        }
    }
}
