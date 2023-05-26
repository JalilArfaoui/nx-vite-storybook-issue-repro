export type Response =
  | 'LOW'
  | 'MEDIUM'
  | 'TERRIBLE'
  | 'STRONG'
  | 'OPTIMAL'
  | 'UNKNOWN';

export function getSomethingFromDomain(): Response {
  return 'OPTIMAL';
}
