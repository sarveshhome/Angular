import { Angular4test2Page } from './app.po';

describe('angular4test2 App', () => {
  let page: Angular4test2Page;

  beforeEach(() => {
    page = new Angular4test2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
