# isNaN

## Descriere

Determină dacă `value` furnizată este un `NaN` de tip `number` fără a converti șiruri.

### Caz de utilizare

Validează intrări neîncrezătoare sau slab tipizate (de ex. payload-uri API, valori de formular, JSON parsat) pentru a
detecta valoarea specială `NaN` și a o gestiona explicit, tratând în același timp intrările care nu sunt numere ca
nefiind `NaN`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isNaN` când trebuie să detectezi valoarea numerică specială `NaN`, asigurându-te în același timp că
> intrarea este într-adevăr un `number` (fără conversie din șir în număr).

### Avantaje

- Verifică dacă o valoare este `NaN` fără a constrânge valori care nu sunt numere (de ex. șiruri) în numere.
- Returnează `true` doar pentru valori care sunt atât de tip `number`, cât și `NaN`.
- Sigur pentru intrări `unknown` și evită rezultate fals pozitive din conversii implicite.

## Utilizare

### Sintaxă

Funcție:

- `isNaN(value)`

Parametri:

- `value`: Valoarea care trebuie verificată dacă este un `NaN` de tip `number`.

### Import local al funcției

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // adevărat
console.log(isNaN(b)); // fals
console.log(isNaN(c)); // fals

if (isNaN(a)) {
  // a hi un număr shi anume NaN
}
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isNaN(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 15:47:48 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>