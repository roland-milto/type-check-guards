# areHexadecimals

## Descriere

Verifică dacă toate elementele dintr-un tablou sunt șiruri hexadecimale, întorcând `true` doar pentru tablouri ne-goale
în care fiecare element este valid.

### Caz de utilizare

Folosește `areHexadecimals` pentru a valida intrarea utilizatorului sau date externe (de ex., ID-uri, sume de control,
coduri de culoare fără un '#' la început) înainte de a face parsare hexadecimală sau procesare ulterioară.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areHexadecimals` pentru a valida intrări necunoscute înainte de parsare sau conversia valorilor (de
> exemplu, înainte de `parseInt(value, 16)` sau conversii BigInt).

### Avantaje

- E validatează că fiecare element este un șir hexadecimal și întoarce `true` doar când toate elementele se potrivesc.
- Respinge tablourile goale prin design, întorcând `false` pentru date de intrare lipsă.
- Oferă un rezultat boolean simplu (`true`/`false`) potrivit pentru gărzi și validare cu întoarcere timpurie.

## Utilizare

### Sintaxă

Funcție:

- `areHexadecimals(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru elemente șiruri hexadecimale.

### Import local al funcției

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areHexadecimals(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 23:07:41 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>