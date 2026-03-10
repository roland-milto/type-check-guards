# areDecimals

## Disgrifiad

Yn gwirio a yw pob elfen mewn arae yn rhifau degol ac a yw’r arae wedi’i llenwi, gan ddychwelyd `true` neu `false`.

### Achos defnydd

Dilysu rhestrau a ddarperir gan ddefnyddwyr (e.e., colofnau CSV neu fewnbynnau ffurflen) i sicrhau nad yw’r arae yn wag
a bod pob cofnod yn werth degol cyn ei barso neu wneud cyfrifiadau.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areDecimals` pan fydd angen gwiriad booleaidd cyflym arnoch fod `unknown[]` yn ddi-wag a bod pob elfen yn
> gynrychiolaeth ddegol.

### Manteision

- Yn sicrhau bod y mewnbwn yn arae wedi’i llenwi cyn dilysu eitemau, gan atal derbyn rhestrau gwag yn ddamweiniol.
- Yn dilysu pob elfen gyda `isDecimal`, felly mae gwerthoedd cymysg neu annilys yn achosi canlyniad `false` ar unwaith.
- Yn darparu canlyniad booleaidd syml (`true`/`false`) sy’n addas ar gyfer gwarchodwyr a llifoedd dilysu
  dychwelyd-yn-gynnar.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areDecimals(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio.

### Mewnforio swyddogaeth leol

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // gwir
console.log(areDecimals(b)); // ffug
console.log(areDecimals(c)); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areDecimals(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 15:56:48 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>