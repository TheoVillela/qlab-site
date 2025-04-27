type FormularioContatoProps = {
  onClose: () => void;
};


export function FormularioContato({ onClose }: FormularioContatoProps){
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-950 p-6 rounded-lg relative w-full max-w-md mx-4">
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Fale Conosco!
            </p>
            
            {/* Botão para fechar */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-800"
            >
              ×
            </button>
    
            {/* Conteúdo do popup */}
            <form className="flex flex-col gap-4">
              <input
                placeholder="Seu nome"
                className="border p-2 rounded"
              />
              <input
                placeholder="Seu e-mail"
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Sua mensagem"
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      );
    }