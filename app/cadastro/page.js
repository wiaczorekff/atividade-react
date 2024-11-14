// app/cadastro/page.js
"use client";

import Form from "@/component/form";
import { useCadastro } from "@/hooks/useCadastro";
import '../css/Cadastro.css';


export default function Cadastro() {
    const { email, setEmail, password, setPassword, erro, handleSubmit } = useCadastro();

    return (
        
        <div className="body-cadastro">
           
            {erro && <p style={{ color: 'red' }}>{erro.message || String(erro)}</p>}
            
            <Form
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}
