# Test Case: End-to-End Purchase Flow on SauceDemo

## Test ID
SD-E2E-001

## Title
Successful Purchase Flow for Standard User

## Objective
Verify that a standard user can log in, add an item to the cart, complete the checkout process, and see the confirmation page.

## Pre-Conditions
- User has access to a valid browser.
- Internet connection is available.
- `standard_user` credentials are valid.
- Application under test is accessible at [https://www.saucedemo.com](https://www.saucedemo.com)

## Test Steps

| Step | Action |
|------|--------|
| 1    | Navigate to `https://www.saucedemo.com/` |
| 2    | Enter `standard_user` in the username field |
| 3    | Enter `secret_sauce` in the password field |
| 4    | Click the `Login` button |
| 5    | Verify the inventory page loads |
| 6    | Click on the first product (Sauce Labs Backpack) |
| 7    | Click `Add to cart` |
| 8    | Click on the cart icon |
| 9    | Click `Checkout` |
| 10   | Fill out First Name, Last Name, and Zip Code |
| 11   | Click `Continue` |
| 12   | Verify summary page info (item, payment, shipping) is visible |
| 13   | Click `Finish` |
| 14   | Verify confirmation message is displayed |

## Expected Result
- Confirmation container appears with successful checkout message.

## Post-Conditions
- Order is completed.
- User sees confirmation screen.

## Test Data

| Field         | Value           |
|---------------|------------------|
| Username      | `standard_user`  |
| Password      | `secret_sauce`   |
| First Name    | New              |
| Last Name     | User             |
| Postal Code   | 11111            |


