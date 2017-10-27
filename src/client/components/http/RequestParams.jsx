import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react';
import Request from './RequestParam';

@observer
class Requests extends Component {
  handleLastEndpointHeight = () => {
    this.props.endpoint.addEmptyRequest();
  }

  onRemoveEndpoint = (index) => {
    this.props.endpoint.removeRequest(index);
  }

  render() {
    console.log(this.props.endpoint,999);
    let requestItems = this.props.endpoint.requests&&this.props.endpoint.requests.map((request, index) => {
      return <Request
        onLastRequestHighlight={this.handleLastEndpointHeight}
        request={request}
        isLastRequest={index === this.props.endpoint.requests.length - 1}
        index={index}
        onRemoveEndpoint={this.onRemoveEndpoint}
        showClose={this.props.endpoint.requests.length > 1}
        />;
    });

    return (
      <table className='ui celled striped table'>
        <thead>
          <tr>
            <th colSpan='3' onClick={this.handleLastEndpointHeight}>
              Request Params&emsp; 数据类型:
              <select name='' id=''>
                <option value=''>
                  key-value
                </option>
                <option value=''>
                  Array[key-value]
                </option>
              </select>
            </th>
          </tr>
          <tr>
            <th>Key</th>
            <th>描述及要求</th>
            <th>数据类型</th>
            <th>必填</th>
            <th>验证</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {requestItems}
        </tbody>
      </table>
    );
  }
}

Requests.propTypes = {
  requests: PropTypes.array
};

export default Requests;
