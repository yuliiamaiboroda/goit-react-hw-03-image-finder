import axios from "axios";
  export class PixabayApi  {
      #BASE_URL = 'https://pixabay.com/api';
      #API_KEY ='31210662-8b396391b135a1b3bec6a0b8b';
  
      page = 1;
      q = null;
      per_page = 12;
      fetchImages(){
          return axios.get(`${this.#BASE_URL}`, {
              params: {
                  key: this.#API_KEY,
                  q: this.q,
                  page: this.page,
                  per_page: this.per_page,
                  image_type: "photo",
                  orientation: "horizontal",
                  safesearch: "true",
              }
          }, {
            referrerPolicy: "unsafe_url" 
        })
      }
  }