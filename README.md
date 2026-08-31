# Quria Enhancements public information site

This repository contains the public website and privacy policy for the Quria Enhancements extension for Microsoft Edge:

<https://jon-fallstrom.github.io/Quria-enhancements---Plugin-info/>

It is intentionally limited to public documentation. Extension source code, build artifacts, credentials, and Quria or customer data do not belong in this repository.

## Contents

- `index.html` — public overview and support information
- `privacy.html` — privacy policy and Microsoft Edge Add-ons data-use disclosure
- `styles.css` — shared presentation and responsive styles
- `.nojekyll` — tells GitHub Pages to serve the static files without Jekyll processing

The site has no client-side scripts, forms, analytics, cookies, external assets, or developer-operated backend.

## Local preview

The pages can be opened directly in Microsoft Edge. To preview them through a local web server instead, run this command from the repository root:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. No dependency installation or build step is required.

## Privacy-policy maintenance

The policy must be reviewed whenever the extension changes its permissions, host access, storage, network behavior, clipboard behavior, or handling of Quria page content. The public description and the disclosures submitted in Microsoft Partner Center must remain consistent with the extension's actual behavior.

As of August 31, 2026, the policy was checked against the extension's Manifest V3 configuration and implementation. The extension requests the `storage` permission and access to `https://*.quria.axiell.com/*`; it processes Quria content locally and does not contain developer analytics, advertising, tracking, remotely hosted code, or a developer-operated backend.

## Publishing with GitHub Pages

The production site is published from the `main` branch and repository root:

1. Open **Settings → Pages** in the GitHub repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select the `main` branch and `/(root)`, then save.
4. Wait for the Pages deployment to complete and verify both the home page and `/privacy.html`.

Use this privacy-policy URL in Microsoft Partner Center:

```text
https://jon-fallstrom.github.io/Quria-enhancements---Plugin-info/privacy.html
```

## Microsoft Edge Add-ons submission

The Partner Center privacy declarations must match `privacy.html`. In particular:

- Single purpose: improve staff usability and workflows within Axiell Quria through optional, user-facing interface and keyboard features.
- `storage`: save activation, feature choices, interface preferences, reminders, and the limited local configuration described in the privacy policy.
- `https://*.quria.axiell.com/*`: run the selected features only on Axiell Quria tenant pages.
- Remote code: no. The Manifest V3 package contains all executable code.
- Data handling: Quria page content is accessed locally for the extension's user-facing features and is not transmitted to the developers or unrelated third parties.

Review the current [Microsoft Edge publishing instructions](https://learn.microsoft.com/en-us/microsoft-edge/extensions/publish/publish-extension) and [Microsoft Edge Add-ons developer policies](https://learn.microsoft.com/en-us/legal/microsoft-edge/extensions/developer-policies) before every submission.

### Swedish store-listing copy

Recommended short description:

> Valfria navigerings-, tillgänglighets- och arbetsflödesförbättringar för personal som använder Axiell Quria i Microsoft Edge.

Place this disclosure near the beginning of the full store description, immediately after the introductory feature description:

> Quria Enhancements är ett oberoende webbläsartillägg för Microsoft Edge, utvecklat och publicerat av Jon Fällström och Vidar Kjaerstadius. Det är inte utvecklat, godkänt, sponsrat eller distribuerat av Axiell. Tillägget är avsett för behörig personal i organisationer som använder Axiell Quria. Varje organisation ansvarar för beslutet att installera och använda tillägget samt för att användningen följer organisationens IT-, informationssäkerhets- och dataskyddsregler.

Follow it with the Quria access requirement:

> Tillägget kräver ett befintligt, behörigt användarkonto i Axiell Quria. Quria-kontot och åtkomsten tillhandahålls inte av tilläggets utvecklare.

### Certification without a Quria test account

Quria access is issued and controlled by each customer organization. If reviewer credentials cannot be provided because an account would expose confidential patron and circulation data, explain that restriction clearly in **Notes for certification**. Microsoft policy permits a clear and reasonable explanation when test credentials cannot be supplied, but the submission should still give reviewers as much test evidence as possible.

Provide an advertisement-free, unlisted walkthrough video recorded in Microsoft Edge against a non-production Quria environment containing only synthetic data. The video should show:

1. Installation and the first-run consent flow.
2. The extension remaining inactive until the user accepts the notice and enables it.
3. The extension's permissions and restriction to `https://*.quria.axiell.com/*`.
4. Representative navigation, accessibility, search, circulation, and patron-workflow features.
5. Feature-by-feature controls, settings, the local data overview, reset, and clear-all behavior.
6. Disabling and removing the extension without disrupting normal Quria operation.
7. The extension version, Microsoft Edge version, and a statement that all shown records are synthetic.

Add timestamps and concise testing steps to the certification notes. A video improves reviewability but should not be described as a guaranteed substitute for Microsoft's own testing.

## Support and sensitive information

General questions and documentation issues can be submitted through the [public issue tracker](https://github.com/jon-fallstrom/Quria-enhancements---Plugin-info/issues). Do not include patron records, authentication information, private Quria URLs, screenshots containing sensitive data, or other confidential material in an issue.
