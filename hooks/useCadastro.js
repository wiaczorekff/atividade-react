'use client'

import { cadastrarUsuario } from "@/service/cadastroService";
import { useState } from "react"

export function useCadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
        await cadastrarUsuario({ email, password });
        console.log("deu certo");
        window.location.href = '/'
    }
    catch (erro) {
        setErro(erro)
    }
     }
    
    return{
        email,
        setEmail,
        password,
        setPassword,
        erro,
        handleSubmit
    }
}