# GreenBasket — Full-stack organic e-commerce starter

A responsive GreenBasket storefront and admin panel built with Next.js 16, Tailwind CSS, shadcn-style UI primitives, Framer Motion, Express, MongoDB and JWT.

## Requirements
- Node.js 20.9+
- MongoDB local instance or Atlas connection string

## Run locally
### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Backend runs at `http://localhost:5000`; health check: `/api/health`.

### 2) Frontend
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```
Open `http://localhost:3000`.

## Admin setup
Create an admin user by POSTing to `/api/auth/register-admin` while `ALLOW_ADMIN_SEED=true` is set in backend `.env`. Disable that flag after creating the first admin. Example body:
```json
{"name":"Store Admin","email":"admin@example.com","password":"ChangeMe123!"}
```
Then sign in at `/admin/login`.

## Main API routes
- `POST /api/auth/login`, `POST /api/auth/register-admin` (seed only)
- `GET/POST /api/products`, `GET/PUT/DELETE /api/products/:id`, `GET /api/products/slug/:slug`
- `GET/POST /api/categories`, `PUT/DELETE /api/categories/:id`
- `POST /api/orders`, `GET /api/orders` (admin), `GET /api/orders/:id`, `PATCH /api/orders/:id/status`
- `GET /api/dashboard/stats` (admin)

## Notes before production
Configure strong secrets, exact frontend origin in `CLIENT_URL`, HTTPS, MongoDB backups, rate limiting, request validation, image storage (Cloudinary/S3), email/SMS notifications, payment gateway and deployment secrets. The checkout is Cash on Delivery only, matching the supplied reference. Do not expose admin seed endpoint in production.
