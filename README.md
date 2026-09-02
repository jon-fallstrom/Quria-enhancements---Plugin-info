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

Submission material is **not** kept in this repository. This one is public and holds only
the published site and the privacy policy.

The Swedish store listing copy, the single-purpose and permission justifications, and the
notes for certification all live in the private `Quria-Anonymiser` repository under
`submission/`. They belong together and out of public view: the certification notes carry
the walkthrough video's password, and keeping one copy of the listing text avoids the
situation where the manifest and a second document disagree about what the store shows.

What this repository still owns:

- `privacy.html`, the policy Partner Center links to. It must be reviewed whenever the
  extension changes its permissions, host access, storage, network behavior, clipboard
  behavior, or handling of Quria page content.
- `index.html`, the public overview.

Review the current [Microsoft Edge publishing instructions](https://learn.microsoft.com/en-us/microsoft-edge/extensions/publish/publish-extension)
and [Microsoft Edge Add-ons developer policies](https://learn.microsoft.com/en-us/legal/microsoft-edge/extensions/developer-policies)
before every submission.
## Support and sensitive information

General questions and documentation issues can be submitted through the [public issue tracker](https://github.com/jon-fallstrom/Quria-enhancements---Plugin-info/issues). Do not include patron records, authentication information, private Quria URLs, screenshots containing sensitive data, or other confidential material in an issue.
