import { PortAngPage } from './app.po';

describe('port-ang App', () => {
  let page: PortAngPage;

  beforeEach(() => {
    page = new PortAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
