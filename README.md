# curso_ebac_frontend
Cusro EBAC frontend
- Exercício less

# aula 17.1

npm install -g less
npm install --save-dev less
npm install -g less-watch-compiler
npm install --save-dev less-watch-compiler

scripts less: (less-watch-compiler ou lessc) ./src/styles ./build/styles main.less

# aula 17.2
flatuicolors.com

// arqiuivo variaveis.less
@nomeDaVariavel: 'asdf'

// arquivo main.less
@import 'variaveis.less'
body {
    background-color: @nomeDaVariavel;
}

# aula 17.3

@breakingPointMobile: ~"(max-width: 767px)";

.container {
    max-width: 960px;
    width: 100%:
    margin: 0 auto;

    @media @breakingPoingMobile  {
        max-width: 70%;
    }
}

# aula 17.4

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

header {
    padding: 24px;

    .profile-avatar {
        display: block;
        margin: 0 auto;
        border-radius: 50%;
    }
}

.profile-bio {
    text-align: center;

    &-name {
        font-size: 16px;
        .marginBottom8();
    }
}

// mixin
.marginBottom8 {
    margin-bottom: 8px;
}

# auto 17.5
feathericons.com

li {
    list-style: none;

    img {
        transition: all ease .3s;
        &:hover {
            transform: scale(1.3);
        }
    }
}

// arquivo mapas.less

#colors() {

    backgroundColor: #111;
    buttonColor: #111;
    textColor: #111;

}

// arquivo main.css

@import "mapas.less";

body {
    backgorund-color: #colors[backgroundColor];
}

.projects-list {
    margin-top: 32px;

    &-item {
        a {
            text-decoration: none;
            background-color: #colors[buttonColor];
            display: block;
            padding: 16px 20px;
            margin-bottom: 16px;
            text-align: center
            color: #colors[textColor];
            font-weight: bold;
            border-radius: 30px;
            border: 2px solid #colors[buttonColor];
            transition: all ease .5s;

            &-hover {
                color: #colors[buttonColor];
                background-color: transparent;
            }
        }
    }
}

.container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
