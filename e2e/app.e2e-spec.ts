import { BillyourselfPage } from './app.po';

describe('bill-yourself App', () => {
  let page: billyourselfPage;

  beforeEach(() => {
    page = new billyourselfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
