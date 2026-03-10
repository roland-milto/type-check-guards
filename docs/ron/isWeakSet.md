# isWeakSet

## Descriere

Determină dacă `value` dat este un `WeakSet` de obiecte.

### Caz de utilizare

Folosește `isWeakSet` când accepți intrări netipizate (de ex., din API-uri externe, configurație dinamică sau valori
`unknown`) și trebuie să verifici că este un `WeakSet` înainte de a utiliza operații specifice `WeakSet`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isWeakSet` pentru a restrânge o valoare `unknown` la `WeakSet<object>` la rulare; reține că `WeakSet` poate
> conține doar referințe la obiecte.

### Avantaje

- Oferă o verificare simplă la rulare pentru a stabili dacă o valoare este un `WeakSet`.
- Ajută la prevenirea erorilor de tip, asigurând că doar instanțele `WeakSet` sunt tratate ca atare.
- Funcționează cu orice intrare `unknown` și returnează un rezultat boolean clar (`true`/`false`).

## Utilizare

### Sintaxă

Funcție:

- `isWeakSet(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // adevărat
console.log(isWeakSet(b)); // fals

if (isWeakSet(a)) {
  // a este un WeakSet la timpul de execuție
}
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isWeakSet(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 14:18:57 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>