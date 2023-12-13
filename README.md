# car_rental_uk

<b>Website for renting a car: <a href="https://tanyapavliuk.github.io/car_rental_uk">link</a></b>

<b>author: <a href="https://github.com/Tanyapavliuk" target='_blank'>Tanyapavliuk</a></b>

> "Any fool can write code that a computer can understand. Good programmers
> write code that humans can understand." - Martin Fowler

## 📃Technologies

- <a href="https://reactjs.org/" target="_blank">![React][React.js]</a>
- <a href="https://tailwindcss.com/" target="_blank">![Tailwind CSS][TailwindCSS.js]</a>
- <a href="https://axios-http.com/ru/" target="_blank">![Axios][Axios.js]</a>
- <a href="https://formik.org/" target="_blank">![Formik][Formik.js]</a>
- <a href="https://vitejs.dev/" target="_blank">![Vite][Vite.js]</a>

## 🥁 Getting started

1. Clone repo

```bash
https://github.com/Tanyapavliuk/car_rental_uk
```

1. Recommended for use **npm** - `npm i` or `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`.

## Project structure

```
├── src
    ├── assets
        ├── fonts
        ├── images
    ├── components
        ├── Header.jsx
        ├── CustomSelect.jsx
        ├── CatalogList.jsx
    ├── data
        ├──makes.json
        ├──price.json
    ├── helpers
        ├──fetchCars.js
    ├── redux
        ├── carsSlice.js
        ├── store.js
    ├── screen
        ├──Home.jsx
        ├── Catalog.jsx
    ├── ui
        ├──SubItem.jsx
        ├──index.js
├──App.jsx
├──index.css
├──main.jsx

```

## 📚 Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API.

- ### CustomSelect

| Prop       | Default  | Description                                       |
| ---------- | -------- | ------------------------------------------------- |
| `label`    | `string` | any text content                                  |
| `data`     | `array`  | information that will be displayed in the options |
| `height`   | `string` | the height of the block where it is placed select |
| `weight`   | `string` | the weight of the block where it is placed select |
| `value`    | `string` | required, value for select                        |
| `setValue` | `func`   | required, function to change the value            |
| `type`     | `string` | required, "brand" or "price"                      |

- ### CustomSelectContent

| Prop               | Default | Description                                           |
| ------------------ | ------- | ----------------------------------------------------- |
| `data`             | `array` | information that will be displayed in the options     |
| `setValue`         | `func`  | required, function to change the value                |
| `setHiddenOptions` | `func`  | function to change the visibility of the option block |

<!-- LINKS  -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[TailwindCSS.js]: https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=FFF
[Axios.js]: https://img.shields.io/badge/Axios-FFF?style=for-the-badge&logo=axios&logoColor=5A29E4
[Formik.js]: https://img.shields.io/badge/Formik-172B4D?style=for-the-badge
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=646CFF&labelColor=FFF&color=FFF
