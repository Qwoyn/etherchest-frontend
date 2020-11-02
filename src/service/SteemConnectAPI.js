import hivesigner from "hivesigner";

const api = new hivesigner.Client({
  app: "hive-loginking",
  baseURL: "https://hivesigner.com",
  callbackURL:
    process.env.REACT_APP_SC_CALLBACK || "https://www.etherchest.com/callback",
  scope: ["custom_json", "login"]
});

export default api;
