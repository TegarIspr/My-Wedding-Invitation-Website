# My Wedding Invitation Website

## A Multi-Language Wedding Website Template

[Live Demo](https://emanuelekarolina.vercel.app/)

---

## Technologies Used

- **Next.js 16** (with App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS**
- **Firebase** (Firestore, Authentication)
- **Framer Motion**
- **EmailJS** (@emailjs/browser)
- **Spotify API**
- **Biome** (formatting)

---

## Description

A multilingual wedding website template supporting **English, Italian, Polish, and Indonesian**. Features RSVP functionality, password-protected registry, Spotify music suggestions, and an admin panel.

### Features

- **Welcome Section** - Full-screen hero with couple photos and countdown
- **Save the Date** - Elegant wedding date display
- **Wedding Timeline** - Modern schedule visualization
- **Details Section** - Accommodation & transport info
- **RSVP Section** - Guest search with relationship handling
- **Gift Registry** - Bank details with password protection
- **Music Suggestions** - Spotify playlist integration
- **Admin Panel** - Google auth, guest management
- **Gallery** - Parallax photo effect
- **Multilingual** - Auto-detect browser language (EN, IT, PL, ID)
- **Fully Responsive**

---

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

---

## Environment Variables

Create `.env.local`:

```bash
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PROJECT_ID=your_project_id

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Spotify
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_PLAYLIST_ID=your_playlist_id
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/auth/callback
SPOTIFY_REFRESH_TOKEN=your_refresh_token

# Other
GUEST_ACCESS_PASSWORD=your_password
NEXT_PUBLIC_ADMIN_ACCESS_PASSWORD=admin_password
NEXT_PUBLIC_ALLOWED_ADMIN_EMAIL=admin@example.com

# Wedding Info
NEXT_PUBLIC_EMAIL=couple@email.com
NEXT_PUBLIC_K_NUM=+1234567890
NEXT_PUBLIC_E_NUM_UK=+441234567890
NEXT_PUBLIC_E_NUM_IT=+391234567890
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm format` | Format code with Biome |

---

## Firestore Structure

### Guests Collection
```
guests/
  {id}/
    id: number
    name: string
    attending: "Yes" | "No" | "Unknown"
    note: string
    relationshipIds: number[]
```

### Payment Data Collection
```
payment_data/
  currencies/
    EUR: { iban, accountHolder, bankName, bic }
    GBP: { sortCode, accountNumber, accountHolder, bankName }
    PLN: { iban, accountHolder, bankName, bic }
    IDR: { iban, accountHolder, bankName, bic }
```

---

## License

See [LICENSE.md](./LICENSE.md)

---

**HAPPY CODING** 🚀
