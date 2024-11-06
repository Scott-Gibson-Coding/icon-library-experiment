# SVG Libraries with Vite

This project was used to generate a document describing some issues/concerns
relating to the use of some svg libraries. At this moment, the likely culprit
of the issues is relating to tree-shaking or a lack thereof either in the
svg library, or with Vite in dev.

In either case, some libraries like lucide-react work fine with Vite in dev and
prod, and others like tabler-icons works horribly in dev mode, but fine in prod.
