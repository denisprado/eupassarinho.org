import { elements } from "./base"; // elementos da UI

export const renderPost = post => {
  const markup = `
            <div class="card">
                <a class="results__link card-img" target="_blank" href="${post.link}">
                    <figure class="results__fig">
                        <img src="${post.images.standard_resolution.url}" title="${post.caption.text}" alt="${post.caption.text}" class="img-responsive">
                    </figure>
                </a>
                <div class="card-body">
                    <p class="results__caption">${(post.caption.text).substring(0,(((post.caption.text).substring(0, 144)).lastIndexOf(" "))) } (...) <a class="results__link" target="_blank" href="${post.link}">Leia tudo</a></p>
                </div>
            </div>
    `;
  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};
export const renderResults = posts => {
  posts.forEach(renderPost);
};
