import { Component } from 'react';
// import { Outlet } from 'react-router';
import './ComponentExampleView.scss';
// import reactLogo from '../../assets/react.svg';
// import viteLogo from '/vite.svg';
import ClassNotation_Prop from '@/components/examples/Props/ClassNotation_Prop';
import Functional_Prop from '@/components/examples/Props/Functional_Prop';
import Functional_Store from '@/components/examples/store/Functional_Store';
import ClassNotation_Store from '@/components/examples/store/ClassNotation_Store';
import SlotParentFunctional from '@/components/examples/slot/SlotParentFunctional';
import SlotParentClassNotation from '@/components/examples/slot/SlotParentClassNotation';
import CustomEventsFunctional from '@/components/examples/customEvents/CustomEventsFunctional';
import CustomEventsClassNotation from '@/components/examples/customEvents/CustomEventsClassNotation';
import DynamicComponent_FuncComp from '@/components/examples/dynamicComponent/DynamicComponent_FuncComp';
import DynamicComponent_ClassComp from '../examples/dynamicComponent/DynamicComponent_ClassComp';
// import SL from '@/data/services/ServiceLocator';

interface iCompProps {}
interface iCompState {
  componenPath: string;
}

export default class ComponentExampleView extends Component<iCompProps, iCompState> {
  // state default values
  state = { componenPath: '../examples/store/ClassNotation_Store.tsx' };

  setComp(path: string) {
    this.setState(() => ({ componenPath: path }));
  }

  async componentDidMount() {}

  render() {
    const { componenPath } = this.state;

    return (
      <>
        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}

        <div className="row">
          <div className="col-md-6">
            <vds-card header="Props And States" class="mb-4">
              <div className="row">
                <div className="col-md-6">
                  <ClassNotation_Prop someNumber={1} />
                </div>
                <div className="col-md-6">
                  <Functional_Prop someNumber={1} />
                </div>
              </div>
            </vds-card>
          </div>

          <div className="col-md-6">
            <vds-card header="Store" class="mb-4">
              <div className="row">
                <div className="col-md-6">
                  <ClassNotation_Store />
                </div>
                <div className="col-md-6">
                  <Functional_Store />
                </div>
              </div>
            </vds-card>
          </div>
        </div>

        <vds-card header="Slot ish example" class="mb-4">
          <div className="row">
            <div className="col-md-6">
              <SlotParentFunctional></SlotParentFunctional>
            </div>
            <div className="col-md-6">
              <SlotParentClassNotation></SlotParentClassNotation>
            </div>
          </div>
        </vds-card>

        <vds-card header="Capture custom event" class="mb-4">
          <div className="row">
            <div className="col-md-6">
              <CustomEventsFunctional />
            </div>
            <div className="col-md-6">
              <CustomEventsClassNotation />
            </div>
          </div>
        </vds-card>

        <vds-card header="Dynamic component" class="mb-4">
          <div className="d-flex">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                this.setComp('store/ClassNotation_Store.tsx');
              }}
            >
              Store
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                this.setComp('slot/SlotParentClassNotation.tsx');
              }}
            >
              Slot parent
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                this.setComp('Props/Functional_Prop.tsx');
              }}
            >
              Props
            </button>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <vds-card>
                <DynamicComponent_FuncComp is={componenPath} someNumber={2} />
              </vds-card>
            </div>
            <div className="col-md-6">
              <vds-card>
                <DynamicComponent_ClassComp is={componenPath} someNumber={2} />
              </vds-card>
            </div>
          </div>
        </vds-card>
      </>
    );
  }
}
