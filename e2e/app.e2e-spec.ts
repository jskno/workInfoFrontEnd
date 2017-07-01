import { WorkInfoFrontEndPage } from './app.po';

describe('work-info-front-end App', () => {
  let page: WorkInfoFrontEndPage;

  beforeEach(() => {
    page = new WorkInfoFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
