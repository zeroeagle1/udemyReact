import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Marc Gagne",
        email: "macrGagne@gagrne.fr",
        phone: "111-222-3333"
      },
      {
        id: 2,
        name: "Jean drapo",
        email: "olympe@mtl.mtl",
        phone: "888-888-8989"
      },
      {
        id: 3,
        name: "Lia ail",
        email: "daw2112@dw.fr",
        phone: "987-456-1233"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
