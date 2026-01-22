# Cast Collection

Built with Laravel, React, and TypeScript.

## Tech Stack

### Backend

- PHP 8.2+
- Laravel 12
- MySQL
- Laravel Inertia

### Frontend

- React 19
- TypeScript
- Tailwind CSS
- Shadcn/UI components

### Development Tools

- Docker
- Git
- Composer
- pnpm
- phpunit

## Prerequisites

Before installing, ensure you have the following installed:

- PHP 8.2+
- Composer
- Node.js (v18+) and pnpm
- MySQL or compatible database
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cast-gallery.git
   cd cast-gallery
   ```

2. Install PHP dependencies:

   ```bash
   composer install
   ```

3. Install JavaScript dependencies:

   ```bash
   pnpm install
   ```

4. Create an environment file:

   ```bash
   cp .env.example .env
   ```

5. Generate application key:

   ```bash
   php artisan key:generate
   ```

6. Configure your database connection in the `.env` file:

   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=app
   DB_USERNAME=user
   DB_PASSWORD=password
   ```

7. Run database migrations and seed initial data:

   ```bash
   php artisan migrate --seed
   ```

8. Create a symbolic link for storage:
   ```bash
   php artisan storage:link
   ```

## Running the Application in Development Mode

1. Start the Laravel development server:

   ```bash
   composer run dev
   ```

2. Access the application at [http://localhost:8000](http://localhost:8000)
