# areUndefined

## Descriere

`areUndefined` verifică dacă fiecare element dintr-un array furnizat este `undefined`.

### Caz de utilizare

Validează că o listă de rezultate opționale nu conține valori reale (doar `undefined`), de ex., după maparea căutărilor
unde intrările lipsă sînt reprezentate ca `undefined`, și vrei să confirmi că toate căutările au eșuat.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areUndefined` cînd ai nevoie să afirmi că un `unknown[]` conține doar valori `undefined`; întoarce `false`
> pentru array-uri goale și intrări non-array/invalide din cauza verificării interne `isFilledArray`.

### Avantaje

- Întoarce `false` pentru non-array-uri și array-uri goale, cerînd un array umplut prin `isFilledArray`.
- Asigură că fiecare element este `undefined`, nu doar unele, făcînd intenția explicită.
- Util ca predicat de tip guard la validarea colecțiilor de intrare necunoscute.

## Utilizare

### Sintaxă

Funcție:

- `areUndefined(array)`

Parametri:

- `array`: Array-ul de verificat pentru elemente `undefined`.

### Import local al funcției

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Nota: turna false pa array vacui
const r4 = areUndefined([]); // false

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areUndefined(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 13:57:39 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>