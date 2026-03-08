import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

async function testPages() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const screenshotsDir = './screenshots';
  mkdirSync(screenshotsDir, { recursive: true });

  const issues = [];

  try {
    console.log('Testing homepage: http://localhost:3000');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
    
    // Take initial screenshot
    await page.screenshot({ path: join(screenshotsDir, '01-homepage-top.png'), fullPage: false });
    console.log('✓ Screenshot saved: 01-homepage-top.png');

    // Check for console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        issues.push(`Console error on homepage: ${msg.text()}`);
      }
    });

    // Check for page errors
    page.on('pageerror', error => {
      issues.push(`Page error on homepage: ${error.message}`);
    });

    // Scroll down and take screenshots of different sections
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const viewportHeight = 1080;
    const scrollSteps = Math.ceil(scrollHeight / viewportHeight);

    console.log(`Page height: ${scrollHeight}px, taking ${scrollSteps} screenshots`);

    for (let i = 1; i < scrollSteps; i++) {
      await page.evaluate((step) => {
        window.scrollTo(0, step * 1080);
      }, i);
      await page.waitForTimeout(500); // Wait for any animations
      await page.screenshot({ 
        path: join(screenshotsDir, `01-homepage-scroll-${i}.png`), 
        fullPage: false 
      });
      console.log(`✓ Screenshot saved: 01-homepage-scroll-${i}.png`);
    }

    // Take full page screenshot
    await page.screenshot({ path: join(screenshotsDir, '01-homepage-full.png'), fullPage: true });
    console.log('✓ Full page screenshot saved: 01-homepage-full.png');

    // Test event page
    console.log('\nTesting event page: http://localhost:3000/evenements/fete-votive');
    await page.goto('http://localhost:3000/evenements/fete-votive', { waitUntil: 'networkidle', timeout: 30000 });
    await page.screenshot({ path: join(screenshotsDir, '02-event-fete-votive.png'), fullPage: true });
    console.log('✓ Screenshot saved: 02-event-fete-votive.png');

    // Test association page
    console.log('\nTesting association page: http://localhost:3000/association');
    await page.goto('http://localhost:3000/association', { waitUntil: 'networkidle', timeout: 30000 });
    await page.screenshot({ path: join(screenshotsDir, '03-association.png'), fullPage: true });
    console.log('✓ Screenshot saved: 03-association.png');

    // Check for broken images
    console.log('\nChecking for broken images...');
    const brokenImages = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'));
      return images
        .filter(img => !img.complete || img.naturalHeight === 0)
        .map(img => img.src);
    });

    if (brokenImages.length > 0) {
      issues.push(`Broken images found on association page: ${brokenImages.join(', ')}`);
    }

    // Check for layout issues (elements overflowing)
    const overflowIssues = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('*'));
      const issues = [];
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.width > window.innerWidth) {
          issues.push(`Element overflows viewport: ${el.tagName} ${el.className}`);
        }
      });
      return issues.slice(0, 5); // Limit to first 5 issues
    });

    if (overflowIssues.length > 0) {
      issues.push(...overflowIssues);
    }

  } catch (error) {
    issues.push(`Error during testing: ${error.message}`);
    console.error('Error:', error);
  } finally {
    await browser.close();
  }

  // Generate report
  console.log('\n' + '='.repeat(60));
  console.log('TEST REPORT');
  console.log('='.repeat(60));

  if (issues.length === 0) {
    console.log('✓ No visual issues detected!');
  } else {
    console.log(`✗ Found ${issues.length} issue(s):\n`);
    issues.forEach((issue, index) => {
      console.log(`${index + 1}. ${issue}`);
    });
  }

  console.log('\nScreenshots saved in ./screenshots/');
  console.log('='.repeat(60));

  // Save report to file
  const report = {
    timestamp: new Date().toISOString(),
    issues: issues,
    screenshotsTaken: [
      '01-homepage-top.png',
      '01-homepage-full.png',
      '02-event-fete-votive.png',
      '03-association.png'
    ]
  };

  writeFileSync(
    join(screenshotsDir, 'test-report.json'),
    JSON.stringify(report, null, 2)
  );

  return issues.length === 0 ? 0 : 1;
}

testPages()
  .then(exitCode => process.exit(exitCode))
  .catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
