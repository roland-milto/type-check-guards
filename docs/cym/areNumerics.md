# areNumerics

## Disgrifiad

Mae `areNumerics` yn gwirio a yw gwerth yn arae nad yw'n wag lle mae pob elfen yn rhifol.

### Achos defnydd

Defnyddiwch `areNumerics` i ddilysu data allanol neu ddata heb deip (e.e., llwythi JSON, paramedrau ymholiad, mewnbwn
ffurflen) cyn cyfrifo symiau, cyfartaleddau, neu weithrediadau rhifol eraill, gan sicrhau bod y mewnbwn yn arae rhifol
nad yw'n wag a dychwelyd `false` fel arall.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areNumerics` i warchod mewnbwn `unknown` cyn ei drin fel arae rhifol; mae'n dychwelyd `false` ar gyfer
> rhai nad ydynt yn araeau ac ar gyfer araeau gwag.

### Manteision

- Yn dychwelyd `true` dim ond pan fo'r mewnbwn yn arae nad yw'n wag a bod pob elfen yn rhifol.
- Yn methu'n gyflym: yn stopio gwirio cyn gynted ag y canfyddir elfen nad yw'n rhifol, gan ddychwelyd `false`.
- Yn helpu i ddilysu mewnbwn anhysbys yn ddiogel cyn perfformio gweithrediadau rhifol.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areNumerics(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am elfennau rhifol.

### Mewnforio swyddogaeth leol

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // gwir
console.log(areNumerics(b)); // gwir
console.log(areNumerics(c)); // ffug
console.log(areNumerics(d)); // ffug
console.log(areNumerics(e)); // ffug

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areNumerics(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 16:04:38 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>