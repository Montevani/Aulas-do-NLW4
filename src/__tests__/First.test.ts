describe("First", () => {
    it("Deve ser possível somar 2 números.", () => {
        expect(2+2).toBe(4);
    });

    it("Deve ser impossível conseguir um resultado diferente de 4.", () => {
        expect(2+2).not.toBe(5);
    });
});