# Sandra Pittelkow Interior Design Website

## Deployment Instructions

### For bolt.new and local development:
```bash
npm run dev
```

### For https://www.red-it.org/apps/sandra/:
1. Build with specific base path:
```bash
npm run build:sandra
```
2. Upload contents of `dist/` folder to `/apps/sandra/` directory on server
3. Copy `.htaccess-sandra` to `.htaccess` in the `/apps/sandra/` directory

### For https://www.pikosfusion.de:
1. Build for root deployment:
```bash
npm run build:pikosfusion
```
2. Upload contents of `dist/` folder to root directory of pikosfusion.de
3. The default `.htaccess` file will work for root deployment

## Environment Configuration

The project uses relative paths (`base: './'`) by default, which works in bolt.new and local development. For specific deployments, use the appropriate build command that sets the correct base path.

## Files Overview

- `.htaccess` - For root domain deployment (pikosfusion.de)
- `.htaccess-sandra` - For subdirectory deployment (red-it.org/apps/sandra/)
- `vite.config.ts` - Uses relative paths by default
- Build scripts handle different base paths automatically