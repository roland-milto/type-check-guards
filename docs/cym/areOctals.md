# areOctals

## Disgrifiad

Mae `areOctals` yn penderfynu a yw’r gwerth a ddarperir yn arae nad yw’n wag o linynnau wythol dilys.

### Achos defnydd

Defnyddiwch `areOctals` wrth ddilysu mewnbwn defnyddiwr, gwerthoedd ffurfweddu, neu lwythi tâl API sy’n gorfod cynnwys
llythrenolion wythol (e.e., moddau caniatâd ffeil fel `0o755`) ac rydych am wrthod araeau gwag neu unrhyw gofnodion
annilys drwy ddychwelyd `false`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areOctals` i sicrhau bod gennych `unknown[]` nad yw’n wag lle mae pob cofnod yn llinyn wythol dilys cyn
> trosi (e.e., drwy `Number(...)` neu ddosrannu personol).

### Manteision

- Yn dilysu bod gwerth yn arae nad yw’n wag lle mae pob elfen yn llinyn wythol, gan ddychwelyd `true` dim ond pan fydd
  pob eitem yn pasio.
- Yn methu’n gyflym: yn dychwelyd `false` cyn gynted ag y canfyddir elfen nad yw’n wythol.
- Yn ddefnyddiol fel gwarchodwr cyn dosrannu neu drosi llinynnau wythol i osgoi gwallau amser rhedeg a thrin mewnbwn
  anghyson.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areOctals(array)`

Paramedrau:

- `array`: Y gwerth i’w wirio.

### Mewnforio swyddogaeth leol

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // mae value yn arae nad yw'n wag o linynnau wythol
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areOctals(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 14:44:38 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>