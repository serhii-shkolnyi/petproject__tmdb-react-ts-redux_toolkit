import {apiService} from "./apiService";
import {urlsConfig} from "../configs";
import {IAccount} from "../interfaces";

const accountService = {
    getAll: () => apiService.get<IAccount>(urlsConfig.account.base),

};

export {
    accountService
};
