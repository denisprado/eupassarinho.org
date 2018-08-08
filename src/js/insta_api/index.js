import Search from "./models/Search";
import * as searchView from "./views/searchView";
import {
  elements
} from "./views/base";

/** Instagram CODE: code=2c2a337999114234a4243f99a4f4a845 */

/**
 * {"access_token": "1004315668.d1f16c0.35e1f6c70f9b4227a90b85eee83ee54b", "user": {"id": "1004315668", "username": "jeffvasques_eupassarinho", "profile_picture": "https://scontent.cdninstagram.com/vp/d3a47b0e7b7f5733b3f5f8044ec0b510/5C071C19/t51.2885-19/s150x150/14027408_1806840122868756_1405087013_a.jpg", "full_name": "Jeff Vasques", "bio": "Palha\u00e7o, poeta e passarin...", "website": "http://www.eupassarinho.org/", "is_business": false}}

 * 
 * 
 * https://api.instagram.com/oauth/authorize/?client_id=d1f16c00bcc04e2aadd93a04a670b0df&redirect_uri=http://www.eupassarinho.org/&response_type=code
 * 
 * curl -F 'client_id=d1f16c00bcc04e2aadd93a04a670b0df' \
    -F 'client_secret=6f297c5dd1f24d42a8361628f0886b91' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=http://www.eupassarinho.org/' \
    -F 'code=73b728e974e94e0194410d1a831ddf8d' \
    https://api.instagram.com/oauth/access_token

 */

/** Global state of App //
- Search objetct
*/

const state = {};

const controlList = async () => {
  // 1 retorna a busca realizada na vies
  const count = 12;

  if (count > 0) {
    // Novo objeto de busca
    state.search = new Search(count);

    // Prepara a UI para os resultados

    // BUsca os posts
    await state.search.getResults();

    // Renderizar os resultados na UI
    searchView.renderResults(state.search.result);
  }
};

controlList();