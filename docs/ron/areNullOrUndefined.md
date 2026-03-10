# areNullOrUndefined

## Descriere

Verifică dacă toate elementele din tabloul dat sînt `null` sau `undefined`.

### Caz de utilizare

Validează că o listă de cîmpuri opționale nu conține valori reale (numai `null`/`undefined`) înainte de a decide să sari
peste procesare sau să afișezi o stare „nu s-au furnizat valori”.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areNullOrUndefined` cînd ai nevoie să verifici că un tablou conține numai valori lipsă (`null`/
`undefined`). Ține minte că întoarce `false` pentru un tablou gol.

### Avantaje

- Întoarce `true` numai atunci când fiecare element este `null` sau `undefined`.
- Întoarce `false` pentru tablouri goale, ajutînd să se deosebească „fără date” de „toate valorile lipsesc”.
- Funcționează cu `unknown[]`, făcîndu-l sigur de folosit înainte de restrîngerea tipurilor.

## Utilizare

### Sintaxă

Funcție:

- `areNullOrUndefined(array)`

Parametri:

- `array`: Tabloul de verificat.

### Import local al funcției

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areNullOrUndefined(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 00:31:18 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>