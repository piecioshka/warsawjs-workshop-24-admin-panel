import { Product as Model } from '../front-end/scripts/models/product';

test('is exist', () => {
    expect(typeof Model).toBe('function');
});

test('support get* functions', () => {
    const m = new Model({
        name: 'nnn',
        description: 'dddd'
    });
    expect(typeof m.getName).toBe('function');
    expect(typeof m.getDescription).toBe('function');
});

test('get product name', () => {
    const n = 'Car';
    const m = new Model({ name: n });
    expect(m.getName()).toBe(n);
});

test('product name is sliced', () => {
    const d = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    const m = new Model({ name: d });
    expect(m.getName()).toBe('Lorem ipsum dolor si');
});

test('get product description', () => {
    const d = 'movement vehicle';
    const m = new Model({ description: d });
    expect(m.getDescription()).toBe(d);
});

test('product description is sliced', () => {
    const d = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    const m = new Model({ description: d });
    expect(m.getDescription()).toBe('Lorem ipsum dolor sit amet, co');
});
