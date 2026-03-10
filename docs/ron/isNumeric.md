# isNumeric

## Descriere

`isNumeric` determină dacă un anumit `value` este considerat numeric prin verificarea tipului său rezolvat în raport cu
`NUMERIC_TYPES`.

### Caz de utilizare

Folosește `isNumeric` pentru a valida intrările (de ex., payload-uri API, valori de formular, configurație) înainte de a
efectua operații numerice și pentru a accepta consecvent tipuri asemănătoare numerelor (cum ar fi `BigInt`) conform
`NUMERIC_TYPES`.

> **Notă pentru utilizatorii TypeScript:**
>
> `isNumeric` este un predicat care returnează boolean; tratează-l ca o verificare la runtime pentru dacă o valoare
> aparține setului de tipuri numerice definit de bibliotecă.

### Avantaje

- Folosește `getTypeOf` împreună cu `NUMERIC_TYPES` pentru a centraliza logica de detectare a valorilor numerice și
  pentru a menține verificările consecvente în întregul cod.
- Returnează un boolean simplu (`true`/`false`) pentru ramificare ușoară și utilizare de tip guard.
- Suportă mai multe reprezentări numerice (de ex., `number`, `BigInt`) așa cum sunt definite de `NUMERIC_TYPES`.

## Utilizare

### Sintaxă

Funcție:

- `isNumeric(value)`

Parametri:

- `value`: Valoarea de verificat pentru tip numeric.

### Import local al funcției

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v este considerat numeric conform regulilor de tip ale bibliotecii
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isNumeric(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 15:54:20 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>