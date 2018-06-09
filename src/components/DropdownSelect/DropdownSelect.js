import React, { PureComponent } from 'react';
import { Select } from 'antd';

class DropdownSelect extends PureComponent {

  onCountryChange = (value) => {
    this.props.onSelectCountry(value);
  }

  render() {
    const { className, options, ...props } = this.props;

    return (
      <Select
        {...props}
        className={`nrl-dropdown${className ? ' ' + className : ''}`}
        size="large"
        onChange={(value) => this.onCountryChange(value)}
      >
        {
          (options && options.length) && (
            options.map((item, index) => (
              item.name ? 
              <Select.Option
                key={index}
                value={item.name}
              >
                {item.name}
              </Select.Option>
              : null
            ))
          )
        }
      </Select>
    );
  }
}

export default DropdownSelect;
