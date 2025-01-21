const productForm = document.getElementById('add-product');
const productList = document.getElementById('products');

// Adicionar produto
productForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('product-name').value.trim();
    const description = document.getElementById('product-description').value.trim();
    const priceInput = document.getElementById('product-price').value.trim();

    // Converte preço para número decimal, aceitando vírgulas ou pontos
    const price = parseFloat(priceInput.replace(',', '.'));

    if (!name || !description || isNaN(price) || price <= 0) {
        alert('Por favor, preencha todos os campos corretamente e insira um preço válido.');
        return;
    }

    const imageInput = document.getElementById('product-image');
    if (imageInput.files.length === 0) {
        alert('Por favor, selecione uma imagem.');
        return;
    }

    const imageFile = imageInput.files[0];
    const imageURL = URL.createObjectURL(imageFile);

    addProduct(name, description, price.toFixed(2), imageURL);
    productForm.reset();
});

// Exibir produto
function addProduct(name, description, price, imageURL) {
    const li = document.createElement('li');

    li.innerHTML = `
        <img src="${imageURL}" alt="${name}">
        <div>
            <h3>${name}</h3>
            <p>${description}</p>
            <p><strong>R$ ${price}</strong></p>
        </div>
        <button onclick="removeProduct(this)">Remover</button>
    `;

    productList.appendChild(li);
}

// Remover produto
function removeProduct(button) {
    const li = button.parentElement;
    productList.removeChild(li);
}
