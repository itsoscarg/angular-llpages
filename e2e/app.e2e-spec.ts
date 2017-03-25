import { AngularLlpagesPage } from './app.po';

describe('angular-llpages App', () => {
  let page: AngularLlpagesPage;

  beforeEach(() => {
    page = new AngularLlpagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
