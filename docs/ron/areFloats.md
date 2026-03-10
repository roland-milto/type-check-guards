# areFloats

## Descriere

`areFloats` verifică dacă un array dat este plin și toate elementele lui sunt float-uri.

### Caz de utilizare

Folosește `areFloats` când primești un `unknown[]` (de ex., din JSON, parametri de query sau API-uri externe) și ai
nevoie să te asiguri că este un array plin în care fiecare element este un float înainte de a rula logică numerică
precum media, interpolarea sau calcule statistice.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areFloats` ca gardă pentru `unknown[]` înainte de a-l trata ca `number[]` care conține doar float-uri;
> întoarce `false` pentru array-uri goale și pentru orice element care nu este float.

### Avantaje

- Întoarce `true` doar când intrarea este un array ne-gol și fiecare element este un float.
- Eșuează rapid: întoarce `false` imediat ce este găsit un element care nu este float.
- Ajută la validarea unei intrări necunoscute înainte de a efectua calcule specifice pentru float.

## Utilizare

### Sintaxă

Funcție:

- `areFloats(array)`

Parametri:

- `array`: Array-ul de verificat pentru elemente float.

### Import local al funcției

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // adevărat
console.log(areFloats(b)); // fals
console.log(areFloats(c)); // fals

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // nul
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areFloats(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 15:59:20 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>