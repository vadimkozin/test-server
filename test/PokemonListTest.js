const expect = require('chai').expect;
const { PokemonList } = require('../pokemon');
const { Pokemon } = require('../pokemon');
require('../pokemon').setLogging(false);

describe('PokemonList:', () => {
    var pokemons,
        items,
        max_items;
    
    before(() => {
        items = [ 
            { name: 'олень', level: 10},
            { name: 'косуля', level: 7},
            { name: 'бобёр', level: 20},
            { name: 'енот', level: 20}       
        ];
        max_items = [ 
            { name: 'бобёр', level: 20},
            { name: 'енот', level: 20}       
        ];
    });

    beforeEach(() => {
        pokemons = new PokemonList();         
    });

    describe('.add', () => {

        it('класс должен иметь метод add', () => {
            expect(pokemons).to.have.property('add');
        });

        it('после добавления список покемонов увеличился на одного', () => {
            let count = pokemons.length;
            pokemons.add('first', 100);
            expect(pokemons.length).to.eq(count+1);
        });

        it('добавленный элемент присутствует в списке', () => {
            let name = 'first';
            pokemons.add(name);
            expect(pokemons.exist(name)).to.true;
        });

    });

    describe('.show', () => {
        it('класс должен иметь метод show', () => {
            expect(pokemons).to.have.property('show');
        });

        it('метод show возвращает количество элементов в списке', () => {
            items.forEach(v => {
                pokemons.add(v.name, v.level);
            });
            expect(pokemons.show()).to.eq(pokemons.length);
        });

    });

    describe('.max', () => {

        it('класс должен иметь метод max', () => {
            expect(pokemons).to.have.property('max');
        });

        it('метод max возвращает массив', () => {
            expect(pokemons.max()).to.be.a('array');
        });
        
        it('метод max возвращает массив объектов Pokemon', () => {
            items.forEach(v => {
                pokemons.add(v.name, v.level);
            });
            expect(pokemons.max()[0]).to.be.an.instanceof(Pokemon);                      
        });
 
        it('метод max возвращает массив с контрольными значениями', () => {
            items.forEach(v => {
                pokemons.add(v.name, v.level);
            });
            expect(pokemons.max()).to.eql(max_items);                      
        });
        
    });
    
});