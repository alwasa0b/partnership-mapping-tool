import React from 'react';
import Item from './Item';
import Header from './Header';
import Add from './Add';
import EditItem from './EditItem';

const OrganizationList = ({ items = [], editing = false }) => (
  <div>
    <Header />
    {items.map(item => <Item item={item} />)}
    {!editing && <Add />}
    {editing && <EditItem />}
  </div>
);

export default OrganizationList;
