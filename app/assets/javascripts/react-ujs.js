/* global process */
/**
 * Cribbed from https://github.com/reactjs/react-rails
 * but modularized & stripped of Turbolinks junk.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var ReactUJS = {
    CLASS_NAME_ATTR: 'data-react-class',
    PROPS_ATTR: 'data-react-props',
    findDOMNodes: function(searchSelector) {
        var selector;
        if (typeof searchSelector === 'undefined') {
            selector = '[' + ReactUJS.CLASS_NAME_ATTR + ']';
        } else {
            selector = searchSelector + ' [' + ReactUJS.CLASS_NAME_ATTR + ']';
        }

        return document.querySelectorAll(selector);
    },

    mountComponents: function(components, searchSelector) {
        var nodes = ReactUJS.findDOMNodes(searchSelector);

        for (const node of nodes) {
            const className = node.getAttribute(ReactUJS.CLASS_NAME_ATTR);
            if (components[className]) {
                const constructor = components[className];
                const propsJson = node.getAttribute(ReactUJS.PROPS_ATTR);
                const props = propsJson && JSON.parse(propsJson);
                ReactDOM.render(React.createElement(constructor, props), node);
            } else {
                if (process.env.NODE_ENV === 'development') {
                    console.warn(`React component ${className} not found. Make sure component is listed in the components manifest.`); // eslint-disable-line no-console
                }
            }
        }
    },

    unmountComponents: function(components, searchSelector) {
        var nodes = ReactUJS.findDOMNodes(searchSelector);

        for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            ReactDOM.unmountComponentAtNode(node);
        }
    },

    init: function(components, selector) {
        this.mountComponents(components, selector);
        window.addEventListener('unload', function() { this.unmountComponents(components, selector); }.bind(this));
    }
};

module.exports = ReactUJS;