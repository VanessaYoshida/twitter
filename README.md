# Twitter
Nesse projeto o objetivo foi replicar o Feed de notícias do Twitter.

Link para acessar o site: ![Link Github Pages](https://vanessayoshida.github.io/twitter) 

#Instalação
```node

> npm install
> npm run server

```

#Ferramentas
Esse projeto foi feito em Javascript Vanilla, HTML e Css.
E também foi utilizado o Eslint para encontrar padrões problemáticos ou códigos que não seguem determinadas diretrizes de estilo.

#Funcionalidades
Foi passado para o usuário um limite de 140 letras para digitar, e para isso utilizei um evento para contar a quantidade de letras digitadas. Se a pessoa não digitar nada ou digitar mais de 140 letras, o botão de Twittar é desabilitado, não dando a possibilidade do usuário ultrapassar a quantidade ou não digitar nada. Para cada publicação ele pega a data e horário atual.


# Versão 0.0.1
Criei um formulário que permita inserir um texto e um botão para "twittar".
Adicionei um evento de click ao botão.
No evento, ele obtém o texto.
Adicionei o texto ao HTML.

# Versão 0.0.2
Não pode inserir texto vazio (ele desativa o botão "twittar").
Contei o número de caracteres de forma regressiva.

# Versão 0.0.3
Se você passar os 140 caracteres, desativa o botão.
Se você passar os 120 caracteres, mostra o contador com outra cor.
Se você passar os 130 caracteres, mostra o contador com outra cor.
Se você passar os 140 caracteres, mostra o contador em negativo.

# Versão 0.0.4 - Atual
Ao pressionar enter (/n) ele aumenta a área de texto de acordo com o tamanho do texto.