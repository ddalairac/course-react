import { useEffect, useRef } from 'react';

const CustomEventsFunctional = () => {
  const vdsDDRef = useRef(null);
  const vdsInputRef = useRef(null);

  /** 'useEffect' is similar to 'componentDidMount' (if the dependecies array is empty) */
  useEffect(() => {
    const vdsDD = vdsDDRef.current;
    const vdsInput = vdsInputRef.current;

    // create handlers
    const onDropdownChange = (event) => {
      console.log('Listener vds-dropdown-change: ', event.detail);
    };
    const onInputChange = (event) => {
      console.log('Listener vds-dropdown-change: ', event.detail);
    };

    // Add listeners to custom events
    // console.log('Add Listeners Functional');
    vdsDD.addEventListener('vds-dropdown-change', onDropdownChange);
    vdsInput.addEventListener('vds-input-input', onInputChange);

    /** useEffect return is similar to componentWillUnmount (if the dependecies array is empty) */
    return () => {
      // Clean event listeners on component destroy
      // console.log('Remove Listeners Functional');
      vdsDD.removeEventListener('vds-dropdown-change', onDropdownChange);
      vdsInput.removeEventListener('vds-input-input', onInputChange);
    };
  }, []);

  return (
    <>
      <p>
        <code>/CustomEventsFunctional.tsx</code>
      </p>
      <vds-dropdown text="Events" id="dd-events" ref={vdsDDRef}>
        <vds-dropdown-item value="100">Dropdown value 100</vds-dropdown-item>
        <vds-dropdown-item value="Some string">Dropdown value 'Some string'</vds-dropdown-item>
        <vds-dropdown-item value="false">Dropdown value false</vds-dropdown-item>
      </vds-dropdown>
      <vds-input name="first-name" ref={vdsInputRef}></vds-input>
    </>
  );
};

export default CustomEventsFunctional;
