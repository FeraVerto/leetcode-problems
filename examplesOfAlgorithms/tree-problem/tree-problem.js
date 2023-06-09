const root = document.body;
const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];

const paintLevels = (node) => {
    let depth = 0;

    let recursiveTraversal = (node) => {
        for(const child of node.children) {
            if(child.localName === 'ul') {
                child.style.backgroundColor = colors[depth]
                depth++;
                if(depth > 2) {
                    depth = 0;
                }
            }
            recursiveTraversal(child);
        }        
    }

    recursiveTraversal(node);
}

paintLevels(root);