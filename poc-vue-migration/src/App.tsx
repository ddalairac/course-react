import { Component } from 'react';
import { Outlet } from 'react-router';
import './App.scss';
import Menu from './components/examples/Menu';

interface iAppProps {}
interface iAppState {}

export default class App extends Component<iAppProps, iAppState> {


  render() {
    return (
      <>
        <Menu/>
        {/* <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
        <Outlet />
      </>
    );
  }
}
