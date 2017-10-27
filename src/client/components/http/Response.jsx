import React, { PropTypes } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/mode/html';
import 'brace/mode/xml';
import 'brace/mode/markdown';
import 'brace/theme/tomorrow';

class Response extends React.Component {
  handleChange = (response) => {
    this.props.endpoint.setResponse(response);
  }

  getMode = () => {
    let mode = 'markdown';
    let contentType = this.props.endpoint.response.contentType.type;

    if (contentType === 'JSON') {
      mode = 'json';
    } else if (contentType === 'Html') {
      mode = 'html';
    } else if (contentType === 'XML') {
      mode = 'xml';
    } else if (contentType === 'JavaScript') {
       mode = 'javascript';
    } else if (contentType === 'Mockjs') {
       mode = 'javascript';
    }

    return mode;
  }
  getHideError=() => {
    let contentType = this.props.endpoint.response.contentType.type;
    return contentType==='Mockjs';
  }

  render() {
    return (
      <div className={this.getHideError()?'hideError':''}>
        <AceEditor
          mode={this.getMode()}
          theme='tomorrow'
          name='UNIQUE_ID_OF_DIV'
          editorProps={{ $blockScrolling: true }}
          width='100%'
          height='340px'
          onChange={this.handleChange}
          value={this.props.endpoint.response.content}
          enableBasicAutocompletion
          fontSize={14}
          highlightActiveLine
          />
      </div>
    );
  }
}

export default Response;
