import clientPromise from '@/lib/mongodb'; 

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const client = await clientPromise;
            const db = client.db('BancodoCarlos'); 

            // Insira o usuário no MongoDB
            const result = await db.collection('usuarios').insertOne({ email, password });
            return res.status(201).json({ message: 'Usuário cadastrado com sucesso', result });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao cadastrar o usuário' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ message: `Método ${req.method} não permitido` });
    }
}
