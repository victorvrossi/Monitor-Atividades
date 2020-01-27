import React from 'react';
import './subMenuList.css';

function SubMenuList({ items }) {
    return (
        <ul className="subMenuLateral">
            {
                items.map(item =>
                    (item.linha)
                )}
        </ul>
    );
}

export default SubMenuList;