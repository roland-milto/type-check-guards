# isTrue

## Descriere

`isTrue` determină dacă o valoare dată este strict egală cu `true`.

### Caz de utilizare

Folosește `isTrue` pentru a valida flag-uri, feature toggles sau valori de configurare unde doar literalul `true`
trebuie acceptat, iar orice altceva trebuie tratat ca `false`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isTrue` când trebuie să accepți doar literalul boolean `true`, nu doar valori truthy.

### Avantaje

- Oferă o verificare strictă pentru literalul boolean `true` (fără coerciție).
- Ajută la distingerea lui `true` de valori truthy precum `1`, `"true"` sau `{}`.
- Comportament simplu și previzibil, potrivit pentru gărzi și pipeline-uri de validare.

## Utilizare

### Sintaxă

Funcție:

- `isTrue(value)`

Parametri:

- `value`: Valoarea de verificat.

### Import local al funcției

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // adevărat
const b = isTrue(1);         // fals
const c = isTrue("true");   // fals

if (isTrue(a)) {
  // a e adevărat aici
}
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isTrue(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 13:46:01 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>