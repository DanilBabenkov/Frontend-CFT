
import styled from 'styled-components';
var _templateObject = _taggedTemplateLiteral(['\n    color: white;\n    font-size: 1em;\n    &:hover {\n        color: black;\n    }\n'], ['\n    color: white;\n    font-size: 1em;\n    &:hover {\n        color: black;\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TagDelete = styled.span.attrs(function (props) {
    return {
        'data-test': 'tag-delete-' + props.index
    };
})(_templateObject);

export default TagDelete;