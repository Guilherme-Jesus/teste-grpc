import { useCallback, useEffect, useState } from "react";
import { AreaServiceClient } from "./proto/AreaServiceClientPb";
import { Areas, RequestAll, User } from "./proto/area_pb";
  
function App() {
  const [area, setArea] = useState<Areas>();
  const [error, setError] = useState<string>("");

  // Inicializa o cliente gRPC
  const client = new AreaServiceClient("http://localhost:8080", null, null);

  // Cria a requisição com dados do usuário
  const createUserRequest = () => {
    const user = new User();
    user.setUserid("66b25740-53d9-4d4f-a70b-3461f9a0254b");
    user.setClientid(19);
    user.setEmail("guilherme.henrique@zeusagrotech.com");
    user.setGroupsList(["EMPLOYEE_ADMIN"]);

    const request = new RequestAll();
    request.setUser(user);
    return request;
  };

  // Função para obter áreas
  const getAreas = useCallback(() => {
    const request = createUserRequest();
    const metadata = {
      Authorization: "Bearer YOUR_TOKEN_HERE",
    };

    return new Promise<Areas>((resolve, reject) => {
      client.getAllAreas(request, {}, (err, response) => {
        if (err) {
          reject(err);
          setError(err.message); // Adicionando a mensagem de erro ao estado
        } else {
          resolve(response);
        }
      });
    });
  }, [client]);

  // Efeito para carregar áreas
  useEffect(() => {
    getAreas()
      .then((response) => setArea(response))
      .catch((err) => console.error("Error fetching areas:", err));
  }, [getAreas]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {error && <div>Error: {error}</div>} {/* Exibindo erros */}
        {area && <div>{String(area.getAreasList)}</div>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
