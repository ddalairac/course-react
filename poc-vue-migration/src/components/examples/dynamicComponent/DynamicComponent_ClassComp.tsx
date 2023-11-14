/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Component } from 'react';

// Properties that the component receives
type iDinamicPorps = { [key: string]: any };
interface iCompProps {
  is: string;
  useDefaultPath?: boolean;
}

// Component State Properties
interface iCompState {
  Component: React.ComponentType | null;
}

export default class DynamicComponent_ClassComp extends Component<iCompProps & iDinamicPorps, iCompState> {
  state = {
    Component: null,
  };

  componentDidMount() {
    this.loadComponent();
  }

  componentDidUpdate(prevProps: iCompProps) {
    if (prevProps.is !== this.props.is) {
      // console.log({ prevPropsIs: prevProps.is, propIs: this.props.is });
      this.loadComponent();
    }
  }

  async loadComponent() {
    try {
      const { is } = this.props;
      const basePath = '../';
      // console.log('CLASS basePath/is', `${basePath}${is}`);

      /** @vite-ignore: prevent Vite from preprocessing the import */
      const module = await import(/* @vite-ignore */ `${basePath}${is}`);
      // console.log('module', module);

      setTimeout(() => {
        this.setState(() => ({
          Component: module.default as React.ComponentType,
        }));
      }, 0);
    } catch (error) {
      console.error('DynamicComponent_ClassComp', error);
    }
  }

  render() {
    const { Component } = this.state;
    const {  ...rest } = this.props;
    return (
      <div>
        <p>
          <code>/DynamicComponent_ClassComp.tsx</code>
        </p>
        <hr />
        {Component ? <Component {...rest} /> : <div>Loading...</div>}
      </div>
    );
  }
}
