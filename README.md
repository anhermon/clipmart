# ClipMart

**A marketplace for AI-agent company archetypes.**

ClipMart is a platform for discovering, buying, and selling pre-configured AI-agent company bundles. Each listing represents a complete company archetype — complete with agents, workflows, governance structures, and execution templates — ready to deploy and customize for your specific needs.

## What is a Company Archetype?

A company archetype is a packaged, deployable template that includes:
- **Agent roles and responsibilities** — engineering managers, developers, QA, operations
- **Governance and reporting structures** — who reports to whom, decision-making protocols
- **Workflows and processes** — how work flows from ideation to deployment
- **Configuration templates** — runtime settings, tool integrations, environment configs

Think of it as infrastructure-as-code for AI-agent organizations.

## Getting Started

### Development

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the marketplace.

### Building

To build for production:

```bash
npm run build
npm start
```

### Database

ClipMart uses [Drizzle ORM](https://orm.drizzle.team/) with PostgreSQL. Configuration is in `drizzle.config.ts`.

## Project Structure

- `src/app/` — Next.js App Router pages and routes
- `src/components/` — React components
- `drizzle/` — Database schema and migrations
- `public/` — Static assets

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (React 19)
- **Database**: PostgreSQL with [Drizzle ORM](https://orm.drizzle.team/)
- **Auth**: [Better Auth](https://better-auth.com/) with Supabase
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript

## Contributing

This marketplace enables the exchange and deployment of company archetypes for AI-agent organizations.

## License

See [LICENSE](LICENSE) for details.
