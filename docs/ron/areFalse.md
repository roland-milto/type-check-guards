# areFalse

## Descriere

`areFalse` verifică dacă toate elementele dintr-un array furnizat sunt strict booleanul `false`.

### Caz de utilizare

Validează că o listă de feature flags, verificări sau rezultate de guard sunt toate `false` înainte de a continua (de
ex., confirmă că nu există condiții blocante).

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areFalse` când ai nevoie de o validare strictă că un array nu este gol și conține doar valoarea booleană
`false`.

### Avantaje

- Asigură că fiecare element este strict `false` (fără coerciune truthy/falsey).
- Returnează `false` pentru non-array-uri sau array-uri goale, cerând un array completat prin `isFilledArray`.
- Se oprește devreme la primul element non-`false` pentru eficiență.

## Utilizare

### Sintaxă

Funcție:

- `areFalse(array)`

Parametri:

- `array`: Array-ul de verificat, care conține elemente de orice tip.

### Import local al funcției

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // adevărat
const b = areFalse([false, true, false]);  // fals
const c = areFalse([false, "false", false]); // fals
const d = areFalse([]); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areFalse(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 16:18:26 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>