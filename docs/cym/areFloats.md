# areFloats

## Disgrifiad

Mae `areFloats` yn gwirio a yw arae benodol wedi'i llenwi a bod ei holl elfennau yn rifau arnofiol.

### Achos defnydd

Defnyddiwch `areFloats` pan fyddwch yn derbyn `unknown[]` (e.e., o JSON, paramedrau ymholiad, neu APIs allanol) ac mae
angen i chi sicrhau ei fod yn arae wedi'i llenwi lle mae pob eitem yn rhif arnofiol cyn rhedeg rhesymeg rifiadol megis
cyfartalu, rhyngosod, neu gyfrifiadau ystadegol.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areFloats` i warchod `unknown[]` cyn ei drin fel `number[]` sy'n cynnwys rhifau arnofiol yn unig; mae'n
> dychwelyd `false` ar gyfer araeau gwag ac ar gyfer unrhyw elfen nad yw'n rhif arnofiol.

### Manteision

- Yn dychwelyd `true` dim ond pan fo'r mewnbwn yn arae nad yw'n wag a bod pob elfen yn rhif arnofiol.
- Yn methu'n gyflym: yn dychwelyd `false` cyn gynted ag y canfyddir elfen nad yw'n rhif arnofiol.
- Yn helpu i ddilysu mewnbwn anhysbys cyn perfformio cyfrifiadau penodol i rifau arnofiol.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areFloats(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am elfennau rhif arnofiol.

### Mewnforio swyddogaeth leol

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // gwir
console.log(areFloats(b)); // ffug
console.log(areFloats(c)); // ffug

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areFloats(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 15:56:51 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>