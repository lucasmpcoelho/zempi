# Overview

This is a full-stack web application for Zempi, an AI-powered medical assistant designed specifically for GLP-1 medication patients in Brazil. The application provides 24/7 monitoring, personalized guidance, and proactive health conversations to support patients throughout their treatment journey. It features a marketing landing page with information about the service, benefits, testimonials, and FAQs.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack:**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight React Router alternative)
- TanStack Query (React Query) for server state management
- Framer Motion for animations and transitions
- Tailwind CSS for styling with custom design tokens
- Shadcn UI component library (Radix UI primitives) for accessible, pre-built components

**Design Decisions:**
- **Component-Based Structure**: The application uses a modular component architecture with reusable UI components in `client/src/components/ui/` and feature-specific components for different sections (hero, benefits, testimonials, FAQ, etc.)
- **CSS Variables for Theming**: Custom properties defined in `index.css` enable consistent theming across the application with support for light/dark modes
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive layouts
- **Animation Strategy**: Uses Framer Motion for scroll-triggered animations and micro-interactions to enhance user experience

## Backend Architecture

**Technology Stack:**
- Express.js for the HTTP server
- TypeScript with ESM modules
- Vite integration for development with HMR (Hot Module Reload)
- Custom middleware for request logging and JSON parsing

**Design Decisions:**
- **Minimal Backend Template**: The server is set up as a foundation with route registration system in `server/routes.ts`
- **Storage Abstraction**: Interface-based storage pattern (`IStorage`) allows swapping between in-memory (`MemStorage`) and database implementations without changing business logic
- **Development Experience**: Vite middleware integration provides seamless frontend-backend development with single server process
- **API Structure**: All application routes are designed to be prefixed with `/api` for clear separation from frontend routes

## Data Storage

**Current Implementation:**
- **In-Memory Storage**: `MemStorage` class provides temporary data persistence for development
- **User Schema**: Defined in `shared/schema.ts` with Drizzle ORM table definitions for future database integration

**Database Design (Prepared for PostgreSQL):**
- Drizzle ORM configured for PostgreSQL dialect with Neon serverless driver
- Schema uses UUID primary keys with automatic generation
- Migration system configured with `drizzle-kit` outputting to `./migrations`
- Validation schemas created with `drizzle-zod` for runtime type checking

**Rationale:**
- In-memory storage enables rapid prototyping without database setup requirements
- Drizzle ORM provides type-safe database queries and automatic TypeScript inference
- Storage interface pattern makes it trivial to swap MemStorage for DatabaseStorage when needed
- Connection pooling ready via Neon serverless for production deployments

## External Dependencies

**UI Component Library:**
- Radix UI primitives for accessible component foundations (dialogs, dropdowns, tooltips, etc.)
- Shadcn UI configuration for consistent component styling and behavior

**State Management:**
- TanStack Query for server-state caching, synchronization, and fetching patterns
- React hooks for local component state

**Database & ORM:**
- Drizzle ORM as the type-safe SQL query builder
- Neon serverless PostgreSQL driver for connection management
- `connect-pg-simple` for session storage (when sessions are implemented)

**Development Tools:**
- Replit-specific plugins for development environment integration (cartographer, dev banner, runtime error overlay)
- ESBuild for production server bundling
- TSX for TypeScript execution in development

**Styling & Animation:**
- Tailwind CSS for utility-first styling
- class-variance-authority (CVA) for type-safe component variants
- Framer Motion for declarative animations
- date-fns for date formatting and manipulation

**Form Handling (Available):**
- React Hook Form with Zod resolvers for form validation and management

**Note on Database:**
The application is configured for PostgreSQL via Drizzle ORM but currently uses in-memory storage. When Postgres is provisioned, update the `DATABASE_URL` environment variable and replace `MemStorage` with a database-backed implementation using the existing schema definitions.