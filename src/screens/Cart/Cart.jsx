import React from 'react';
import './Cart.css';

class CarrinhoDeCompra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: JSON.parse(localStorage.getItem("cart")) || [] // carregar com os produtos selecionados
    };
  }

  adicionarProduto = (produto) => {
    // Verifica se o produto já está no carrinho
    const produtoExistente = this.state.produtos.find(p => p.id === produto.id);
    if (produtoExistente) {
      // Atualiza a quantidade do produto existente
      const produtosAtualizados = this.state.produtos.map(p => {
        if (p.id === produto.id) {
          p.quantidade += 1;
        }
        return p;
      });
      this.setState({ produtos: produtosAtualizados });
    }
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(this.state.produtos));
  }

  removerProduto = (produto) => {
    const { produtos } = this.state;

    const produtoExistente = produtos.find(p => p.id === produto.id);
    if (produtoExistente) {
      if (produtoExistente.quantidade === 1) {
        const produtosAtualizados = produtos.filter(p => p.id !== produto.id);
        this.setState({ produtos: produtosAtualizados }, () => {
          localStorage.setItem('cart', JSON.stringify(produtosAtualizados));
        });
      } else {
        const produtosAtualizados = produtos.map(p => {
          if (p.id === produto.id) {
            return { ...p, quantidade: p.quantidade - 1 };
          }
          return p;
        });
        this.setState({ produtos: produtosAtualizados }, () => {
          localStorage.setItem('cart', JSON.stringify(produtosAtualizados));
        });
      }
    }
    console.log(this.state.produtos);
  }

  confirmarCompra = () => {
    window.location.href = "/paymentForm";
    // Lógica para confirmar a compra
    //this.props.history.push('/endereco');
  }
  render() {
    const { produtos } = this.state;

    return (
      <div className='container'>
        <h2>Carrinho de Compras</h2>
        {produtos.length === 0 ? (
          <p>Nenhum produto adicionado ao carrinho.</p>
        ) : (
            <div>
                <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                    {produto.nome} - R${produto.preco.toFixed(2)} - Quantidade: {produto.quantidade}
                    <button onClick={() => this.adicionarProduto(produto)}>+</button>
                    <button onClick={() => this.removerProduto(produto)}>Remover</button>
                    </li>
                ))}
                </ul>
                <button onClick={this.confirmarCompra}>Confirmar Compra</button>
            </div>
        )}
      </div>
    );
  }
}

export default CarrinhoDeCompra;