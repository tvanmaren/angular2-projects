import { RecipeShopperPage } from './app.po';

describe('recipe-shopper App', () => {
  let page: RecipeShopperPage;

  beforeEach(() => {
    page = new RecipeShopperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
