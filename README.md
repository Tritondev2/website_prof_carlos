# Prof Carlos Website

This repository hosts a Django backend and a React frontend for the website.

## Backend Setup

1. **Create a Python virtual environment**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. **Install Python dependencies**

   ```bash
   pip install -r backend/requirements.txt
   ```

3. **Configure environment variables**

   The backend reads configuration from environment variables. You can create a
   `.env` file (see `.env.example`) or export the variables in your shell:

   - `DJANGO_SECRET_KEY` – secret key used by Django
   - `DB_NAME` – database name (default: `carlos-website`)
   - `DB_USER` – database user (default: `carlos`)
   - `DB_PASSWORD` – database password (default: `website`)
   - `DB_HOST` – database host (default: `localhost`)
   - `DB_PORT` – database port (default: `5432`)

4. **Apply migrations**

   ```bash
   python backend/manage.py migrate
   ```

5. **Run the development server**

   ```bash
   python backend/manage.py runserver
   ```

6. **Run the tests**

   ```bash
   python backend/manage.py test
   ```

## Frontend Setup (optional)

The `frontend` directory contains a Vite + React project. To start it:

```bash
cd frontend
npm install
npm run dev
```
