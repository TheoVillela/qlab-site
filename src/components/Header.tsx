// components/Header.tsx

export function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-8 bg-white rounded-lg shadow-md">
      {/* Logo e texto */}
      <div className="flex-1">
        <img src="/logo.svg" alt="QLab Logo" className="h-10 mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Transforme sua Qualidade com Inteligência
        </h1>
        <p className="text-gray-600 mb-6">
          Soluções modernas e inteligentes em Quality Assurance para empresas de todos os tamanhos.
        </p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Solicite um orçamento
        </button>
      </div>

      {/* Imagem ilustrativa */}
      <div className="flex-1 hidden md:flex justify-center">
        <img src="/imagemheader.svg" alt="Ilustração de QA" className="max-w-xs" />
      </div>
    </header>
  );
}
