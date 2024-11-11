require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTMwNTU2NTYzMjYxMTM1Njc0NA.GiIMPe.U3A7ra17jjG6BAfkxNHSjwle102vpVx8aYqQtc",
    clientID: process.env.CLIENT_ID || "1305565632611356744", 
    prefix: process.env.PREFIX || ".", 
    ownerID: process.env.OWNER_ID || "1111305362935656488",
    SpotifyID: process.env.SPOTIFY_ID || "5abb3d1c85234ccfb857eb80fdd5372a",
    SpotifySecret: process.env.SPOTIFY_SECRET || "e612e809ac0e476995b1b25072dddd98",
    mongourl: process.env.MONGO_URL || "mongodb+srv://dodokhaled6180:Fp8WfLb6gmtFPomz@cluster0.fsfrilh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "1265208147593924610",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1265208147593924610",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1265208147593924610",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER || "youtube, youtube music, soundcloud",
    links: {
        img: process.env.IMG || '', 
        support: process.env.SUPPORT || '',
        invite: process.env.INVITE || '' 
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "lava-v3.ajieblogs.eu.org",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "https://dsc.gg/ajidevserver",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
        }
    ],
};

function parseBoolean(value) {
    if (typeof value === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
