import { BASE_URL } from "@/core/api.js";
const axios = require("axios");

const MODEL_ENDPOINT = "/api/v1/model/res.users";
const HTTP = axios.create({
  baseURL: BASE_URL,
});

export default {
  models: {
    name: "",
    account_type: "",
    family_nik_id: null,
    family_nik_no: null,
    child_nik: null,
    child_date_of_birth: null,
    child_age: null,
    child_age_in_month: null,
    child_age_in_year: null,
    child_age_phonetic: null,
  },

  search_read(domain = [], fields = []) {
    return HTTP.post(MODEL_ENDPOINT + "/search_read", {
      params: {
        domain: [...domain, ["account_type", "=", "child"]],
        args: [],
        kwargs: {},
      },
    });
  },
  search_read_by_family(fam_id) {
    return HTTP.post(MODEL_ENDPOINT + "/search_read", {
      params: {
        domain: [
          ["account_type", "=", "child"],
          ["family_nik_id", "=", fam_id],
        ],
        args: [],
        kwargs: {},
      },
    });
  },
  get_child_data(id) {
    return HTTP.post(MODEL_ENDPOINT + "/get_child_data", {
      params: {
        args: [
          {
            id: id,
          },
        ],
        kwargs: {},
      },
    });
  },
};
