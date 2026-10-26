# Portfolio redesign brief

## Preserve

- Existing canvas particle background in `src/components/space-background.tsx`.
- Single-page scrolling and project card galleries.
- Existing web, graphic design, and motion work.
- Theme switching, CV download, and contact form.

## Proposed direction

Use a restrained studio portfolio style: clearer typography, generous spacing,
consistent surfaces, and one accent color that complements the particle animation.

1. Replace the crowded navigation with a compact sticky header: Home, Work,
   About, Creative, and Contact. Keep Experience reachable and provide direct
   links to both creative galleries in the mobile menu.
2. Repair section tracking for galleries taller than the viewport. Keep hash
   navigation, keyboard focus, mobile menu behavior, and scroll offsets consistent.
3. Move selected web work closer to the hero. Keep the card flow, with a small
   featured selection followed by a responsive, filterable project grid.
4. Give cards readable screenshots, concise descriptions, technology tags,
   explicit source/demo links where verified, and touch-accessible details.
5. Add public GitHub projects only after checking their documentation and
   distinguishing published demos from source-only or unfinished work.
6. Refine About, Experience, and creative gallery styling to match the new system.
7. Verify a production build, type checks, responsive layouts, navigation,
   project filtering, image dialogs, themes, and reduced-motion behavior.

## Decisions to collect before implementation

- Visual treatment and preferred accent.
- Developer-first or equally multidisciplinary positioning.
- Which newly researched projects should be featured.
- Visual and project choices; hostname is now `billsbro.vercel.app`.

## Hosting research

The authorized Vercel CLI located the `next-portfolio` project under
`proffesergios-projects`. Its current production deployment is Ready and serves
`https://next-portfolio-ruby-nine.vercel.app`.

An attempt to assign `billsdev.vercel.app` was rejected by Vercel with:
`The chosen alias "billsdev.vercel.app" is already in use.`
The user subsequently supplied alternatives in preference order. Assigning the
first option succeeded: `https://billsbro.vercel.app` now points to the current
production deployment. The existing address also remains available. Neither
`hossainbillal.vercel.app` nor `billsworld.vercel.app` was needed or checked.

## GitHub shortlist

Public repository metadata and READMEs were researched. These candidates are
absent from the existing nine-card portfolio and are marked non-forks. Supplied
demo URLs have not yet been independently tested.

| Project | Repository | Showcase angle | Boundary |
| --- | --- | --- | --- |
| ChuriCanvas | https://github.com/proffesergio/churi-canvas | Next.js commerce and admin | MVP; wallet and social integrations simulated |
| MapVibe | https://github.com/proffesergio/mapvibe | Next.js interactive map poster creation | Deployment flows unverified |
| iLearnNation | https://github.com/proffesergio/ilearnation | Interactive learning and runnable checkpoints | Distinguish authored courses from unwritten inventory |
| BechaKena | https://github.com/proffesergio/bechakena | Flutter browser POS demo | Device-local demo; cloud sync future work |
| Chandramonians | https://github.com/proffesergio/chandramonians-web | Django alumni community | Job board placeholder; mentorship persistence unfinished |
| Daktarbari | https://github.com/proffesergio/daktarbari | Bangla-first doctor directory | Several search and reminder features planned |
| OmniScale | https://github.com/proffesergio/omniscale | Agency, calculator, and booking | Staging and backend configuration require verification |

Recommended initial featured additions: ChuriCanvas, MapVibe, iLearnNation,
and BechaKena. Preserve BornoLab and EarnLoop from the existing portfolio.
