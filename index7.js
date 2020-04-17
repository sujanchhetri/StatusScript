//automatic login to twitter
const puppeteer = require('puppeteer');
var status = "It's raining outside";

(async () => {
  const browser = await puppeteer.launch({
      headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://twitter.com/');
  await page.waitFor('a[href="/login"]');
  await page.click('a[href="/login"]');
  await page.waitFor(1000);

  await page.waitFor('input[name="session[username_or_email]"]');
  await page.type('input[name="session[username_or_email]"]', 'suJJJan',{delay: 100});
  await page.waitFor(1000);
  await page.type('input[name="session[password]"]', 'Muskan@123',{delay: 100});
  await page.waitFor(500);
  await page.click('#react-root > div > div > div.css-1dbjc4n.r-1pi2tsx.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(8) > div > div');
  await page.waitFor(2000);
  await page.click('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-1pi2tsx.r-13qz1uu.r-417010 > header > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-jw8lkh.r-e7q0ms > a > div');
  await page.waitFor(3000);
  await page.waitFor('div[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]');
  await page.type('div[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]',status,{delay: 100});
  await page.waitFor(2000);
  await page.click('#react-root > div > div > div.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af.r-184en5c > div:nth-child(2) > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-t23y2h.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q > div > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > div > div > div:nth-child(1) > div > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-5f2r5o.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div:nth-child(2) > div > div > div:nth-child(2) > div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1n0xq6e.r-1vuscfd.r-1dhvaqw.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr > div');
  await page.waitFor(2000);
  await page.click('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-1pi2tsx.r-13qz1uu.r-417010 > header > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-d0pm55.r-1bymd8e.r-13qz1uu > nav > a:nth-child(7) > div');
})();
