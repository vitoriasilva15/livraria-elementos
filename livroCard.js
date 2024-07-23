

class LivroCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const container = document.createElement('div');
      container.classList.add('livro-card');
  
    
      const imagem = this.getAttribute('imagem');
      const titulo = this.getAttribute('titulo');
      const autor = this.getAttribute('autor');
      const paginas = this.getAttribute('descricao');
      const preco = this.getAttribute('preco');
  
     
      container.innerHTML = `
        <div class="card">
          <img src="${imagem}" alt="${titulo}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">Autor: ${autor} <br>
            ${paginas} <br>
            Valor: ${preco}
            <br>
            </p>
            <a href="carrinho.html" class="btn btn-purple">Adicionar ao Carrinho</a>
          </div>
        </div>
      `;
  
    
      const style = document.createElement('style');
      style.textContent = `
        .livro-card {
          margin: 20px;
          max-width: 320px; /* Aumentado para um tamanho maior */
          display: flex;
          justify-content: center;
        }
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }
        .card:hover {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .card-img-top {
          width: 100%;
          height: auto;
          max-height: 300px; /* Aumentado para fotos maiores */
          object-fit: cover;
        }
        .card-body {
          padding: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .card-title {
          font-size: 1.25rem;
          margin-bottom: 10px;
          color: #333;
        }
        .card-text {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 15px;
        }
        .btn-purple {
          background-color: #6f42c1;
          color: #fff;
          font-size: 1rem;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
          text-align: center;
        }
        .btn-purple:hover {
          background-color: #563d7c;
        }
      `;
  
      this.shadowRoot.append(style, container);
    }
  }
  
  customElements.define('livro-card', LivroCard);
  