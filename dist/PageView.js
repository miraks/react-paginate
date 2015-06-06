'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var classNames = require('classnames');

var PageView = React.createClass({
  displayName: 'PageView',

  render: function render() {
    var classes = {};
    classes[this.props.linkContainerClassName] = true;
    classes[this.props.activeClass || 'm-selected'] = this.props.selected;
    var linkContainerClasses = classNames(classes);

    var Link = this.props.link || 'a';

    return React.createElement(
      'li',
      { className: linkContainerClasses },
      React.createElement(
        Link,
        _extends({}, this.props, { href: '' }),
        this.props.page
      )
    );
  }
});

module.exports = PageView;