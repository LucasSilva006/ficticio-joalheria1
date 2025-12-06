function mostrarMenu() {
  const navMenu = document.querySelector(".menu-sidebar");
  const overlay = document.querySelector(".overlay-menu");
  navMenu.classList.add("menu-aberto");
  overlay.classList.add("overlay-visivel");
}

function fecharMenu() {
  const navMenu = document.querySelector(".menu-sidebar");
  const overlay = document.querySelector(".overlay-menu");
  navMenu.classList.remove("menu-aberto");
  overlay.classList.remove("overlay-visivel");
}

fetch("javascript/produtos.json")
  .then((res) => res.json())
  .then((produtos) => {
    const lista = document.getElementById("lista-produtos");

    produtos.forEach((produto) => {
      // CORRIGIDO: Remove "../" do começo
      const imgSrc = produto.imagem.replace(/^\.\.\//, "");

      const a = document.createElement("a");
      a.className = "link-produto";
      a.href = `htmls/produto.html?id=${produto.id}`;

      a.innerHTML = `
        <div class="card-produto">
          <img src="${imgSrc}" alt="${produto.nome}" class="imagem-produto" />
          <div class="box-desc-produto">
            <p class="descricao-produto">${produto.descricao}</p>
            <div class="precos-do-item">
              <span class="preco-riscado-produto">${
                produto.precoRiscado || ""
              }</span>
              <span class="preco-produto">${produto.preco || ""}</span>
              <span class="preco-parcelado-produto">${
                produto.precoParcelado || ""
              }</span>
            </div>
          </div>
        </div>
      `;

      lista.appendChild(a);
    });
  })
  .catch((err) => console.error("Erro ao carregar produtos:", err));
