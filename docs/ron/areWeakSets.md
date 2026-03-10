# areWeakSets

## Descriere

Verifică dacă o intrare este un tablou ne-gol în care fiecare element este un `WeakSet`, returnând `true` doar în acest
caz.

### Caz de utilizare

Validează intrarea la rulare (de ex., din API-uri, configurație sau date furnizate de utilizator) pentru a te asigura că
ai o listă ne-goală de instanțe `WeakSet` înainte de a continua cu logica ce depinde de comportamentul `WeakSet`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areWeakSets` pentru a valida o intrare necunoscută înainte de a o trata ca `WeakSet[]`. Returnează `false`
> pentru tablouri goale și pentru non-tablouri.

### Avantaje

- Asigură că fiecare element din tabloul de intrare este un `WeakSet`.
- Returnează `false` pentru tablouri goale, prevenind rezultate accidentale de tip „toate valide” atunci când lipsesc
  datele.
- Eșuează în siguranță prin returnarea `false` atunci când intrarea nu este un tablou populat (inclusiv `null`).
- Util ca gardă înainte de a efectua operații care necesită instanțe `WeakSet`.

## Utilizare

### Sintaxă

Funcție:

- `areWeakSets(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru obiecte `WeakSet`.

### Import local al funcției

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a este un tablou nevid de instanțe WeakSet
}

console.log(areWeakSets(a)); // adevărat
console.log(areWeakSets(b)); // fals
console.log(areWeakSets(c)); // fals
console.log(areWeakSets(null as unknown)); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areWeakSets(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 14:10:40 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>