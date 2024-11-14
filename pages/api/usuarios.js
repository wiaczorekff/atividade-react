// pages/api/usuarios.js
import { getUsuarios } from "@/service/usuarioService"; 

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const usuarios = await getUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            res.status(500).json({ message: "Erro ao buscar usuários" });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
