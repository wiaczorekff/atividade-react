// app/usuarios/page.js
"use client";

import ListaUsuarios from "@/component/ListaUsuarios";

export default function Usuarios() {
    return (
        <div>
            <h2>Usuários Cadastrados</h2>
            <ListaUsuarios />
        </div>
    );
}
