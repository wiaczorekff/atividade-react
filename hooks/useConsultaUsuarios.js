// app/hooks/useConsultaUsuarios.js
import { useState, useEffect } from "react";
import { consultarUsuarios } from "@/service/cadastroService"; // ajuste o caminho conforme necessário

export function useConsultaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const dados = await consultarUsuarios();
                setUsuarios(dados);
            } catch (erro) {
                setErro(erro);
            }
        };

        fetchUsuarios();
    }, []);

    return { usuarios, erro };
}
