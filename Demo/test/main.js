describe('login', () => {
    beforeAll(() => {
        browser.url('http://google.com');
    });
    afterAll(() => {
        browser.pause(10000).end();
        //browser.close();
    });
    it('should expand browser', () => {
        browser.windowHandleMaximize();
    });
});
