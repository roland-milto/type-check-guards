# areIndexesFound

## Descriere

`areIndexesFound` verifică dacă o valoare este un tablou ne-gol ale cărui elemente sunt toate indexuri valide, întorcând
`true` dacă sunt și `false` în caz contrar.

### Caz de utilizare

Validează date furnizate de utilizator sau externe (de ex., JSON parsat) despre care se așteaptă să fie o listă de
indexuri înainte de a le folosi pentru a accesa sau a decupa (slice) tablouri.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areIndexesFound` pentru a valida o intrare necunoscută înainte de a trata elementele ei ca indexuri de
> tablou; întoarce `false` pentru tablouri goale și pentru tablouri care conțin valori ce nu sunt indexuri.

### Avantaje

- Întoarce `true` numai atunci când intrarea este un tablou ne-gol și fiecare element este un index valid.
- Eșuează rapid: întoarce `false` imediat ce este întâlnit un element care nu este index.
- Util ca gardă înainte de a folosi valori ca poziții sau deplasări (offset-uri) în tablou.

## Utilizare

### Sintaxă

Funcție:

- `areIndexesFound(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru conformitatea cu indexurile.

### Import local al funcției

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // adevărat
console.log(areIndexesFound(b)); // fals
console.log(areIndexesFound(c)); // fals

if (areIndexesFound(a)) {
  // Aici, `a` este confirmat ca fiind un tablou de indici completat.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areIndexesFound(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 01:04:00 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>