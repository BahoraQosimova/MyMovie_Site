import axios from "axios";

const baseURL = "https://api.themoviedb.org/4";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2JiMjE0ZjE4YzI4YTEyZGM5YTk4NmFmOTI1OWQwYSIsInN1YiI6IjY1YzFhNTk5Y2U5OTdhMDE4ODJmMGE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zMvfY7mdcgX2d-TPeRMzoMCgtsRXhHW4oauTH1wh-nI";

const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
