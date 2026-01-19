import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //if the account is created then the user is loginned directly
        return this.loginAccount({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async loginAccount({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  //it checks whether at current the user is login or not
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite server::getCurrent user", error);
    }
    return null;
  }
  async logoutUser() {
    try {
      //here one more method is there deleteSession(id) which delete from a particular location
      //whereas deleteSessions delete the session from all the location
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite server::getCurrent user", error);
    }
    return null;
  }
}
const authService = new AuthService();
export default authService;
