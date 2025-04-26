type HeaderProps = {
  onClose: () => void;
};

export function Header({ onClose }: HeaderProps) {
  return (
    <header className="mb-6 h-20 flex flex-col md:flex-row items-center justify-between p-8 bg-white rounded-lg shadow-md">
      <img src="/svgs/logo.svg" alt="QLab Logo" className="h-10 mb-6" />
      <button className="text-black font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        Serviços
      </button>
      <button className="text-black font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        Tecnologias
      </button>
      
      <button 
          onClick={onClose}
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Solicite um orçamento
        </button>
    </header>
  );
}
