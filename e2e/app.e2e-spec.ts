import { CryptoCurrencyPage } from './app.po';

describe('crypto-currency App', () => {
  let page: CryptoCurrencyPage;

  beforeEach(() => {
    page = new CryptoCurrencyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
