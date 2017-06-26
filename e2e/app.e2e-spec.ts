import { NgxOurpalmFormPage } from './app.po';

describe('ngx-ourpalm-form App', () => {
  let page: NgxOurpalmFormPage;

  beforeEach(() => {
    page = new NgxOurpalmFormPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
