// Import: Self-created assertion function.
import * as guards from './index.js';

/**
 * Registriert alle Type-Guards global.
 */
for (const [name, func] of Object.entries(guards)) {
  if (typeof func === 'function') {
    (globalThis as any)[name] = func;
  }
}