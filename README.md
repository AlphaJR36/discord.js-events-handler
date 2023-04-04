# Handler de Eventos de Discord

Este é um modelo básico de uma handler de eventos de Discord, utilizando a biblioteca discord.js. Handlers são uma forma organizada de lidar com eventos em aplicações Discord.js, e podem ser facilmente expandidos para lidar com diferentes tipos de eventos.

## Pré-requisitos

Antes de começar a utilizar este modelo, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina. Você também precisará de um token válido de bot do Discord, que pode ser obtido no [Discord Developer Portal](https://discord.com/developers/applications).

## Instalação

1. Faça o clone deste repositório: `git clone https://github.com/AlphaJR36/discord.js-events-handler`
2. Instale as dependências: `npm install`
3. Configure o arquivo `.env` com o seu token de bot: `TOKEN="YOUR BOT'S TOKEN"`
4. Configure o arquivo `.env` com o seu id do bot: `CLIENT_ID="YOUR BOT ID"`
5. Baixe os arquivos necessários usando: `npm install`
6. Inicie o projeto usando: `node .` ou `node index.js`

## Utilização

Este modelo possui uma estrutura básica para lidar com eventos de Discord. O arquivo `index.js` é o ponto de entrada da aplicação, e é responsável por carregar a estrutura do bot.

Os eventos são definidos na pasta `events`, e devem seguir o seguinte formato:

```javascript
module.exports = {
    name: "NOME DO EVENTO", // Coloque o nome do evento.

    run: async () => { // Coloque as "requisições", exemplo: interaction.


    }
}
```

Para adicionar um novo evento, basta criar um novo arquivo na pasta `events`, seguindo o formato acima. O nome do arquivo deve ser o mesmo que o campo `name` do objeto exportado.

## Contribuição

Se você deseja contribuir para este modelo, sinta-se à vontade para abrir uma issue ou um pull request. Qualquer contribuição é bem-vinda!

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE.md para obter mais informações.