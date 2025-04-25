import Image from "next/image";

import { Header } from "@/app/components/Header";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      {/* <section className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">QLab</h1>
        <p className="text-gray-400 leading-relaxed">
          Soluções modernas e inteligentes em Quality Assurance para empresas de todos os tamanhos.
        </p>
      </section> */}
      <Header >

      </Header>

      <section className="mb-12 py-20">
        <h2 className="text-4xl font-bold mb-6">Quem Somos</h2>
        <p className="text-gray-400 leading-relaxed">
          Somos uma equipe apaixonada por qualidade de software, composta por engenheiros experientes e comprometidos.
          Atuamos com clientes globais, entregando serviços de QA de alto impacto com agilidade, transparência e tecnologia de ponta.
        </p>
      </section>

      <section className="mb-12 py-20">
        <h2 className="text-4xl font-bold mb-6">Serviços</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><strong>Consultoria QA:</strong> diagnóstico e plano de ação com ferramentas líderes.</li>
          <li><strong>Automação sob demanda:</strong> testes automatizados com Selenium, Cypress, Playwright e CI/CD.</li>
          <li><strong>QA On Demand:</strong> execução de sprints, testes manuais e regressivos.</li>
          <li><strong>Time dedicado:</strong> profissionais de QA alocados conforme a necessidade do seu projeto.</li>
          <li><strong>Treinamentos personalizados:</strong> capacitação técnica prática e adaptada ao seu time.</li>
        </ul>
      </section>

      <section className="mb-12 py-20">
        <h2 className="text-4xl font-bold mb-6">Tecnologias Utilizadas</h2>
        <p className="text-gray-400 leading-relaxed">
          Trabalhamos com as principais ferramentas do mercado como Cypress, Playwright, Selenium, Appium, JMeter, Postman, Jenkins, GitHub Actions, Docker e muito mais.
        </p>
      </section>

      <section className="mb-12 py-20">
        <h2 className="text-4xl font-bold mb-6">Fale Conosco</h2>
        <form className="grid gap-4 max-w-xl mx-auto">
          <input className="p-3 rounded bg-gray-800 text-white" type="text" placeholder="Seu nome" />
          <input className="p-3 rounded bg-gray-800 text-white" type="email" placeholder="Seu e-mail" />
          <textarea className="p-3 rounded bg-gray-800 text-white" rows={4} placeholder="Sua mensagem"></textarea>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-md transition-all">Enviar</button>
        </form>
      </section>

      <footer className="text-center text-gray-600 text-sm mt-12">
        © {new Date().getFullYear()} QLab. Todos os direitos reservados.
      </footer>
    </main>
  );
}
