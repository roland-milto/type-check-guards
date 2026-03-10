# isIndexFound

## Descriere

`isIndexFound` determină dacă o valoare dată este un întreg nenegativ, indicând că a fost găsit un index.

### Caz de utilizare

Validează că rezultatul unei căutări reprezintă un index utilizabil (întreg `>= 0`) înainte de a indexa într-un array
sau șir, prevenind folosirea accidentală a lui `-1` sau a valorilor nenumerice.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isIndexFound` după operații precum `indexOf`, `findIndex` sau căutări personalizate unde `-1` (sau alte
> valori invalide) poate indica „negăsit”. Când returnează `true`, valoarea este un număr și este sigur de folosit ca
> index pentru array/șir.

### Avantaje

- Oferă un guard de tip simplu pentru a detecta dacă a fost găsit un index, verificând dacă este un întreg nenegativ.
- Returnează `true` doar pentru valori valide de tip index (întregi `>= 0`), respingând valorile negative, neîntregi și
  nenumerice.
- Ajută la evitarea greșelilor de tip off-by-one și a erorilor cu valori-sentinelă atunci când lucrezi cu API-uri care
  returnează `-1` pentru „negăsit”.

## Utilizare

### Sintaxă

Funcție:

- `isIndexFound(value)`

Parametri:

- `value`: Valoarea de verificat pentru a fi un întreg nenegativ.

### Import local al funcției

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx este un număr aici și este >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Uz tipic cu indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isIndexFound(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 00:47:37 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>