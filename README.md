<h3>Olá, caro Visitante!</h3>
<p>Seja bem-vindo ao meu primeiro projeto open-source usando clean archtecture</p>
<hr>
<p>No meu perfil eu me apresento um pouco e lhe convido a me conhecer melhor através das minhas redes sociais como o Linkedin.</p>
<p>Comecei esse projeto como uma iniciativa de estudar e desenvolver minhas habilidades em clean archtecture e TDD, além de aprender a usar o typescript pra valer.</p>
<p>O projeto tem o objetivo de ser open-source então qualquer um pode clona-lo e usa-lo da maneira que preferir.</p>

<h2>Como usar</h2>
<p>De primeira pode parecer um pouco mais complicado do que o normal de aplica-lo, porém, você vera que é bem simples</p>
<h3>1º PASSO</h3>
<p>Antes de começarmos é extramente importante que você organize o ambiente para conseguir usar de maneira eficaz o projeto e para isso será necessario utilizar um sistema de filas Kafka (https://kafka.apache.org/) em um docker na sua maquina/servidor ou se preferir pode utilizar algum serviço on-line. Caso sua ideia seja usar um serviço online eu recomendo utilizar o Upstash (https://upstash.com/).
Além disso seu ambiente deverá estar configurado com o Node ^16.18.1 e o NPM ^8.19.2, caso contrario poderá haver alguns problemas na hora de iniciar a aplicação. 
</p>

<h3>2º PASSO</h3>
<p>Agora vamos para a parte de rodar o projeto, primeiramente faça um clone do repositório e instale todas as dependencias com o NPM.</p>
<p>Após configurado você deve criar um arquivo .env contendo as seguintes variaveis de ambiente:</p>

# CONFIGURAÇÕES DA APLICAÇÃO
- API_HOST
- API_PORT

# SERVIÇO DE E-MAIL DO GOOGLE
- HOST_EMAIL
- HOST_PASSWORD

# KAFKA
- KAFKA_SENDMAIL_URL
- KAFKA_SENDMAIL_USERNAME
- KAFKA_SENDMAIL_PASSWORD
- KAFKA_SENDMAIL_CLIENT_ID
- KAFKA_SENDMAIL_GROUP_ID

<h3>3º PASSO</h3> 
<p>Pronto, se estiver tudo configurado o projeto já está pronto para ser executado</p>

<h3>Minhas ultimas considerações</h3>

<p>Eu claramente não tenho um conhecimento aprofundado nessas tecnologias e por isso estou começando aos poucos</p>
<p>Por se tratar de um projeto open-source eu gostaria de pedir o máximo de contribuições, tanto no código, na arquitetura, ideias para melhorar e até mesmo novas maneiras de design e boas práticas</p>
<p>Vou deixar a baixo alguns links uteis para o desenvolvimento e me coloco a disposição de qualquer um que queira contribuir ou que precise de ajuda!</p>
<p>Agradeço desde já a qualquer pessoa que passou por aqui e let's code</p>

- Nest Github https://github.com/nestjs/nest
- Nest Doc https://nestjs.com/
- Apache Kafka https://kafka.apache.org/
- Video de Kafka com Nest https://www.youtube.com/watch?v=9rIFuUUnmFE&t=2936s
- Upstash https://upstash.com/


## License

Nest is [MIT licensed](LICENSE).
