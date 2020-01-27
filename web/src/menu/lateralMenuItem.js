import React from 'react';

function ItemList({ link, title }) {
    return (<li><a href={link} >{title}</a></li>);
}
export default ItemList;