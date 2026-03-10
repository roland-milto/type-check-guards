# isPromise

## Descriere

Determină dacă o valoare dată este un `Promise`.

### Caz de utilizare

Folosește `isPromise` pentru a valida intrări necunoscute înainte de a le trata ca un `Promise`, de exemplu când
gestionezi valori returnate de pluginuri, importuri dinamice sau API-uri tipate lax.

> **Notă pentru utilizatorii TypeScript:**
>
> `isPromise` verifică prin `instanceof Promise`, deci returnează `true` doar pentru instanțe `Promise` reale (nu
> thenable-uri generice).

### Avantaje

- Oferă o verificare simplă la rulare pentru a determina dacă o valoare este un `Promise`.
- Ajută la protejarea ramurilor de cod care necesită o instanță reală de `Promise`, returnând `true` sau `false` în mod
  previzibil.
- Evită rezultate fals pozitive de la obiecte „thenable” (de ex., `{ then() {} }`) prin faptul că cere o instanță
  `Promise` reală.

## Utilizare

### Sintaxă

Funcție:

- `isPromise(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // adevărat
console.log(isPromise(b)); // fals
console.log(isPromise(123)); // fals
console.log(isPromise(null)); // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isPromise(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 23:54:05 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>