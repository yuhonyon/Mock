import {observable} from 'mobx';

export default class Request {
  @observable key;
  @observable value;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  setKey(key) {
    this.key = key;
  }

  setValue(value) {
    this.value = value;
  }

}
