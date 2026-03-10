# areFinite

## Descriere

`areFinite` verifică dacă o valoare este un tablou nevid ale cărui elemente sunt toate numere finite, întorcând `true`
dacă da și `false` în caz contrar.

### Caz de utilizare

Validează tablouri de intrare numerice (de ex., serii de grafice, liste de coordonate, eșantioane de măsurători) înainte
de a efectua calcule, asigurând că rezultatul este `true` numai când toate valorile sunt numere finite.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areFinite` când ai nevoie să te asiguri că un tablou este nevid și conține numai numere finite; întoarce
`false` pentru tablouri goale și pentru tablouri care conțin `NaN` sau infinituri.

### Avantaje

- Întoarce `true` numai când intrarea este un tablou nevid și fiecare element este un număr finit.
- Respinge `Infinity`, `-Infinity` și `NaN` bazându-se pe verificări `isFinite` pentru fiecare element.
- Oferă un rezultat boolean simplu (`true`/`false`) potrivit pentru gărzi și fluxuri de validare.

## Utilizare

### Sintaxă

Funcție:

- `areFinite(array)`

Parametri:

- `array`: Tabloul care urmează să fie verificat pentru finitudinea tuturor elementelor sale.

### Import local al funcției

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // adevărat
console.log(areFinite(b)); // fals
console.log(areFinite(c)); // fals

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areFinite(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 16:36:55 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>