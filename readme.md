# 🟢 Iniciando com Node.js

### Questão 1. De acordo com a aula, como habilitamos o uso de importações utilizando o ESModules?
Adicionando no arquivo "package.json" a propriedade "type" com o valor de "module". Ex. "type":"module"

### Questão 2. O prefixo "node:" na importação de um módulo serve para informar que esse modulo é interno do Node.js.
Verdadeiro

### Questão 3. Para que serve o módulo "http" do Node.js?
Para criar e lidar com as requisições HTTP em uma porta específica

### Questão 4. Sobre o parâmetro "request", é possivel afirmar que: Através desse objeto é possível obter todas as informações presente na requisição, como dados enviados em JSON, parâmetros de rota nomeados e não nomeados, entre outros.
Verdadeiro

</br>

---

# 🟢 Estrutura da aplicação

### Questão 1. Marque a alternativa correta sobre rotas HTTP.
São portas de entradas para executar diferentes ações na aplicação

### Questão 2. é correto afirma sobre métodos HTTP: São responsáveis por indicar a ação a ser executada para um dado recurso (rota).
Verdadeiro

### Questão 3. Sobre os 5 métodos HTTP mais comuns (GET, POST, PUT, PATCH e DELETE), marque a alternativa correta:
[ x ] O método GET é utilizado para buscar dados.

### Questão 4. Qual é o método de requisição HTTP usado para enviar dados afim  de criar um recurso na aplicação?
POST

### Questão 5. Qual a resposta que melhor define os Headers em uma requisição HTTP?
Metadados da requisição HTTP que podem incluir informações adicionais da requisição e resposta

### Questão 6. Qual é o Header(Cabeçalho) HTTP usado para especificar o tipo de conteúdo da resposta?
Content-Type

### Questão 7. Qual o código de status HTTP comum usado para indicar que uma solicitação foi bem sucedida?
Código 200

### Questão 8. Qual o código de status HTTP usado para indicar que o servidor não pode encontrar o recurso solicitado?
Código 404

</br>

---

# 🟢 Streams no Node.js

### Questão 1. O que são Streams?
Mecanismo para ler e escrever dados de forma assíncrona, controlada e em partes.

### Questão 2. O que o método ```.pipe``` faz quando é chamado em uma Stream?
Encaminha os dados provindos de uma stream para outra

### Questão 3. O que são Buffers no Node.js?
Estrutura de dados que representa informações binárias

### Questão 4. Qual o método usado para criar um Buffer a partir de uma string no Node.js?
Buffer.from()

### Questão 5. O que são Chunks em Streams no Node.js?
Pedaços de dados que são lidos e escritos em uma stream de forma assíncrona

### Questão 6. O que são middlewares?
Funções que interceptam e manipulam a requisição e a resposta de uma rota

### Questão 7. É possível definir middlewares globais (que são executados em TODAS rotas da aplicação)?
Sim

</br>

---