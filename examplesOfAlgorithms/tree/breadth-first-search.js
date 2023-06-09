const root = document.body;
const resultElement = document.getElementById('result');

function traverse(node) {
  const result = [];

  const queue = [];
  queue.push(node);

  while(queue.length) {
    let element = queue.shift();
    
    result.push(element.localName);

    queue.push(...element.children);
  }

  resultElement.innerHTML = result.join(' -> ');
}

traverse(root);