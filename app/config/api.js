let Api;

let initIp = () => {
    Api = JSON.parse(sessionStorage.ipConfig_auto).api;
};

switch (process.env.context) {
    case "production":
        initIp();
        break;
    case "development":
        initIp();
        break;
    case "local":
        Api = "";//代理自动添加
        break;
}

export default Api;
