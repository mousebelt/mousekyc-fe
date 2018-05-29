import React, { PureComponent } from 'react';
import { Select } from 'antd';

class DropdownSelect extends PureComponent {
  render() {
    const { className, options, ...props } = this.props;

    return (
      <Select
        {...props}
        className={`nrl-dropdown${className ? ' ' + className : ''}`}
        size="large"
      >
        {
          (options && options.length) && (
            options.map((item, index) => (
              <Select.Option
                key={index}
                value={item.value}
              >
                {item.name}
              </Select.Option>
            ))
          )
        }
      </Select>
    );
  }
}

export default DropdownSelect;
