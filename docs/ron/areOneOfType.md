# areOneOfType

## Descriere

`areOneOfType` verifică dacă toate elementele dintr-un array ne-gol sunt de unul dintre tipurile specificate la runtime.

### Caz de utilizare

Validează datele de intrare (de ex., JSON parsat) unde un câmp trebuie să fie un array ne-gol ale cărui elemente sunt
restricționate la un set cunoscut de tipuri primitive; returnează `false` când array-ul este gol sau conține orice tip
nepermis.

> **Notă pentru utilizatorii TypeScript:**
>
> Această funcție returnează un boolean și nu restrânge tipurile elementelor din array la timpul de compilare;
> folosește-o ca pas de validare la runtime înainte de procesare ulterioară.

### Avantaje

- Asigură că fiecare element dintr-un array se potrivește cu cel puțin un tip permis la runtime, returnând `true` doar
  când întregul array trece verificarea.
- Respinge devreme intrările invalide: returnează `false` când `array` sau `types` este gol sau nu este un array
  populat.
- Util pentru validarea colecțiilor cu tipuri mixte (de ex., numere și șiruri) cu un singur apel la `areOneOfType`.

## Utilizare

### Sintaxă

Funcție:

- `areOneOfType(array, types)`

Parametri:

- `array`: Un array de elemente de verificat față de tipurile furnizate.
- `types`: Un array de șiruri care reprezintă tipurile de date față de care se verifică.

### Import local al funcției

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areOneOfType(array, types)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 23:38:24 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>