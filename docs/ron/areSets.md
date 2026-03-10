# areSets

## Descriere

Verifică dacă un array dat, ne-gol, conține numai instanțe `Set`, întorcînd `true` dacă da și `false` altfel.

### Caz de utilizare

Validează că o valoare (de ex., din intrare de la utilizator, parsare JSON, sau API-uri externe) este un array ne-gol de
obiecte `Set` înainte de a procesa fiecare set.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areSets` ca să validezi intrare necunoscută înainte de a itera și a chema API-urile `Set` (de ex., `.size`,
`.has`, `.add`) pe fiecare element.

### Avantaje

- Întoarce `true` numai cînd intrarea este un array ne-gol și fiecare element este o instanță `Set`.
- Previne rezultate fals pozitive pentru array-uri goale prin întoarcerea lui `false` cînd array-ul n-are niciun
  element.
- Folositor ca o verificare la runtime înainte de a face operațiuni specifice `Set` pe fiecare element.

## Utilizare

### Sintaxă

Funcție:

- `areSets(array)`

Parametri:

- `array`: Array-ul care urmează să fie verificat pentru instanțe `Set`.

### Import local al funcției

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a este un tablou de instanțe Set la rulare
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // fals
console.log(areSets(c)); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areSets(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areSets](../_analysis/areSets.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 23:15:04 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>