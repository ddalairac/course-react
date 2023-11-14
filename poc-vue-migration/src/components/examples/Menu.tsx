import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

interface iProps {}
interface iState {
  menu: {
    link: string;
    name: string;
  }[];
}

export default class Menu extends Component<iProps, iState> {
  state = {
    menu: [
      { link: '', name: 'home' },
      { link: 'surveys', name: 'surveys' },
      { link: 'component-examples', name: 'component-examples' },
      { link: '/actions/session-expired', name: 'session-expired' },
      { link: 'sarasa', name: '404' },
    ],
  };

  render() {
    const { menu } = this.state;
    return (
      <>
        <nav>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }
}
