# 🧪 Playwright E2E Test - SauceDemo

This project uses **Playwright** to automate an end-to-end purchase flow on [SauceDemo.com](https://www.saucedemo.com/), a site commonly used for QA practice.

---

## 📋 Test Summary

**Scenario:**  
A standard user logs in, selects a product, adds it to the cart, checks out, and receives an order confirmation.

**Tech Stack:**  
Node.js

Playwright

JavaScript (ES Modules)

VS Code


---

## 📁 Folder Structure
```
├── tests/
│ └── saucedemo-e2e.spec.ts
├── screenshots/
│ ├── intital.png
│ ├── inventory.png
│ ├── view-product.png
│ ├── view-cart.png
│ ├── checkout.png
│ ├── checkout-overview.png
│ └── checkout_confirmation.png
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
├── LICENSE
├── README.md
└── TEST_CASE.md
```

---

🚀 How to Run This Test Locally

> 🛠️ This requires [Node.js](https://nodejs.org) and [Playwright](https://playwright.dev/) to be installed.
    [Watch Video and follow along :)](coming soon)

1. Clone the Repository
```
bash
git clone https://github.com/your-username/saucedemo-playwright-tests.git
cd saucedemo-playwright-tests
```

2. Install Dependencies
```
bash
npm install
```

3. Install Playwright Browsers
```
bash
npx playwright install
```

4. Run the Tests
```
bash
npx playwright test 
```

4. Run Test File (with browser visible)
```
bash
npx playwright test --headed
```


---

🎥 Setup Help (Optional Videos)
Want to follow along with setup? These step-by-step videos will guide you:

[Watch Node.js installation](https://komododecks.com/recordings/RD35WG7HTNVV8HIiV32a?onlyRecording=1) of [Node.js](https://nodejs.org)

[Watch VS Code installation](https://www.loom.com/share/4ddcecfd0b6140d7866ad0280d8783c5) of [VS Code](https://code.visualstudio.com/Download)

Install & Run [Playwright](https://playwright.dev/)

💡 These are optional. Only use them if you're new to these tools.

---

🧾 Test Case Document
See TEST_CASE.md for the step-by-step test logic.

---

📬 Contact
Feel free to reach out if you have questions or feedback:

Tommy Xu
Email: [Tommy.xu90@gmail.com]
GitHub: TommyXu1990