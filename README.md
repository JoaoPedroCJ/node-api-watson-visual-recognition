# API de conexão com Watson Visual Recognition

Criado para o Projeto Interdiciplinar 2020-1 - 5º Semestre

# Pré requisitos

- Git (https://git-scm.com/)
- Node (https://nodejs.org)
- NPM (https://www.npmjs.com/)

# Instalação

## Start

Primeiro você precisa instalar o [Node.js](https://nodejs.org/en/) no seu pc e seguir o procedimento padrão de instalação **next->next->ok**, recomendo você baixar o [Git](https://git-scm.com/downloads) e instalar na sua maquina, depois basta copiar a URL do projeto conforme abaixo:

## Clonando o Repositório
Com o Git e o Node.js instalado na sua maquina e a **URL** do projeto em mãos, cria em algum lugar do seu pc uma pasta para criarmos uma copia do repositório, dentro dela abra o **cmd** , **powershell**, **bash**, etc, e digite os comandos abaixo:
```
git clone https://github.com/JoaoPedroCJ/node-api-watson-visual-recognition.git
cd video-maker
npm install
```

## Api: Watson
Você precisa criar também as credenciais do *Watson* no site da [IBM](https://cloud.ibm.com/login), também não tem segredo, basta se cadastrar.

![IBM](http://cdn.nerdvana.com.br/github/ibm1.jpg)

 Quando estiver logado no menu superior clique em **Catálogo**, depois dentro de **AI / Machine Learning** procure por *Visual Recognition*

 ![IBM](http://cdn.nerdvana.com.br/github/ibm2.jpg)

clicando nele na nova página vai aparece um botão "criar" no final da página, uma vez que o serviço for criado, você será redirecionado para a página de gerenciamento do serviço que você acabou de criar, no menu lateral esquerdo procure por **Credenciais de Serviços** e depois clique em **Auto-generated service credentials** destacado abaixo, então copie as *Credenciais*:

![IBM](http://cdn.nerdvana.com.br/github/ibm3.png)

Novamente, voltando na pasta do projeto ainda dentro da pasta **api\src\config** você ira criar um novo arquivo de texto com o nome `watson-vr.js` e dentro desse arquivo você vai colar as credenciais que copiou anteriormente:
``` js
{
  "apikey": "...",
  "iam_apikey_description": "...",
  "iam_apikey_name": "...",
  "iam_role_crn": "...",
  "iam_serviceid_crn": "...",
  "url": "..."
}
```

### 1.., 2..., 3... Testando!
Agora dentro da pasta **api** você pode abrir o **cmd** , **powershell**, **bash**, etc, e executar o comando:
```
npm install
node src/index.js
```

![IBM](http://cdn.nerdvana.com.br/github/powershell.gif)