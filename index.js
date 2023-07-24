//const axios = require('axios');
import axios from "axios";

axios
    .get("https://api.github.com/users/M-Zweibrucker")
    .then (res => axios.get(res.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch (err => console.log(err));
    