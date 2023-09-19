/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly GOOGLE_API_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }