# jlb-product-card

Esto es un paquete de pruebas de despliegue en NPM

### BRUSA JOSE

## Ejemplo

```

import { ProductButton, ProductCard, ProductImage, ProductTitle} from "jlb-product-card";

```

```
const product = {
  id: '1',
  title: 'coffe mug - Card',
  img: './coffee-mug.png',
};
```

```
<ProductCard
    product={product}
    initialValues = {{ count: 0, maxCount: 10 }}>
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButton />
            </>
        )}
</ProductCard>
```
