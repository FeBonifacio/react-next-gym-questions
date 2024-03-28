    import { useEffect, useState } from 'react';

    const useLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulação de uma requisição assíncrona para carregar os dados da página
        const timeoutId = setTimeout(() => {
        // Após um tempo de simulação, altera o estado para indicar que os dados foram carregados
        setLoading(false);
        }, 2000); // Tempo de simulação de 2 segundos (substitua pela sua lógica real de carregamento)

        return () => clearTimeout(timeoutId);
    }, []);

    return loading;
    };

    

    export default useLoader;
