# Testing Guide

This project uses **Vitest** for unit and integration tests, and **Playwright** for end-to-end testing.

## Available Test Commands

### Unit/Integration Tests (Vitest)

```bash
# Run unit tests once
pnpm run test:run

# Run tests in watch mode (for development)
pnpm run test:watch

# Run tests with UI
pnpm run test:ui

# Start interactive test runner
pnpm run test
```

### End-to-End Tests (Playwright)

```bash
# Run E2E tests
pnpm run test:e2e

# Run E2E tests with UI
pnpm run test:e2e:ui

# List available E2E tests
pnpm run test:e2e --list
```

### All Tests

```bash
# Run both unit and E2E tests
pnpm run test:all
```

## Test Structure

### Unit Tests

- Located alongside source files: `*.test.ts` or `*.spec.ts`
- Use Vitest with JSDOM environment for browser API simulation
- Examples in:
  - `packages/types/src/index.test.ts`
  - `packages/utils/src/index.test.ts`

### E2E Tests

- Located in `tests/e2e/`
- Use Playwright for browser automation
- Test real user workflows and interactions
- Examples in:
  - `tests/e2e/homepage.spec.ts`

## Configuration Files

- **Vitest**: `vitest.config.ts`
- **Playwright**: `playwright.config.ts`

## Writing Tests

### Unit Test Example

```typescript
import { describe, it, expect } from 'vitest';

describe('MyFunction', () => {
  it('should work correctly', () => {
    expect(myFunction('input')).toBe('expected-output');
  });
});
```

### E2E Test Example

```typescript
import { test, expect } from '@playwright/test';

test('should load homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Stockholm')).toBeVisible();
});
```

## Current Test Status

✅ **8 unit tests passing** in 2 test suites
✅ **12 E2E tests configured** (require running server)
✅ **TypeScript support** with path aliases
✅ **CI/CD ready** with proper exit codes
