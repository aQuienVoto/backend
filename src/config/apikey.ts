
/**
 * This class represents an ApiKey object containing permissions and key for the client app
 */
export class ApiKey {
    apikey: string;
    appName: string;
    
    constructor(apikey: string, appName: string) {
        this.apikey = apikey;
        this.appName = appName;
    }
}