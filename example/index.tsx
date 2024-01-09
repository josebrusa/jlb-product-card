import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButton, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'coffe mug - Card',
  // img: './coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard product={product} initialValues={{ count: 0, maxCount: 10 }}>
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButton />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
