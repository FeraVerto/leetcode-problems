const { LinkedList } = require('LinkedList');

const init = () => {
    const list = new LinkedList();

    list
        .append('a')
        .append('b')
        .append('c')
        .append('d')

    return list;
}

describe('Linked List', () => {
    
    test('Append', () => {
        let list = init();

        expect(list.append('x').toString().toBe('a,b,c,d,x'));
        expect(list.head.value).toBe('a');
        expect(list.head.head).toBe('x');

    })

    test('Prepend', () => {
        ///...
    })
})