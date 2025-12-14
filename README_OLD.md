# AHC Frontend (React + Redux + Vite)

## Setup
1. Copy `.env.example` to `.env` and set:
```
VITE_API_BASE_URL=http://localhost:8000/api
```
2. Install deps:
```
npm i
```
3. Run dev:
```
npm run dev
```

## Notes
- Ensure Laravel CORS allows http://localhost:5173.
- Public endpoints used: /api/v1/pages, /api/v1/navigation, /api/v1/footer, /api/v1/events.
- Auth endpoints: /api/auth/login, /api/auth/user, /api/auth/logout (Sanctum).
- Chatbot is a placeholder at bottom-right; customize later.
