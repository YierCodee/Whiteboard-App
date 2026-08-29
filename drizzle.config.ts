import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql', 
  
  // Perubahan di sini: langsung ke folder /db/ di root
  schema: './db/schema.ts', 
  
  out: './drizzle', 
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});