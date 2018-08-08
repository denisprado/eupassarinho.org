import axios from "axios";

export default class List {
  constructor(count) {
    this.count = count;
  }

  async getResults() {
    try {
      const res = await axios(
        `https://api.instagram.com/v1/users/self/media/recent/?access_token=1004315668.d1f16c0.35e1f6c70f9b4227a90b85eee83ee54b&count=${this.count}`
      );
      this.result = res.data.data;
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}