import React, { PureComponent } from 'react';
import { Switch } from 'antd';

class Toggle extends PureComponent {
  render() {
    const { className, ...props } = this.props;
    return (
      <Switch
        {...props}
        className={`nrl-toggle${className ? ' ' + className : ''}`}
      />
    );
  }
}

export default Toggle;
