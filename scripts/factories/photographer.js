// function photographerFactory(data) {
//     const { name, portrait, city, country, tagline, price } = data;

//     const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

//     function textElement(tag, textContent, options) {
//         const elem = document.createElement(tag);
//         elem.textContent = textContent;
//         if (options?.classList) {
//             if (Array.isArray(options.classList)) {
//                 options.classList.forEach((cls) => elem.classList.add(cls));
//             } else {
//                 elem.classList.add(options.classList);
//             }
//         }
//         return elem;
//     }

//     function getUserCardDOM() {
//         const article = document.createElement('article');

//         const img = document.createElement('img');
//         img.setAttribute("src", picture)

//         const h2 = textElement('h2', name);
//         const pLocation = textElement('p', `${city}, ${country}`);
//         const h3 = textElement('h3', tagline);
//         const pPrice = textElement('p', `${price}€/jour`, { classList: "price" });

//         article.appendChild(img);
//         article.appendChild(h2);
//         article.appendChild(pLocation);
//         article.appendChild(h3);
//         article.appendChild(pPrice);

//         return (article);
//     }
//     return { name, picture, getUserCardDOM }
// }
