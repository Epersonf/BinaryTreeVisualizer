var keyToFindInput = document.getElementById("key-to-find");
var currentCode = 0;

var codeSelection = [
    `new binaryNode(1,
        new binaryNode(2, 
            new binaryNode(4,
                null,
                null
            ),
            new binaryNode(5,
                null,
                null
            )
        ),
        new binaryNode(3,
            null,
            null
        )
    )`,
`let node;

if (!node && this.left)
    node = await this.left.searchKey(key);

if (!node && this.right)
    node = await this.right.searchKey(key);

await sleep(200);
if (!node) {
    this.seen(true);            
    if (this.key == key)
        node = this;
}

return node;`
];

editor.on('change', (editor) => codeSelection[currentCode] = editor.doc.getValue());

function search() {
    node = eval(codeSelection[0]);
    render(node);
    node.searchKey(keyToFindInput.value);
}

function updateTextBox(i=0) {
    currentCode = i;
    editor.getDoc().setValue(codeSelection[currentCode]);
}

updateTextBox(0);