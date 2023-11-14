import { Component, ReactNode } from 'react';

interface iCompProps {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
}
interface iCompState {}

export default class SlotChildClassNotation extends Component<iCompProps, iCompState> {
  render() {
    const { header, main, footer } = this.props;
    return (
      <div>
        <header>{header}</header>
        <main>{main}</main>
        <footer>{footer}</footer>
      </div>
    );
  }
}
