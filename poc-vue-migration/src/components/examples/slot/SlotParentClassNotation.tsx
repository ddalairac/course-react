import { Component } from 'react';
import SlotChildClassNotation from './SlotChildClassNotation';

interface iCompProps {}
interface iCompState {}

export default class SlotParentClassNotation extends Component<iCompProps, iCompState> {
  render() {
    return (
      <>
        <p>
          <code>/SlotChildClassNotation.tsx</code>
        </p>
        <SlotChildClassNotation
          header={<div>Este es el encabezado</div>}
          main={<div>Este es el contenido principal</div>}
          footer={<div>Este es el pie de página</div>}
        />
      </>
    );
  }
}
