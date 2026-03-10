# isInteger

## Descriere

Determină dacă un `value` dat este un număr întreg sigur.

### Caz de utilizare

Validează input neîncrezut (de ex., parametri de query, payload-uri JSON, variabile de mediu) înainte să-l folosești ca
întreg pentru indici de array, paginare, contoare sau ID-uri de bază de date.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isInteger` ca să validezi input necunoscut înainte să-l tratezi ca întreg numeric; întoarce `true` doar
> pentru valori unde `typeof value === "number"` și `Number.isSafeInteger(value)`.

### Avantaje

- E checka atât tipul cât și siguranța numerică: întoarce `true` doar când intrarea e un număr și un întreg sigur.
- Previne capcane comune cu coerciunea numerică: șiruri ca "5" întorc corect `false`.
- Respinge valorile care nu-s întregi și întregii nesiguri, făcându-l potrivit pentru ID-uri, contoare și indexarea
  array-urilor.

## Utilizare

### Sintaxă

Funcție:

- `isInteger(value)`

Parametri:

- `value`: Valoarea de verificat pentru statutul de întreg.

### Import local al funcției

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // adevărat
const b = isInteger(-100);   // adevărat
const c = isInteger("5");    // fals
const d = isInteger(5.5);    // fals
const e = isInteger(null);   // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isInteger(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 00:51:13 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>