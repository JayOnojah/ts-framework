import axios, { AxiosPromise } from 'axios';

interface HasID {
  id?: number;
}

export class APISync<T extends HasID> {
  constructor(public rootURL: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/users/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootURL}/users/${id}`, data);
    } else {
      return axios.post(this.rootURL, data);
    }
  }
}
