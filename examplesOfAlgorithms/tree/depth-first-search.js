const root2 = document.body;
const resultElement2 = document.getElementById('result2');

const traverse2 = (node) => {
    let result = [];

    let recursiveTraversal = (node) => {
        result.push(node.localName);

        for(const child of node.children) {
            recursiveTraversal(child);
        }

    }

    recursiveTraversal(node);

    resultElement2.innerHTML = result.join(' -> ');
}

traverse2(root2);