import "./Pessoa.css";

interface DependentesProps {
  nome: string;
  data_nascimento: Date;
  abono_salarial: number;
}

interface PessoaProps {
  nome_completo: string;
  setor: string;
  data_admissao: Date;
  salario_base: number;
  dependentes?: DependentesProps[];
}

export default function Pessoa({nome_completo, setor, data_admissao, salario_base, dependentes,}: PessoaProps) {
  return (
    <div className="pessoa">
        <div className="nome_completo">{nome_completo}</div>
        <div className="setor">{setor}</div>
        <div className="dados_funcionario">
            <div className="data_admissao">Data de Admissão: {data_admissao.toLocaleDateString()}</div>
            <div className="salario_base">Salário Base: R$ {salario_base}</div>
        </div>
        <div className="dependentes">
            {dependentes?.map((dependente) => (
            <div key={dependente.nome} className="dependente">
                <div className="nome_dependente">Nome: {dependente.nome}</div>
                <div className="data_nascimento">Nascimento: {dependente.data_nascimento.toLocaleDateString()}</div>
                <div className="abono_salarial">Abono: R$ {dependente.abono_salarial}</div>
            </div>
            ))}
        </div>
        <div className="salario_total">
            Salário Total: R$ {salario_base + (dependentes?.reduce((acc, dep) => acc + dep.abono_salarial, 0) || 0)}
        </div>
    </div>

  );
}
