# areIntegers

## Descriere

`areIntegers` determină dacă toate elementele dintr-un tablou dat sunt întregi, întorcând `true` dacă sunt și `false` în
caz contrar.

### Caz de utilizare

Folosește `areIntegers` pentru a valida date furnizate de utilizator sau externe (de ex., parametri de interogare,
payload-uri JSON, rânduri CSV) când logica ta necesită o listă plină de valori întregi precum ID-uri, contoare,
offset-uri de paginare sau indici de tablou.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areIntegers` ca un guard la rulare pentru intrări `unknown[]` înainte de a le trata ca `number[]` care
> conține doar întregi. Dacă întoarce `false`, intrarea fie nu este un tablou plin, fie conține cel puțin o valoare care
> nu este întreg.

### Avantaje

- Întoarce `true` doar când fiecare element este un întreg; altminteri întoarce `false`.
- Ajută la validarea intrărilor necunoscute înainte de a efectua operații doar cu întregi (de ex., indexare, numărări,
  ID-uri).
- Eșuează rapid: se oprește din verificare imediat ce este găsit un element care nu este întreg.

## Utilizare

### Sintaxă

Funcție:

- `areIntegers(array)`

Parametri:

- `array`: Tabloul de verificat pentru elemente întregi.

### Import local al funcției

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // adevărat
console.log(areIntegers(b)); // adevărat
console.log(areIntegers(c)); // fals

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areIntegers(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 01:00:11 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>