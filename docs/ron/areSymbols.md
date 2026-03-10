# areSymbols

## Descriere

Verifică dacă o intrare este un tablou umplut ale cărui elemente sunt toate simboluri, întorcând `true` sau `false`.

### Caz de utilizare

Validează că un câmp de configurare (de ex., o listă de chei unice reprezentate ca simboluri) este un tablou ne-gol care
conține numai simboluri înainte de a-l folosi în API-uri care cer `symbol[]`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areSymbols` pentru a valida o intrare necunoscută înainte de a o trata ca `symbol[]`; întoarce `false`
> pentru non-tablouri și tablouri goale.

### Avantaje

- Întoarce `true` numai atunci când intrarea este un tablou ne-gol și fiecare element este un simbol.
- Previne rezultate fals pozitive prin respingerea non-tablourilor și a tablourilor goale prin verificarea internă de
  tablou umplut.
- Util ca gardă de tip la runtime pentru validarea listelor alcătuite doar din simboluri înainte de procesare
  ulterioară.

## Utilizare

### Sintaxă

Funcție:

- `areSymbols(array)`

Parametri:

- `array`: Tabloul care urmează să fie verificat pentru elemente de tip simbol.

### Import local al funcției

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a este un tablou numai de simboluri la rulare
  const first = a[0];
  console.log(typeof first); // "simbol"
}

console.log(areSymbols(b)); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areSymbols(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 14:23:34 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>