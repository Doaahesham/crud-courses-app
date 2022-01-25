import React, { Component } from 'react'
import Item from './Item';

class ListItem extends Component {
   state={}
    render() {
        return (
            <div className="list-style">
                <Item/>


            </div>
        );
    }
}

export default ListItem;