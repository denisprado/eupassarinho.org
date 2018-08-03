import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    try {
      const res = await axios(
        `${proxy}http://www.eupassarinho.org/poesiadeluta/wp-json/wp/v2/posts?search=${this.query}`
      );
      this.result = res.data;
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
    