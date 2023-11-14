import React, { Component } from 'react';

// Component Input Properties
interface iCompProps {}

// Component State Properties
interface iCompState {}

export default class CustomEventsClassNotation extends Component<iCompProps, iCompState> {
  vdsDDRef: React.RefObject<HTMLElement> = React.createRef();
  vdsInputRef: React.RefObject<HTMLElement> = React.createRef();

  componentDidMount() {
    // Add listeners to custom events
    // console.log('Add Listeners ClassNotation');

    const vdsDD = this.vdsDDRef.current;
    const vdsInput = this.vdsInputRef.current;

    if (vdsDD) vdsDD.addEventListener('vds-dropdown-change', this.onDropdownChange);
    if (vdsInput) vdsInput.addEventListener('vds-input-input', this.onInputChange);
  }

  componentWillUnmount() {
    // console.log('Remove Listeners ClassNotation');

    const vdsDD = this.vdsDDRef.current;
    const vdsInput = this.vdsInputRef.current;

    if (vdsDD) vdsDD.removeEventListener('vds-dropdown-change', this.onDropdownChange);
    if (vdsInput) vdsInput.removeEventListener('vds-input-input', this.onInputChange);
  }

  // create handlers
  onDropdownChange(event: CustomEvent) {
    console.log('Listener vds-dropdown-change: ', event.detail);
  }

  onInputChange(event: CustomEvent) {
    console.log('Listener vds-dropdown-change: ', event.detail);
  }

  render() {
    return (
      <>
        <p>
          <code>/CustomEventsClassNotation.tsx</code>
        </p>
        <vds-dropdown text="Events" id="dd-events" ref={this.vdsDDRef}>
          <vds-dropdown-item value="100">Dropdown value 100</vds-dropdown-item>
          <vds-dropdown-item value="Some string">Dropdown value 'Some string'</vds-dropdown-item>
          <vds-dropdown-item value="false">Dropdown value false</vds-dropdown-item>
        </vds-dropdown>
        <vds-input name="first-name" ref={this.vdsInputRef}></vds-input>
      </>
    );
  }
}
