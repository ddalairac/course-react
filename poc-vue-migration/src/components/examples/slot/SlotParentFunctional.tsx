import SlotChildFunctional from './SlotChildFunctional';

function SlotParentFunctional() {
  return (
    <>
      <p>
        <code>/SlotChildFunctional.tsx</code>
      </p>
      <SlotChildFunctional
        header={<div>Este es el encabezado</div>}
        main={<div>Este es el contenido principal</div>}
        footer={<div>Este es el pie de página</div>}
      />
    </>
  );
}
export default SlotParentFunctional;
