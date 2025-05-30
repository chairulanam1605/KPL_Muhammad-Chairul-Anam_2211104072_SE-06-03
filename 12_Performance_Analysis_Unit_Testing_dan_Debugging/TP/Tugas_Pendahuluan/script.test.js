const { cariTandaBilangan } = require('./script');

test('Bilangan negatif', () => {
    expect(cariTandaBilangan(-5)).toBe("Negatif");
});

test('Bilangan nol', () => {
    expect(cariTandaBilangan(0)).toBe("Nol");
});

test('Bilangan positif', () => {
    expect(cariTandaBilangan(7)).toBe("Positif");
});