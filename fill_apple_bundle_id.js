async (page) => {
  // Check current URL and content
  console.log('Current URL:', page.url());
  const title = await page.title();
  console.log('Current Title:', title);
  
  // Fill Description if field exists
  const descInput = page.locator('input[aria-label*="Description"], input[placeholder*="Description"], input[name*="description"]');
  if (await descInput.count() > 0) {
    await descInput.first().fill('flutter_kickstart_app');
    console.log('Filled Description: flutter_kickstart_app');
  }

  // Fill Bundle ID
  const bundleInput = page.locator('input[aria-label*="Bundle ID"], input[placeholder*="Bundle ID"], input[name*="identifier"]');
  if (await bundleInput.count() > 0) {
    await bundleInput.first().fill('pro.kanetech.flutter_kickstart_app');
    console.log('Filled Bundle ID: pro.kanetech.flutter_kickstart_app');
  }

  return { url: page.url(), title };
}
