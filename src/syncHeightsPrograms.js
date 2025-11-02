function syncHeights(selector) {
    if (window.screen.width <= 850) return;
    const blocks = document.querySelectorAll(selector);
    let maxHeight = 0;
console.log('im here')
    blocks.forEach(block => block.style.height = 'auto');

    blocks.forEach(block => {
        if (block.offsetHeight > maxHeight) maxHeight = block.offsetHeight;
    });

    blocks.forEach(block => block.style.height = maxHeight + 'px');
    console.log(blocks[1])
}
syncHeights('.program-short-desc');