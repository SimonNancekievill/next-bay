# Next Bay

Next.js frontend for the [Dark Bay](https://github.com/SimonNancekievill/dark-bay) auction API: browse auctions, register, log in and create auctions.

## Requirements

- Node 24 (see `.nvmrc`)
- pnpm (`brew install pnpm`)
- A running Dark Bay API, locally or on Render

## Setup

```bash
pnpm install
cp .env.example .env
```

Set `NEXT_PUBLIC_DARKBAY_API_URL` in `.env` to the API URL, e.g. `http://localhost:3030` for a local Dark Bay.

## Run

```bash
pnpm dev
```

The app runs at http://localhost:3000.

## Scripts

```bash
pnpm dev           # start the dev server
pnpm build         # production build
pnpm start         # serve the production build
pnpm lint          # ESLint
pnpm lint:fix      # ESLint with auto-fix
pnpm format        # Prettier, write
pnpm format:check  # Prettier, check only
pnpm typecheck     # tsc (generates Next.js route types first)
pnpm check         # lint + format:check + typecheck
pnpm test          # Vitest
pnpm sync          # switch to main, pull, install dependencies
pnpm sync:branch   # merge main into the current branch (without committing), install dependencies
```

## Deployment (Vercel)

Vercel detects pnpm from `pnpm-lock.yaml`. Set the Node.js version to 24.x in the project settings and `NEXT_PUBLIC_DARKBAY_API_URL` in the environment variables.
