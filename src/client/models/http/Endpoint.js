import {observable, computed} from 'mobx';
import Header from './Header';
import Request from './Request';
export default class Endpoint {
  @observable url;
  @observable method;
  @observable headers;
  @observable response;
  @observable requests;
  type;

  constructor(url, method, headers, response,requests) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.response = response;
    this.requests=requests;
    this.type = 'http';
  }

  setUrl(url) {
    this.url = url;
  }

  setMethod(method) {
    this.method = method;
  }

  setResponse(response) {
    this.response.content = response;
  }

  addEmptyHeader() {
    this.headers.push(new Header('', ''));
  }

  removeHeader(index) {
    this.headers.splice(index, 1);
  }
  addEmptyRequest() {
    this.requests.push(new Request('', ''));
  }

  removeRequest(index) {
    this.requests.splice(index, 1);
  }


  @computed get displayEndpoint() {
    return this.url;
  }
}
