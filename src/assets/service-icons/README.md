# Service icons

Colour-illustrated SVG icons used by `src/components/Services.tsx`.

## Source and licensing

These are **original assets created for the MySOC Labs website**. They are not
copied, traced or redistributed from a third-party icon pack, so:

- no attribution is required;
- no third-party licence or commercial-use restriction applies;
- nothing here depends on an external image URL.

## Design language

Every file follows the same construction rules so the set reads as one family:

| Property        | Value                                                    |
| --------------- | -------------------------------------------------------- |
| Grid            | `24 × 24` viewBox, content kept inside a `3–21` optical box |
| Stroke          | `1.6` primary / `1.3–1.5` secondary, round caps and joins |
| Fill            | single accent colour at `10–28%` opacity (duotone)        |
| Palette         | mid-lightness accents that read on `#08080A`              |
| Texture         | no gradients, no glows, no shadows, no animation          |

The rounded-square container is applied in CSS (not inside the SVG) so the tab
list can tint, border and highlight it per state.

## File map

| File                                | Service                        | Accent    |
| ----------------------------------- | ------------------------------ | --------- |
| `defensive-security.svg`            | Category — Defensive Security  | `#F4343D` |
| `offensive-security.svg`            | Category — Offensive Security  | `#A78BFA` |
| `advisory-compliance.svg`           | Category — Advisory & Compliance | `#4C8DFF` |
| `soc-monitoring.svg`                | SOC – 24/7 Monitoring          | `#F4343D` |
| `managed-detection-response.svg`    | Managed Detection & Response   | `#FF7A59` |
| `incident-response.svg`             | Incident Response              | `#F5A524` |
| `vulnerability-management.svg`      | Vulnerability Management       | `#FFC247` |
| `network-security.svg`              | Network Security               | `#2DD4BF` |
| `email-cloud-security.svg`          | Email & Cloud Security         | `#38BDF8` |
| `web-application-pentesting.svg`    | Web Application Pentesting     | `#A78BFA` |
| `network-pentesting.svg`            | Network Pentesting             | `#818CF8` |
| `phishing-simulation.svg`           | Phishing Simulation            | `#E879F9` |
| `mobile-application-pentesting.svg` | Mobile Application Pentesting  | `#C084FC` |
| `api-security-testing.svg`          | API Security Testing           | `#9AA5FF` |
| `cloud-security-assessment.svg`     | Cloud Security Assessment      | `#F472B6` |
| `virtual-ciso.svg`                  | Virtual CISO (vCISO)           | `#34D399` |
| `security-awareness-training.svg`   | Security Awareness Training    | `#A3E635` |
| `compliance-support.svg`            | Compliance Support             | `#4C8DFF` |

## Adding or editing an icon

1. Keep the `24 × 24` viewBox and the stroke/fill rules above.
2. Bake the accent colour into the SVG — the assets are rendered through
   `<img>`, so `currentColor` will not resolve.
3. Add the file here and mirror its accent hex in the matching service entry in
   `src/components/Services.tsx`; that hex drives the tinted tile, its border
   and the selected state.
