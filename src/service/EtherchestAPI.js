import axios from "axios";

export class EtherchestAPI {
  baseUrl = "https://etherchest-backend.herokuapp.com/"; // main api
  
  get(suffix) {
    return axios.get(this.baseUrl + suffix).then(res => res.data);
  }

  getTrending() {
    return this.gethiveAPI("get_discussions_by_trending", [
      { tag: "leofinance", limit: 20 }
    ]);
  }

  getTrendingHome() {
    return this.gethiveAPI("get_discussions_by_trending", [
      { tag: "leofinance", limit: 1 }
    ]);
  }

  getUser(username) {
    return this.get(`u/${username}`);
  }

  getUserLand(username) {
    return this.get(`a/${username}`);
  }

  getUserDiamonds(username) {
    return this.get(`diamonds/${username}`);
  }

  getUserSappires(username) {
    return this.get(`sapphires/${username}`);
  }

  getUserEmeraldss(username) {
    return this.get(`emeralds/${username}`);
  }

  getUserRubys(username) {
    return this.get(`rubys/${username}`);
  }

  getUserDelegation(username) {
    return this.get(`delegation/${username}`);
  }

  getStats() {
    return this.get("stats");
  }

  getAll() {
    return this.get("");
  }

  gethiveAPI(method, params) {
    return axios
      .post(
        "https://api.openhive.network",
        JSON.stringify({
          id: 0,
          jsonrpc: "2.0",
          method: `condenser_api.${method}`,
          params
        })
      )
      .then(res => res.data.result);
  }

  getDGPO() {
    return this.gethiveAPI("get_dynamic_global_properties", []);
  }

  async getUserDiamonds(username) {
    const [user] = await Promise.all([
      this.getUser(username),
    ]);
    const availableDiamonds = user.diamond || [];

    return {
      availableDiamonds
    };
  }

  async getUserSapphires(username) {
    const user = await Promise.all([
      this.getUser(username)
    ]);
    const availableSapphires = user.sapphires || [];

    return {
      availableSapphires
    };
  }

  async getUserEmeralds(username) {
    const user = await Promise.all([
      this.getUser(username)
    ]);
    const availableEmeralds = user.emeralds || [];

    return {
      availableEmeralds
    };
  }

  async getUserRubys(username) {
    const user = await Promise.all([
      this.getUser(username)
    ]);
    const availableRubys = user.rubys || [];

    return {
      availableRubys
    };
  }

  userExists(username) {
    return this.getAll().then(all => Object.keys(all.users).includes(username));
  }

  hiveUserExists(username) {
    return this.gethiveAPI("get_accounts", [[username]]).then(
      user => user && user[0] && user[0].name
    );
  }
}

export const gemNames = {
  gd:  "Diamond",
  sp:  "Sapphire",
  em:  "Emerlad",
  rb:  "ruby"
};

export const gemTypes = {
  r: {
    num: 50000000,
    str: "5",
    name: "Diamond"
  },
  m: {
    num: 50000000,
    str: "5",
    name: "Sapphire"
  },
  t: {
    num: 50000000,
    str: "5",
    name: "Emerald"
  },
  s: {
    num: 100000000,
    str: "10.000",
    name: "Ruby"
  }
};