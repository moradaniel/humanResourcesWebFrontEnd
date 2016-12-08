import { HumanResourcesPage } from './app.po';

describe('human-resources-frontend App', function() {
  let page: HumanResourcesPage;

  beforeEach(() => {
    page = new HumanResourcesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Planets works!');
  });
});
