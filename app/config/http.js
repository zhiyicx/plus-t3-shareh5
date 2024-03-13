import req from "@/config/api";
import axios from "axios";

axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        return Promise.reject(err);
    }
);
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;
let cont = "application/json; charset=utf-8";
export const iHttp = (type, url, data = {}, headersV = cont) => {
    return new Promise((resolve, reject) => {
        let init = {
            method: type,
            url: url,
            headers: {
                "Content-Type": headersV,
            }
        };
        //没有请求前缀设置前缀
        if(process.env.context==='production' || process.env.context==='development'){
            if (!/^(http|https):\/\/+/g.test(url)) init.baseURL = JSON.parse(sessionStorage.ipConfig_auto).api;
        }else {
            if (!/^(http|https):\/\/+/g.test(url)) init.baseURL = "";
        }
        //请求类型
        type === "get" ? (init["params"] = data) : (init["data"] = data);
        axios(init).then(res => {
            resolve(res.data);
        },err => {
            reject(err);
        }).catch(err => {
            reject(err);
        });
    });
};
