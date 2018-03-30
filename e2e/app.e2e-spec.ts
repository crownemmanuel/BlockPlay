import { BlockPlayPage } from './app.po';

describe('block-play App', () => {
  let page: BlockPlayPage;

  beforeEach(() => {
    page = new BlockPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
