# isSet

## Descriere

Determină dacă o valoare dată este un `Set`.

### Caz de utilizare

Validează intrările din surse externe (de ex., parsarea JSON, input de la utilizator sau API-uri terțe) pentru a te
asigura că o valoare este un `Set` înainte de a efectua operații `Set`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isSet` pentru a restrânge valorile `unknown` înainte de a apela API-uri specifice `Set`, precum `.add`,
`.has` sau `.size`.

### Avantaje

- Oferă o verificare simplă la rulare pentru a confirma dacă o valoare este un `Set`.
- Ajută la prevenirea erorilor de tip permițând ramificarea timpurie atunci când o valoare nu este un `Set`.
- Funcționează cu orice conținut al unui `Set` (gol sau populat) și returnează consecvent `true`/`false`.

## Utilizare

### Sintaxă

Funcție:

- `isSet(value)`

Parametri:

- `value`: Valoarea de verificat.

### Import local al funcției

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a hiu Set la runtime
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isSet(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isSet](../_analysis/isSet.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 23:11:02 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>