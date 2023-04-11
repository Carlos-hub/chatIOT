# Back End Socket.io

Este é um projeto de back end que utiliza Socket.io para comunicação em tempo real com o front end.

## Instalação e Uso

1. Acesse a pasta Node no terminal.
2. Instale as dependências com o comando `npm install`.
3. Configure as variáveis de ambiente necessárias no arquivo `.env`. As variáveis utilizadas são:
   - `PORT`: a porta do servidor Express criado.
   - `PORT_SOCKET`: a porta do servidor WebSocket que irá comunicar com o front end.
4. Execute o projeto com o comando `npm start`.

## Eventos

Os eventos emitidos para o front end são:

- `receiveMessage`

Os eventos ouvidos pelo front end são:

- `lista: connection`
- `lista: joinRoom`
- `lista: sendMessage`

Você pode personalizar esses eventos de acordo com as necessidades do seu projeto.

Espero que este arquivo README.md ajude a entender como utilizar este projeto de back end Socket.io. Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato. Obrigado!
