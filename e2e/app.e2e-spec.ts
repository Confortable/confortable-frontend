import { ConfortableFrontendPage } from './app.po';

describe('confortable-frontend App', function() {
  let page: ConfortableFrontendPage;

  beforeEach(() => {
    page = new ConfortableFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
