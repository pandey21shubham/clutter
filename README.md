# Clutter

A login-free URL shortener. Paste a long link, get a short one, and share it. No account or sign-up needed.

Built with Next.js, React, Tailwind CSS, MongoDB and Resend.

## Features

- **No login required**: shorten a link instantly without creating an account
- **Short links that redirect**: each short URL sends visitors to the original link
- **Fast and lightweight**: built on the Next.js App Router
- **Responsive UI**: styled with Tailwind CSS
- **Email support**: powered by Resend
- Add any other features here (custom aliases, click tracking, expiry, QR codes, etc.)

## Tech Stack

| Area      | Tool                                      |
| --------- | ----------------------------------------- |
| Framework | [Next.js](https://nextjs.org) (App Router) |
| UI        | [React](https://react.dev)                 |
| Styling   | [Tailwind CSS](https://tailwindcss.com)    |
| Database  | [MongoDB](https://www.mongodb.com)         |
| Email     | [Resend](https://resend.com)               |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18.18 or later
- A [MongoDB](https://www.mongodb.com/atlas) database (a free Atlas cluster works)
- A [Resend](https://resend.com) account and API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pandey21shubham/clutter.git
   cd clutter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root:

   ```env
   # Example names. Match these to the variables your code actually reads.
   MONGODB_URI=your_mongodb_connection_string
   RESEND_API_KEY=your_resend_api_key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

   `.env.local` is git-ignored, so your keys are never committed.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Starts the development server         |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production build             |
| `npm run lint`  | Runs the linter                       |

## How It Works

1. You paste a long URL and submit it.
2. The app generates a short code and saves the pair in MongoDB.
3. You get a short link like `yourdomain.com/abc123`.
4. When someone opens it, the app looks up the code and redirects to the original URL.

## Project Structure

```
clutter/
├── app/            # Pages, layouts, routes and API handlers
├── components/     # Reusable React components (if you have this folder)
├── lib/            # Database connection and helpers (if you have this folder)
├── public/         # Static assets
├── .env.local      # Local environment variables (not committed)
└── package.json
```

Adjust this tree to match your actual folders.

## Screenshots

Add a screenshot or GIF of the app here:

```md
![Clutter screenshot](./public/screenshot.png)
```

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/new):

1. Push the repo to GitHub.
2. Import it on Vercel.
3. Add `MONGODB_URI`, `RESEND_API_KEY` and your other variables under **Project Settings → Environment Variables**.
4. Update `NEXT_PUBLIC_BASE_URL` to your live domain.
5. Deploy.

## Contributing

Contributions are welcome.

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

Add a license here (for example MIT), or remove this section.

## Author

**Shubham Pandey** · [@pandey21shubham](https://github.com/pandey21shubham)
