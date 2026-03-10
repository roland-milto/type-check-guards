# areWeakMaps

## Descriere

`areWeakMaps` verifică dacă o valoare este un tablou ne-gol în care fiecare element este un `WeakMap`, întorcând `true`
numai în acest caz și `false` în caz contrar.

### Caz de utilizare

Validează date la rulare (de ex., JSON parsat, intrări de plugin sau configurație tipată lejer) pentru a te asigura că
este un tablou ne-gol de instanțe `WeakMap` înainte de a itera și a apela metode `WeakMap`; întoarce `false` când orice
element nu este un `WeakMap` sau când tabloul este gol.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areWeakMaps` pentru a valida intrări necunoscute înainte de a le trata ca un `WeakMap[]` ne-gol; întoarce
`false` pentru tablouri goale.

### Avantaje

- Asigură că fiecare element din tabloul furnizat este o instanță `WeakMap`.
- Întoarce `false` pentru tablouri goale, prevenind acceptarea accidentală a „lipsei de date” ca intrare validă.
- Util ca gardă înainte de a efectua operații specifice `WeakMap` asupra tuturor elementelor.

## Utilizare

### Sintaxă

Funcție:

- `areWeakMaps(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru instanțe `WeakMap`.

### Import local al funcției

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // lista este un tablou nevid de instanțe WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // nu este un WeakMap[] nevid
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areWeakMaps(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 13:39:10 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>