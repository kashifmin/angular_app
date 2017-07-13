import { CarmaalishPage } from './app.po';

describe('carmaalish App', () => {
  let page: CarmaalishPage;

  beforeEach(() => {
    page = new CarmaalishPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
