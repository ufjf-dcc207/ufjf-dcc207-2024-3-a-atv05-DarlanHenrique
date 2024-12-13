import './App.css'
import FUNCIONARIOS from './Funcionarios.json'
import Pessoa from './Pessoa'


function App() {
  return (
    <>
      <div className='app'>
        <h1>Lista de Funcionários</h1>
        { FUNCIONARIOS.funcionarios.map((funcionario) => (
          <Pessoa 
            key={funcionario.nome_completo} 
            {...funcionario} 
            data_admissao={new Date(funcionario.data_admissao)} 
            dependentes={funcionario.dependentes.map(dependente => ({
              ...dependente,
              data_nascimento: new Date(dependente.data_nascimento)
            }))}
          />
          ))

        }
        
      </div>
    </>
  )
}

export default App
