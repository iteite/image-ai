declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_URL: string;
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY: string;
    NEXT_PUBLIC_UNSPLASH_SECRET_KEY: string;
    REPLICATE_API_TOKEN: string;
    DATABASE_URL: string;
  }
}
