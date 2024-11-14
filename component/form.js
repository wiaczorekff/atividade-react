export default function Form({email, setEmail, password, setPassword, handleSubmit,erro}){
return(
    <form onSubmit={handleSubmit}>
            <h2 className="nomeform">Cadastros</h2>
            <label for="Email">Email:</label>
        <input 
            type="email" 
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
           <label for="Senha">Password:</label>
        <input 
            type="password" 
            placeholder="Digite seu senha"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
          />
          
          {erro && <p>{erro}</p>}
          <button type="submit">enviar</button>

    </form>
);
}