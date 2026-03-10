# areBigInts

## Descriere

`areBigInts` determină dacă o valoare este un tablou ne-gol care conține doar valori `bigint`.

### Caz de utilizare

Validează intrări necunoscute (de ex., date de tip JSON parsate, payload-uri API sau parametri de funcție tipați ca
`unknown`) pentru a te asigura că este un tablou ne-gol de valori `bigint` înainte de procesare; întoarce `true` doar
când toate elementele sunt `bigint`, altfel `false`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areBigInts` ca un guard la runtime înainte de a efectua operații doar cu `bigint` (de ex., aritmetică,
> comparații) pe intrări necunoscute.

### Avantaje

- Asigură că fiecare element este un `bigint`, întorcând `true` doar când întregul tablou se potrivește.
- Respinge non-tablourile și tablourile goale prin proiectare (prin `isFilledArray`), prevenind acceptarea accidentală a
  intrărilor nevalide.
- Eșec rapid: întoarce `false` imediat ce este găsit un element non-`bigint`.

## Utilizare

### Sintaxă

Funcție:

- `areBigInts(array)`

Parametri:

- `array`: Valoarea de verificat.

### Import local al funcției

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // adevărat
console.log(areBigInts(b)); // fals
console.log(areBigInts(c)); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areBigInts(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 23:27:12 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>