# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cast Collection is a full-stack application for managing and displaying cast images. Built with Laravel 12 on the backend and React 19 with TypeScript on the frontend, using Inertia.js to bridge the two frameworks.

## Tech Stack

**Backend:**

- PHP 8.2+ with Laravel 12
- MySQL database
- Inertia.js for server-side rendering integration

**Frontend:**

- React 19 with TypeScript
- Inertia.js React adapter
- Tailwind CSS v4 with Shadcn/UI components
- Lucide React for icons
- Vite for build tooling

**Development:**

- PHPUnit for PHP testing
- ESLint and Prettier for code quality

## Common Commands

### Development Server

```bash
composer run dev
```

Starts all development services concurrently:

- Laravel development server (http://localhost:8000)
- Queue worker
- Log viewer (Laravel Pail)
- Vite dev server with HMR

Alternatively, run services individually:

```bash
php artisan serve           # Start Laravel server
pnpm run dev                 # Start Vite only
```

### Frontend Development

```bash
pnpm run build               # Build for production
pnpm run lint                # Run ESLint with auto-fix
pnpm run format              # Format code with Prettier
pnpm run format:check        # Check formatting without changes
pnpm run types               # Type check without emitting files
```

### Backend Development

```bash
php artisan migrate         # Run database migrations
php artisan migrate:fresh --seed  # Reset database and seed
php artisan storage:link    # Link public storage
php artisan tinker          # Open Laravel REPL
```

### Testing

```bash
vendor/bin/phpunit          # Run all PHP tests
vendor/bin/phpunit --filter TestName  # Run specific test
vendor/bin/phpunit tests/Feature      # Run feature tests only
vendor/bin/phpunit tests/Unit         # Run unit tests only
```

### Code Quality

```bash
vendor/bin/pint             # Format PHP code (Laravel Pint)
```

## Architecture

### Request Flow

1. **HTTP Request** → Laravel Router → **Controller** → Inertia::render()
2. **Inertia Response** → React Component in `resources/js/pages/`
3. **React Component** → Uses layouts from `resources/js/layouts/`
4. **Shared Data** from `HandleInertiaRequests` middleware available to all pages

### Backend Structure

```
app/
├── Http/
│   ├── Controllers/        # Route controllers
│   │   ├── Auth/          # Authentication controllers
│   │   └── Settings/      # User settings controllers
│   ├── Middleware/
│   │   ├── HandleInertiaRequests.php  # Shares data to all Inertia pages
│   │   └── HandleAppearance.php       # Manages theme state
│   └── Requests/          # Form request validation
└── Models/                # Eloquent models
    ├── User.php
    ├── Image.php
    ├── Comment.php
    ├── ImageType.php
    ├── CastType.php
    └── Gender.php
```

**Key Backend Patterns:**

- Inertia.js responses via `Inertia::render()` return page name and props
- Shared data (auth user, app name, quote, Ziggy routes, sidebar state) injected via `HandleInertiaRequests`
- Form validation through dedicated Request classes
- Standard Laravel service container and dependency injection

### Frontend Structure

```
resources/js/
├── pages/               # Inertia page components (mapped to routes)
│   ├── auth/           # Login, register, password reset pages
│   ├── settings/       # User settings pages
│   ├── dashboard.tsx
│   └── welcome.tsx
├── layouts/            # Page layout wrappers
│   ├── app/           # Authenticated app layout components
│   ├── auth/          # Authentication layout components
│   ├── settings/      # Settings layout components
│   ├── app-layout.tsx
│   └── auth-layout.tsx
├── components/         # Reusable components
│   ├── ui/            # Shadcn/UI components
│   └── ...            # App-specific components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── types/             # TypeScript type definitions
└── app.tsx            # Inertia app entry point
```

**Key Frontend Patterns:**

- Pages in `resources/js/pages/` correspond to Inertia route names (e.g., `Inertia::render('dashboard')` → `pages/dashboard.tsx`)
- Layouts wrap pages and provide navigation, headers, sidebars
- Path aliases: `@/` maps to `resources/js/` (configured in both tsconfig.json and components.json)
- Theme/appearance managed via `use-appearance` hook with cookie persistence
- Type-safe routing via Ziggy (Laravel routes available in TypeScript)

### Database Schema

Core models and relationships:

- **Users**: Standard Laravel users with soft deletes and avatar
- **Images**: Belongs to user, has image_type, can have multiple cast_types and genders (many-to-many)
- **Comments**: Belongs to user and image, supports nested comments (self-referential parent_id)
- **ImageType, CastType, Gender**: Lookup/taxonomy tables

All image-related tables use soft deletes. Foreign keys cascade on delete where appropriate.

### Configuration

- **TypeScript paths**: `@/*` alias configured in `tsconfig.json` and `vite.config.ts`
- **Shadcn/UI**: Configured in `components.json` with aliases for components, utils, hooks
- **Tailwind**: Version 4 with CSS variables, neutral base color
- **Environment**: `.env` file for configuration (copy from `.env.example`)

## Development Guidelines

### Adding New Pages

1. Create React component in `resources/js/pages/[name].tsx`
2. Add route in `routes/web.php` or `routes/auth.php` using `Inertia::render('[name]')`
3. Wrap page with appropriate layout (AuthLayout, AppLayout, or SettingsLayout)
4. Define TypeScript types for page props in `resources/js/types/index.d.ts`

### Adding Shadcn/UI Components

The project uses Shadcn/UI with custom configuration:

- Components live in `resources/js/components/ui/`
- Use Lucide React for icons
- Follow the configured path aliases in `components.json`

### Working with Inertia

- Use `Link` component from `@inertiajs/react` for navigation
- Use `useForm` hook for form handling with validation
- Access shared data via `usePage().props`
- Route names available via Ziggy: `route('dashboard')`

### Database Migrations

When creating migrations:

- Follow the established pattern of foreign key constraints
- Use appropriate cascade/restrict rules
- Add indexes for foreign keys and frequently queried columns
- Include both up() and down() methods

### Testing

- Feature tests for HTTP endpoints in `tests/Feature/`
- Unit tests for isolated logic in `tests/Unit/`
- Use in-memory SQLite for testing (configured in `phpunit.xml`)
- Follow existing test patterns for authentication and settings features
