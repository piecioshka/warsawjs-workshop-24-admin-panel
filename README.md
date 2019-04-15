# warsawjs-workshop-24-admin-panel

[![travis](https://img.shields.io/travis/piecioshka/warsawjs-workshop-24-admin-panel.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/warsawjs-workshop-24-admin-panel)
[![dependencies](https://david-dm.org/piecioshka/warsawjs-workshop-24-admin-panel.svg)](https://github.com/piecioshka/warsawjs-workshop-24-admin-panel)
[![Build Status](https://semaphoreci.com/api/v1/piecioshka/warsawjs-workshop-24-admin-panel/branches/master/badge.svg)](https://semaphoreci.com/piecioshka/warsawjs-workshop-24-admin-panel)

WarsawJS Workshop #24: Projekt panelu administracyjnego

## Event in social media

* <https://www.facebook.com/events/1865649110402869/>
    + `WarsawJS Workshop #24 - Testowanie kodu 3/3: Testy integracyjne`

## Wykorzystywane narzędzia

* <https://webpack.js.org/>
* <https://jestjs.io/>
* <https://babeljs.io>
* <https://eslint.org>
* <https://json-schema-faker.js.org/>
* <https://github.com/DavidAnson/markdownlint>
* <https://github.com/typicode/json-server>

## Krok po kroku 👣

### Baza danych

1. Zainstalować `npm/json-server`
2. Wejść na generator `JSON Schema faker`
3. Wygenerować dane za pomocą schemy:
    + <https://gist.github.com/piecioshka/b071e2d53a1115527ab5a5b21765bed3>
4. Zbudować polecenia: `npm run start:back-end`,
5. Uruchomić serwer aplikacyjno-bazodanowy

### :arrow_right: Aplikacja

1. Wygenerowanie konfiguracji dla `Jest`-a

    ```bash
    npx jest --init
    ```

2. Integracja z `Babel.js`

    ```bash
    npm i -D @babel/core @babel/plugin-proposal-class-properties \
        @babel/plugin-transform-runtime @babel/preset-env \
        @babel/runtime babel-core@^7.0.0-bridge.0 \
        babel-eslint babel-jest \
        babel-loader eslint eslint-config-piecioshka \
        jest-cli jsdom json-server node-fetch regenerator-runtime \
        webpack webpack-cli
    ```

3. Stworzyć plik `.babelrc` o zawartości:

    ```json
    {
        "presets": [
            "@babel/preset-env"
        ],
        "plugins": [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime"
        ]
    }

    ```

4. Napisać test, który będzie weryfikować serwis do pobierania danych z serwera
5. Napisać wcześniej wspomniany serwis

### :star: Continuous Integration

* Zalogować sie do Semaphore CI za pomocą GitHuba
* Skonfigurować projekt
* Dodać badge do `README.md` projektu

### :arrow_right: Aplikacja, część 2

* Napisać test, który będzie weryfikować komponent do prezentcji
    + Zamockować DOM za pomocą `npm/jsdom`, przykład:

        ```js
        import { JSDOM } from 'jsdom';

        beforeAll(() => {
            global.window = new JSDOM().window;
            global.document = window.document;
        });

        afterAll(() => {
            global.window = null;
            global.document = null;
        });
        ```

* Napisać wcześniej wspomniany komponent
* Stworzyć stronę DEMO, gdzie osadzić uprzednio stworzony komponent
    + Stowrzyć plik `front-end/main.js`, który połączy wszystkie 3 moduły
    + Wykorzystać `Webpacka` do zbudowania pliku `dist/bundle.js`

### :star: Konfiguracja Webpacka

* Zbudować polecenie: `start:front-end`

    ```text
    "webpack -w front-end/scripts/main.js -o front-end/dist/bundle.js --mode development",
    ```

* Dodać plik z konfiguracją Webpacka:

    ```js
    module.exports = {
        module: {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
                { test: /\.json$/, exclude: /node_modules/, loader: "json-loader" }
            ]
        }
    }
    ```

### :arrow_right: Aplikacja, cześć 3

* Napisać test, który będzie weryfikować model
* Napisać wcześniej wspomniany model
* Napisać testy do weryfikujące, czy:
    + model komunikuje się z komponentem
    + komponent komunikuje się z serwisem
    + serwis umożliwia stworzenie listy modeli

---

## Problemy do rozwiązania

* Usunięcie parametryzacji funkcji utilsowych
* Agregacja funkcji utilsowych to jednego pliku
* Zabicie na sztywno
* Skopiowanie funkcji utilsowych kilka razy w jednym pliku + zmienić ich nazwę

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
