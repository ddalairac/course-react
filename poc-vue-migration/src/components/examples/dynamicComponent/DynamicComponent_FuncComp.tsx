import { useState, useEffect } from 'react';

const DynamicComponent_FuncComp = ({ is = '', useDefaultPath = true, ...rest }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const basePath = '../';
        // console.log('FUNC basePath/is',`${basePath}${is}`)

        /** @vite-ignore: prevent Vite from preprocessing the import */
        const module = await import(/* @vite-ignore */ `${basePath}${is}`);

        setTimeout(() => {
          setComponent(() => module.default);
        }, 0);
      } catch (error) {
        // console.error('.. module error', error);
      }
    };
    loadComponent();
  }, [is, useDefaultPath]);

  return (
    <>
      <div>
        <p>
          <code>/DynamicComponent_ClassComp.tsx</code>
        </p>
        <hr />
        {Component ? <Component {...rest} /> : <div>Loading...</div>}
      </div>
    </>
  );
};

export default DynamicComponent_FuncComp;
