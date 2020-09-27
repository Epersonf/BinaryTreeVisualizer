var keyToFindInput = document.getElementById("key-to-find");

function search() {
    render(node);
    node.searchKey(keyToFindInput.value);
}