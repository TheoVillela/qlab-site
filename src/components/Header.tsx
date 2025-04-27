type HeaderProps = {
  orcamentoOnClick: () => void;
  serviceOnClick: () => void;
  tecnologiasOnClick: () => void;
};

export function Header({ orcamentoOnClick, serviceOnClick, tecnologiasOnClick }: HeaderProps) {
  return (
    <header className="mb-6 h-20 flex flex-col md:flex-row items-center justify-between p-2 bg-white rounded-lg shadow-md">
      <img src="/svgs/logo.svg" alt="QLab Logo" className="h-10" />
      
      <div >
        <button 
          onClick={serviceOnClick}
          className="text-black font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Serviços
        </button>
        
        <button 
          onClick={tecnologiasOnClick}
          className="text-black font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Tecnologias
        </button>
      </div>
        
      <button 
        onClick={orcamentoOnClick}
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        Solicite um orçamento
      </button>
      
    </header>
  );
}
