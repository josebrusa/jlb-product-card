import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const product = { title: 'Custom Product' };
    const styleClass = { className: 'custom-class' };
    const wrapper = renderer.create(
      <ProductTitle title={product.title} className={styleClass.className} />
    );
    console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto1', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
