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
          return { ...p, quantidade: p.quantidade + 1 };
        }
        return p;
      });
      this.setState({ produtos: produtosAtualizados });
    } else {
      // Adiciona o novo produto ao carrinho
      const novoProduto = { ...produto, quantidade: 1 };
      this.setState({ produtos: [...this.state.produtos, novoProduto] });
    }
  }

  removerProduto = (produto) => {
    // Verifica se o produto já está no carrinho
    const produtoExistente = this.state.produtos.find(p => p.id === produto.id);
    if (produtoExistente) {
      // Verifica a quantidade do produto existente
      if (produtoExistente.quantidade === 1) {
        // Remove o produto do carrinho se a quantidade for 1
        const produtosAtualizados = this.state.produtos.filter(p => p.id !== produto.id);
        this.setState({ produtos: produtosAtualizados });
      } else {
        // Atualiza a quantidade do produto existente
        const produtosAtualizados = this.state.produtos.map(p => {
          if (p.id === produto.id) {
            return { ...p, quantidade: p.quantidade - 1 };
          }
          return p;
        });
        this.setState({ produtos: produtosAtualizados });
      }
    }
  }

  confirmarCompra = () => {
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
                    <button onClick={() => this.adicionarProduto(produto)}>Adicionar</button>
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