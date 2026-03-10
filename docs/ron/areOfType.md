# areOfType

## Descriere

Verifică dacă toate elementele din `array`-ul dat sunt de `type`-ul specificat.

### Caz de utilizare

Folosește `areOfType` pentru a valida input necunoscut (de ex., JSON parsat, payload-uri API, input de la utilizator)
înainte de a efectua operații specifice tipului pe fiecare element al unui array.

> **Notă pentru utilizatorii TypeScript:**
>
> Deoarece `areOfType` este un type guard, TypeScript restrânge array-ul în interiorul unui bloc
`if (areOfType(...)) {}` la `Array<DataTypeOf<T>>`.

### Avantaje

- Oferă un TypeScript type guard: când returnează `true`, inputul este restrâns la `Array<DataTypeOf<T>>`.
- Validează fiecare element față de tipul runtime solicitat, împiedicând trecerea array-urilor cu tipuri amestecate.
- Eșuează rapid: returnează `false` imediat ce este găsit un element care nu se potrivește.
- Respinge non-array-urile și array-urile goale prin design (depinde de `isFilledArray`).

## Utilizare

### Sintaxă

Funcție:

- `areOfType(array, type)`

Parametri:

- `array`: Array-ul de verificat.
- `type`: Tipul față de care se verifică fiecare element din array.

### Import local al funcției

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values este acum number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areOfType(array, type)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 17:11:08 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>