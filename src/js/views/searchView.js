import { elements } from "./base"; // elementos da UI

export const getInput = () => elements.searchInput.value; // retorna o valor inserido no campo de busca//

export const renderPost = post => {
  const markup = `
        <li>
            <a class="results__link" href="#${post.guid.rendered}">
                <figure class="results__fig">
                    <img src="${post.better_featured_image.media_details.sizes
                      .thumbnail.source_url}" alt="${post.title
    .rendered}" class="img-responsive">
                </figure>
                <div class="results__data">
                    <em class="results__name">${post.title.rendered}</em>
                    
                </div>
            </a>
        </li>
    `;
  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};
export const renderResults = posts => {
  posts.forEach(renderPost);
};
