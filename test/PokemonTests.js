const expect = require('chai').expect;
const { Pokemon } = require('../pokemon');
require('../pokemon').setLogging(false);

describe('Pokemon:', () => {
    describe('.show', () => {
        it('класс должен иметь метод show', () => {
            expect(new Pokemon()).to.have.property('show');
        });
        
        it('метод show() возвращает строку', () => {
            expect(new Pokemon().show()).to.be.a('string');
        });

        it("new Pokemon().show() вернёт: [name: '' level: 0]", () => {
            expect(new Pokemon().show()).to.contain("[name: '' level: 0]");
        });

        it("new Pokemon.show('qwerty') вернёт [name: 'qwerty' level: 0]", () => {
            expect(new Pokemon('qwerty').show()).to.contain("name: 'qwerty' level: 0");
        });

        // генерация тестов
        const tests = [
            {name:'заяц', level: 10, expect: " [name: 'заяц' level: 10]" },
            {name:'лиса', level: 20, expect: " [name: 'лиса' level: 20]" },
            {name:'медведь', level: 50,  expect: " [name: 'медведь' level: 50]"}        
        ];
        tests.forEach(test => {
            it(`new Pokemon('${test.name}', ${test.level}).show() вернёт: ${test.expect}`, () => {
                const pokemon = new Pokemon(test.name, test.level);
                expect(pokemon.show(false)).to.contain(test.expect);
            });
        });
        
    });
});