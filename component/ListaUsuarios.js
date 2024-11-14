// app/component/ListaUsuarios.js
import React from "react";
import { useConsultaUsuarios } from "@/hooks/useConsultaUsuarios";

const ListaUsuarios = () => {
    const { usuarios, erro } = useConsultaUsuarios();

    if (erro) {
        return <div style={{ color: 'red' }}>Erro: {erro.message}</div>;
    }

    return (
        <ul>
            {usuarios.length > 0 ? (
                usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.email}</li>
                ))
            ) : (
                <li>Nenhum usuário cadastrado.</li>
            )}
        </ul>
    );
};

export default ListaUsuarios;
