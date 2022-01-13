import { isTokenValid } from "src/utilities/isTokenValid";
import Cookies from "js-cookie";

class UserInitializer {
  userInitialized: boolean = false;
  initializingProccess: Promise<boolean> = undefined;
  reInitializingProccess: Promise<boolean> = undefined;
  initializeUser = async (): Promise<boolean> => {
    this.initializingProccess = new Promise(async (resolve, reject) => {
      return resolve(true);
    });
    return this.initializingProccess.then();
  };
  isHeaderTokenSameAsCurrent = (headers) => {
    const headerAuthorization = headers.Authorization;
    if (!headerAuthorization) return false;
    const headerToken = headerAuthorization.replace("Bearer", "").trim();
    const currentToken = this.getCookiesToken();
    return currentToken === headerToken;
  };
  getCookiesToken = (): string | undefined => {
    return Cookies.get("stage-token");
  };
  isValidTokenExists = () => {
    const token = this.getCookiesToken();
    return token && isTokenValid(token);
  };
  checkUserInitiatization = async (): Promise<boolean> => {
    if (this.initializingProccess) {
      return this.initializingProccess.then((result) => {
        return result;
      });
    } else if (this.userInitialized && this.isValidTokenExists()) {
      return this.userInitialized;
    } else {
      return await this.initializeUser();
    }
  };
}
let userInitializer: UserInitializer = null;
if (!userInitializer) {
  userInitializer = new UserInitializer();
}
export default userInitializer