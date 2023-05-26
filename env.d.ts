/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NX_LOCALE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
