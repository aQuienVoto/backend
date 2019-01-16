import { ApiKey } from "./apikey";
export class Config {
  applicationKeys = ApiKey[2];
  //TODO :: this must be stored somewhere else, like in an .env file or mongodb
  constructor() {
    this.applicationKeys = [
      new ApiKey(
        "e0721e3edb27c019e0edcc4e0bf5cac87d9e4af8",
        "aQuienVotoFrontend"
      ),
      new ApiKey("6a6175aa35ed6753671eccc6245c3314435b5151", "aQuienVotoMobile")
    ];
  }

  public validateKey(key: string): ApiKey {
    let result: ApiKey[] = this.applicationKeys.filter(item => {
      return item.apikey === key;
    });

    return result[0];
  }
}
