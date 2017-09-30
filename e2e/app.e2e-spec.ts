import { RunJournalPage } from './app.po';

describe('run-journal App', () => {
  let page: RunJournalPage;

  beforeEach(() => {
    page = new RunJournalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
