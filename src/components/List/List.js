import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class List extends PureComponent {

  render() {
    const { className, data, renderItem, icon, title, linkToAll, header, footer } = this.props;

    const defaultHeader = (
      <div className="nrl__list-header--content">
        { 
          icon && (
            <span className="nrl__list-header--icon">
              {icon}
            </span>
          )
        }
        {
          title && (
            <h5 className="nrl__list-header--title">{title}</h5>
          )
        }
        {
          linkToAll && (
            <Link className="nrl__list-header--link" to={linkToAll}>View All</Link>
          )
        }
      </div>
    );

    const defaultFooter = null;

    return (
      <div className={`nrl__list${className ? ' ' + className : ''}`}>
        <div className="nrl__list-header">
          {
            header ? header : defaultHeader
          }
        </div>
        <div className="nrl__list-items">
          {
            (data && data.length) ? (
              data.map((item, index) => (
                <div className="nrl__list-item" key={index}>
                  {
                    renderItem(item, index)
                  }
                </div>
              ))
            ) : "No items to show..."
          }
        </div>
        <div className="nrl__list-footer">
          {
            footer ? footer : defaultFooter
          }
        </div>
      </div>
    );
  }
}

export default List;
