# Your app: how to put it online, install it, and publish on Google Play

Everything in this folder is a finished, installable app (a "PWA"). The code, hosting and installing are **free**.
Google Play itself is **not** free: it needs a one-time developer fee (US$25 at the time of writing; confirm on sign-up).

## What is in the folder
| File | What it is |
|---|---|
| `content.js` | **The only file you normally edit.** Your contact details, UPI ID, services and prices, blog posts. |
| `index.html` | The app itself (design and screens). |
| `sw.js` | Makes the app work offline. Change `VERSION` ("v1" -> "v2") whenever you upload changes. |
| `manifest.webmanifest`, `icons/` | Name, colours and icons used when installed. |
| `privacy.html` | Privacy policy page (Google Play requires one). |
| `photo.js` | Your photo. |

## Step 1. Set your own details (10 minutes)
Open `content.js` in any text editor (Notepad is fine).
1. `SETTINGS.upi`: add your UPI ID (like `yourname@okhdfcbank`). Until you add it, the "Pay by UPI" buttons stay hidden and only WhatsApp booking shows.
2. `SERVICES`: the prices (Rs 999, 2,999, 4,999, 3,999, 9,999) are **sample prices I chose**. Change them to what you want to charge.
3. `POSTS`: the 4 blog posts are **sample drafts I wrote**, labelled "Sample draft" in the app. Read them, edit them into your own voice, then delete the line `draft:true` from each one you approve.

## Step 2. Put it online for free (GitHub Pages)
Your website lives at `ssdhaka.github.io/SSDhaka/`. Keep it. Put the app at the main address instead:
1. On github.com, create a **new public repository named exactly `ssdhaka.github.io`**.
2. Click "Add file" -> "Upload files" and drag in **everything inside this folder** (including the `icons` folder and the hidden `.nojekyll` file). Commit.
3. Repository Settings -> Pages -> Source: "Deploy from a branch" -> `main` / root -> Save.
4. After about a minute your app is live at **https://ssdhaka.github.io/** and your old website stays at /SSDhaka/.

Using the main address (not a sub-folder) matters: it is what lets the Play Store version open without a browser bar (Step 4).

## Step 3. Install it on your phone (free, no Play Store needed)
- **Android:** open https://ssdhaka.github.io/ in Chrome -> tap the "Install" button on the home screen of the app (or menu -> Install app).
- **iPhone:** open in Safari -> Share -> Add to Home Screen.
You can share this link with anyone. They install it the same way, and it works offline.

## Step 4. Publish on Google Play
**Costs and rules (confirmed from Google's help pages):**
- One-time developer registration fee (US$25), plus identity verification.
- If your developer account is a *personal* account created after 13 Nov 2023, Google requires a **closed test with at least 12 testers, each opted in for 14 days in a row**, before you can apply for public release. Plan for about 2-3 weeks. Ask students, scholars, colleagues and friends (each needs a Gmail address).

**Steps:**
1. Go to https://www.pwabuilder.com (free) -> paste `https://ssdhaka.github.io/` -> Start.
2. Click **Package for stores -> Android**. Choose a package ID like `io.github.ssdhaka.app`. Let it generate a signing key. Download the zip it gives you and **keep the zip and its password safe forever**. Losing the key means you cannot update the app.
3. In the zip you get: an `.aab` file (upload to Google Play) and an `assetlinks.json` (see step 4).
4. Create the folder `.well-known` in your GitHub repository and upload `assetlinks.json` into it, so it opens at `https://ssdhaka.github.io/.well-known/assetlinks.json`. If you use Google's Play App Signing, copy the **App signing key SHA-256** from Play Console (Setup -> App integrity) into that file too. If this file is wrong or missing, the app still works but shows a browser address bar at the top.
5. Create your developer account at https://play.google.com/console and pay the fee.
6. Create the app, then fill the required forms: store listing (short and long description, 512x512 icon from `icons/icon-512.png`, a 1024x500 banner, at least 2 phone screenshots), **privacy policy URL** = `https://ssdhaka.github.io/privacy.html`, Data safety (say: no data collected), Content rating, Target audience.
7. Upload the `.aab` to **Closed testing**, add 12+ tester emails, share the opt-in link, and wait 14 days.
8. Apply for production access in Play Console, then publish. Google reviews take from a few hours to a few days.
9. To update later: change `content.js`, upload to GitHub, and raise `VERSION` in `sw.js`. People see new posts and prices without a new Play Store release.

## Step 5. How the app can earn money
The app is a shop window. Money comes from the services you sell. Income depends on how many people see it, and I cannot promise any amount.
- **Consultancy bookings (main income):** each service has a "Book on WhatsApp" button with the service pre-filled, and a UPI "Pay" button once you add your UPI ID. Agree scope first, then ask for payment (full or advance).
- **Blog brings the customers:** post once or twice a week, then share each post link on LinkedIn, WhatsApp groups and with your students. Every post ends with a "See consultancy services" button.
- **Next products when you are ready:** price-forecast reports, MBA thesis help packs, FPO training, paid webinars. Add each as one more item in `SERVICES`.
- **Payment extras (optional, free to set up):** Razorpay or Cashfree payment links work for cards and UPI, with a small per-payment charge.
- **Check before you start:** your university's rules on outside consultancy, and income tax / GST rules for consultancy income. An accountant can confirm both quickly.

## Privacy
The app has no accounts, no ads and no tracking, so the policy is simple. If you later add analytics or ads, update `privacy.html` and the Play Data safety form.
