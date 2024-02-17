import { component } from "react";
import { axios } from "./Axios";
import { endPoints } from "./endPoint";
class Movie extends component {
  async getPopular() {
    try {
      const response = await axios.get(endPoints.popular);
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getTopRated() {
    try {
      const response = await axios.get(endPoints.top_rated);
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getGanres() {
    try {
      const response = await axios.get(endPoints.ganerList);
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getUpcoming() {
    try {
      const response = await axios.get(endPoints.upcoming);
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getSingle(id) {
    try {
      const response = await axios.get(endPoints.getSingle(id));
      return { response };
    } catch (error) {
      return { error };
    }
  }
}
export { Movie };
