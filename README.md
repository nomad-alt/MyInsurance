# MyInsurance

MyInsurance is a small frontend portfolio project that demonstrates a fictional insurance self-service portal. It was created as a junior-level learning project tailored to the kinds of skills requested in a Junior Frontend Developer role.

The project is not a production insurance service. It uses fictional local data and does not include authentication, a database, payments, or real claim processing.

## Features

- View active insurance policies on a dashboard.
- Open a policy to view its details.
- View claims and their current statuses.
- Submit a simple claim with accessible validation.
- See a submitted claim in the claims list during the current browser session.
- Navigate between pages without full page reloads.
- Use the layout on narrow and wide screens.

## Technologies

- React for component-based user interfaces.
- TypeScript for understandable data contracts and safer component props.
- Vite for the development server and production build.
- React Router for client-side pages and dynamic policy URLs.
- CSS for responsive layouts and reusable visual values.
- Vitest and React Testing Library for behavior-focused tests.
- Oxlint for static code checks.
- GitHub Actions for automated lint, test, and build verification.

No UI framework or global state library is used. The application is small enough for local component state, plain CSS, and simple service functions.

## Run locally

Requirements:

- Node.js 22 or another version supported by the current Vite release.
- npm.

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local address, usually `http://localhost:5173`.

## Available commands

```bash
npm run dev        # Start the development server
npm run lint       # Check the source with Oxlint
npm test           # Run all tests once
npm run test:watch # Rerun tests while developing
npm run build      # Type-check and create a production build
npm run preview    # Preview the production build locally
```

## Project structure

```text
src/
  components/  Reusable Card and Badge components
  data/        Fictional policies and initial claims
  pages/       Dashboard, policy details, claims, and claim form
  services/    Policy and claim data-access functions
  test/        Shared test setup
  types/       Insurance and claim data contracts
  App.tsx      Shared layout, navigation, and routes
  main.tsx     React application entry point
.github/
  workflows/   Continuous integration workflow
```

Files and folders were added only when the application needed them. The project avoids complex state management, class-based services, and unnecessary layers.

## Architecture and data flow

The application follows a simple one-way flow:

```text
local mock data -> service functions -> page components -> reusable UI components
```

Page components request data from services and decide what the user sees. Services know where data is stored and perform lookups or creation. Reusable components such as `Card` and `Badge` receive typed props and control consistent presentation.

The claim form uses local React state because only that page needs its current values and errors. Global state would add complexity without solving a current problem.

Claims created through the form are stored in memory by `claimsService`. They appear in the claims list until the browser is refreshed. This intentionally demonstrates the service boundary without pretending that the project has permanent backend storage.

## Component library and design system

A component library is a collection of reusable interface components. This project has a very small component library containing `Card` and `Badge`.

A design system is broader: it normally includes components, visual rules, accessibility guidance, usage patterns, and documentation. MyInsurance is not a complete design system. Its CSS variables and reusable components only demonstrate the basic idea.

This relates to an organizational component system such as Gjensidige Builders because both aim to make repeated interface patterns consistent and reusable. The portfolio project is a small learning example and does not reproduce Gjensidige's internal or production architecture.

## Accessibility decisions

- Semantic elements such as `header`, `nav`, `main`, headings, lists, and description lists provide meaningful structure.
- Every form control has a visible, connected label.
- Invalid controls use `aria-invalid` and point to their messages with `aria-describedby`.
- Form errors are visible in text and announced through an alert summary.
- Successful submission is announced with `role="status"`.
- Status badges include readable text and do not rely only on color.
- Keyboard focus uses a visible outline.
- Links are used for navigation and a button is used for form submission.
- Responsive CSS Grid and flexible widths support smaller screens.

ARIA is used only where native HTML does not fully communicate changing validation and status information.

## Testing

The test suite contains a small set of behavior-focused tests:

- `Card` renders its heading and composed content.
- An empty claim form shows visible and accessible errors.
- A valid claim form shows confirmation and resets its values.
- A submitted claim appears in the claims list after navigation.

Tests query elements by accessible roles and labels instead of CSS classes. The shared setup cleans the document after every test so tests remain isolated.

Run the suite with:

```bash
npm test
```

## Continuous integration

The GitHub Actions workflow runs for pushes and pull requests. It:

1. checks out the repository;
2. sets up Node.js and npm caching;
3. installs locked dependencies with `npm ci`;
4. runs lint;
5. runs tests; and
6. creates the production build.

The workflow verifies the project but does not deploy it.

## Learning topics covered

- Breaking an interface into page and reusable components.
- Passing typed props and composing components with `children`.
- Rendering lists with `filter`, `map`, and stable React keys.
- Using route parameters to select data.
- Managing controlled form values and validation with local state.
- Separating data access from presentation with small services.
- Applying basic semantic HTML and WCAG-oriented form practices.
- Testing visible behavior and user interactions.
- Automating project checks with continuous integration.

## Current limitations and possible improvements

- Replace in-memory claim storage with a real API or persistent browser storage.
- Add loading and error states when data access becomes asynchronous.
- Prevent future incident dates and add richer domain validation.
- Add authentication only if the project gains a real protected backend.
- Add a general not-found route.
- Review the interface with automated accessibility tooling and manual keyboard and screen-reader checks.
- Deploy the static application after choosing an appropriate hosting service.

These are future improvements, not features the current project claims to provide.

## Notes

### How the application works

`main.tsx` mounts React and provides `BrowserRouter`. `App.tsx` renders the shared header and maps URLs to page components. Pages retrieve mock data through services and compose reusable components to display it.

### Why React and TypeScript were used

React makes it practical to split the interface into reusable components and update the form when state changes. TypeScript documents required props and data fields and catches invalid statuses or missing values before the application runs.

### How routing works

React Router maps each URL to a page. `Link` changes the URL without reloading the complete document. The policy route uses `/insurance/:policyId`; `useParams` reads that ID so one page can display different policies.

### How data flows

Mock files contain fictional records. Services filter, find, retrieve, or create those records. Pages call services and pass the results into components. User input flows into local form state through `onChange`, and valid data flows to `claimsService` through `createClaim`.

### How reusable components work

`Card` accepts a title and child content. `Badge` accepts a controlled visual variant and child text. Business-specific decisions, such as mapping `approved` to `success`, remain in the page instead of the generic component.

### Accessibility decisions

The application begins with semantic HTML and native controls. Additional ARIA attributes connect dynamic validation messages and announce submission results. Visible text accompanies status colors, and focus remains visible for keyboard users.

### Tests

The tests protect rendering, invalid submission, valid submission, and the complete claim-submission flow. React Testing Library is used to interact through roles and labels rather than component internals.

### GitHub Actions

The CI workflow installs exactly the locked dependencies and runs lint, tests, and build. A failure stops the job and gives feedback on GitHub before changes are merged.

### Challenges encountered

- Deciding when a repeated pattern justified a reusable component. `Badge` was extracted only after both policies and claims needed it.
- Keeping the service layer useful but small. Services are plain synchronous functions because the current data is local.
- A test revealed that rendered DOM was not cleaned between test cases. Shared `afterEach(cleanup)` setup fixed the isolation problem.
- Balancing custom validation with native HTML. Required attributes remain, while controlled messages provide consistent visible and accessible feedback.

### What I would improve next

The next meaningful improvement would be persistent data access. I would make the service functions asynchronous, add loading and request-error states to the pages, and connect them to a small API. I would keep the page and component boundaries unless real requirements showed that a different structure was needed.
