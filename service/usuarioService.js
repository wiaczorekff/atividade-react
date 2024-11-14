// service/usuarioService.js
import clientPromise from "@/lib/mongodb"; // Ajuste o caminho conforme necessário

export const getUsuarios = async () => {
    const client = await clientPromise;
    const db = client.db("BancodoCarlos"); // Substitua pelo nome do seu banco de dados
    const usuarios = await db.collection("usuarios").find({}).toArray(); // Substitua "usuarios" pelo nome da sua coleção
    return usuarios.map(usuario => ({ id: usuario._id.toString(), email: usuario.email })); // Formate os dados conforme necessário
};
