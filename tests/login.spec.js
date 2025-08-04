import { test, expect } from '@playwright/test';

test('E2E Purchase Flow on SauceDemo', async ({ page }) => {
  await page.pause();
  // Visit login page
  await page.goto('https://www.saucedemo.com/');

  // --- Login ---
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // --- Inventory Page ---
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

  // Click on a product
  await page.locator('[data-test="item-4-img-link"]').click();

  // Add to cart
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();

  // --- Cart Page ---
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="cart-list"]')).toBeVisible();
  await page.locator('[data-test="checkout"]').click();

  // --- Checkout: Step One ---
  await page.locator('[data-test="firstName"]').fill('New');
  await page.locator('[data-test="lastName"]').fill('User');
  await page.locator('[data-test="postalCode"]').fill('11111');
  await page.locator('[data-test="continue"]').click();

  // --- Checkout: Step Two (Summary Page) ---
  await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
  await expect(page.getByText('Sauce Labs Backpackcarry.')).toBeVisible();
  await expect(page.locator('[data-test="payment-info-label"]')).toBeVisible();
  await expect(page.locator('[data-test="shipping-info-label"]')).toBeVisible();
  await expect(page.locator('[data-test="total-info-label"]')).toBeVisible();
  await expect(page.locator('[data-test="total-label"]')).toBeVisible();

  // Finish order
  await page.locator('[data-test="finish"]').click();

  // --- Confirmation ---
  await expect(page.locator('[data-test="checkout-complete-container"]')).toBeVisible();
});
