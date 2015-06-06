'use strict';

var React = require('react');
var classNames = require('classnames');

var PageView = React.createClass({
  render: function() {
    var classes = {};
    classes[this.props.linkContainerClassName] = true;
    classes[this.props.activeClass || 'm-selected'] = this.props.selected;
    var linkContainerClasses = classNames(classes);

    var Link = this.props.link || 'a';

    return (
      <li className={linkContainerClasses}>
        <Link {...this.props} href="">
          {this.props.page}
        </Link>
      </li>
    );
  }
});

module.exports = PageView;
