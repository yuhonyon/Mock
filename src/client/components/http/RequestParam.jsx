import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react';

@observer
class Request extends Component {
  handleKeyChange = (e) => {
    this.props.request.setKey(e.target.value);
  }

  handleValueChange = (e) => {
    this.props.request.setValue(e.target.value);
  }

  handleTextBoxClick = () => {
    if (this.props.isLastRequest) {
      this.props.onLastRequestHighlight();
    }
  }

  handleRemoveRequestClick = () => {
    this.props.onRemoveEndpoint(this.props.index);
  }

  render() {
    return (
      <tr>
        <td >
          <div className='ui fluid transparent input'>
            <input type='text' placeholder='Key' value={this.props.request.key} onChange={this.handleKeyChange} onClick={this.handleTextBoxClick} />
          </div>
        </td>
        <td >
          <div className='ui fluid transparent input'>
            <textarea type='text' placeholder='Value' value={this.props.request.value} onChange={this.handleValueChange} onClick={this.handleTextBoxClick} />
          </div>
        </td>
        <td >
          <div className='ui fluid transparent input'>
            <select name='' id='' value={this.props.request.type} onChange={this.handleValueChange}>
              <option value='any'>any</option>
              <option value='string'>string</option>
              <option value='number'>number</option>
              <option value='boolean'>boolean</option>
              <option value='array'>array</option>
              <option value='object'>object</option>
            </select>
          </div>
        </td>
        <td >
          <div className='ui fluid transparent input'>
            <input type='checkbox' placeholder='Value' value={this.props.request.value} onChange={this.handleValueChange} />
          </div>
        </td>
        <td >
          <div className='ui fluid transparent input'>
            <input type='text' placeholder='Value' value={this.props.request.value} onChange={this.handleValueChange} onClick={this.handleTextBoxClick} />
          </div>
        </td>
        {this.props.showClose && <td className='one wide center aligned' onClick={this.handleRemoveRequestClick}>
          <i className='close link icon' />
        </td>}
      </tr>
    );
  }
}

Request.propTypes = {
  requestKey: PropTypes.string,
  value: PropTypes.string
};

export default Request;
