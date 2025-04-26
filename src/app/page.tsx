"use client";

import { Header } from "@/components/Header";
import { FormularioContato } from "@/components/FormularioContato";
import { createCards, Cards } from "@/components/Cards";
import { ReadMoreOption } from "@/components/ReadMoreOption";

import { useState } from "react";

export default function Home() {
  const [isFormularioContatoOpen, setIsFormularioContatoOpen] = useState(false);
  const [isServicoOpen, setIsServicoOpen] = useState(false);
  const [isTecnologiasOpen, setIsTecnologiasOpen] = useState(false);
  
  const mostrarServicoModal = () => {
    return(
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-950 p-6 rounded-lg relative w-full max-w-md mx-4">
          
          {/* Botão para fechar */}
          <button
              onClick={() => setIsServicoOpen(false)}
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-800"
            >
              ×
          </button>

          <form className="flex flex-col gap-4">
            <h2 className="flex flex-col gap-4 text-4xl font-bold mb-6">Serviços</h2>
            <ul className="p-2 roundedflex flex-col gap-4 list-disc pl-6 text-gray-300 space-y-2">
              <li><strong>Consultoria QA:</strong> diagnóstico e plano de ação com ferramentas líderes.</li>
              <li><strong>Automação sob demanda:</strong> testes automatizados com Selenium, Cypress, Playwright e CI/CD.</li>
              <li><strong>QA On Demand:</strong> execução de sprints, testes manuais e regressivos.</li>
              <li><strong>Time dedicado:</strong> profissionais de QA alocados conforme a necessidade do seu projeto.</li>
              <li><strong>Treinamentos personalizados:</strong> capacitação técnica prática e adaptada ao seu time.</li>
            </ul>
          </form>
          </div>
        </div>
    )
  }

  const mostrarTecnologiaModal = () => {
    return(
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-950 p-6 rounded-lg relative w-full max-w-md mx-4">
          
            {/* Botão para fechar */}
            <button
              onClick={() => setIsTecnologiasOpen(false)}
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-800"
            >
              ×
            </button>
    
            {/* Conteúdo do popup */}
            <form className="flex flex-col gap-4">
              <section className="mb-12 py-20">
                <h2 className="text-4xl font-bold mb-6">Tecnologias Utilizadas</h2>
                <p className="text-gray-400 leading-relaxed">
                  Trabalhamos com as principais ferramentas do mercado como Cypress, Playwright, Selenium, Appium, JMeter, Postman, Jenkins, GitHub Actions, Docker e muito mais.
                </p>  
              </section>
            </form>

          </div>
        </div>
    )
  }

  const mostrarFormularioContatoModal = () => {

    return(
      <FormularioContato onClose={() => setIsFormularioContatoOpen(false)}>

      </FormularioContato>
    )
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">  
      <Header 
        orcamentoOnClick={() => setIsFormularioContatoOpen(true)}
        serviceOnClick={() => setIsServicoOpen(true)}
        tecnologiasOnClick={() => setIsTecnologiasOpen(true)}
      > 

      </Header>
      
      <div className="mb-15">
        <h1 className="text-4xl font-bold text-white mb-4">
          Transforme sua Qualidade com Inteligência
        </h1>
        <p className="text-white mb-6">
          Soluções modernas e inteligentes em Quality Assurance para empresas de todos os tamanhos.
        </p>
        <button 
          onClick={() => setIsFormularioContatoOpen(true)}
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Solicite um orçamento
        </button>

        {/* Imagem ilustrativa */}
        <div className="flex-1 hidden md:flex justify-center">        
          <img src="/imagemheader.png" alt="Ilustração de QA" className="max-w-xs" />
        </div>
      </div>                       

      <div className="lex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 text-center">Quem Somos</h2>
        <p className="text-gray-400 leading-relaxed mb-6 text-center">
          Somos uma equipe apaixonada por qualidade de software, composta por engenheiros experientes e comprometidos.<br />
          Atuamos com clientes globais, entregando serviços de QA de alto impacto com agilidade, transparência e tecnologia de ponta.
        </p>
        <div className="grid grid-cols-3 gap-4 items-center justify-center">
          {createCards({ title: 'Testes Automatizados', image:'/svgs/testAut.png', readMore: ReadMoreOption })}
          {createCards({ title: 'Estratégia de QA', image:'/svgs/estrategia.png', readMore: ReadMoreOption })}
          {createCards({ title: 'Consultoria', image:'/svgs/consultoria.png', readMore: ReadMoreOption })}
        </div>
      </div>


      {isFormularioContatoOpen && (
          mostrarFormularioContatoModal()
      )}
      
      {isServicoOpen && (
        mostrarServicoModal()
      )}
            
      {isTecnologiasOpen && (
        mostrarTecnologiaModal()
      )}

      <footer className="text-center text-gray-600 text-sm mt-12">
        © {new Date().getFullYear()} QLab. Todos os direitos reservados.
      </footer>
    </main>
  );
}
