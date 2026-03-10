# areNumerics

## Descriere

`areNumerics` verifică dacă o valoare este un tablou nevid în care toate elementele sunt numerice.

### Caz de utilizare

Folosește `areNumerics` pentru a valida date externe sau netipizate (de ex., payload-uri JSON, parametri de interogare,
intrări de formular) înainte de a calcula sume, medii sau alte operații numerice, asigurând că intrarea este un tablou
numeric nevid și întorcând `false` în caz contrar.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areNumerics` ca gardă pentru intrări `unknown` înainte de a le trata ca tablou numeric; întoarce `false`
> pentru non-tablouri și tablouri goale.

### Avantaje

- Întoarce `true` doar când intrarea este un tablou nevid și fiecare element este numeric.
- Eșuează rapid: se oprește din verificare imediat ce găsește un element nenumeric, întorcând `false`.
- Ajută la validarea în siguranță a unei intrări necunoscute înainte de a efectua operații numerice.

## Utilizare

### Sintaxă

Funcție:

- `areNumerics(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru elemente numerice.

### Import local al funcției

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // adevărat
console.log(areNumerics(b)); // adevărat
console.log(areNumerics(c)); // fals
console.log(areNumerics(d)); // fals
console.log(areNumerics(e)); // fals

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // nul
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areNumerics(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 16:07:08 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>