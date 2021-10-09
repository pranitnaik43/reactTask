import React from 'react';

let usersData = {
  data: null,
  add: (item) => {
    this.data.push(item);
  },
  delete: (id) => {
    let newData = this.data.filter(element => (element.id === id));
    this.data = newData;
  }
}

export const UsersContext = React.createContext(usersData);
