import { RememberMePage } from './app.po';

describe('remember-me App', function() {
  let page: RememberMePage;

  beforeEach(() => {
    page = new RememberMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
