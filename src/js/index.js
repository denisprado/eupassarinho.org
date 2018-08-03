import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements } from "./views/base";
/** Global state of App //
- Search objetct
*/

const state = {};

const controlSerach = async () => {
  // 1 retorna a busca realizada na vies
  const query = searchView.getInput();

  if (query) {
    // Novo objeto de busca
    state.search = new Search(query);

    // Prepara a UI para os resultados

    // BUsca os posts
    await state.search.getResults();

    // Renderizar os resultados na UI
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSerach();
});
