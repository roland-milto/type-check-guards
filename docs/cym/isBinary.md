# isBinary

## Disgrifiad

Mae `isBinary` yn penderfynu a yw gwerth yn llinyn deuaidd (gyda rhagddodiad `0b`/`0B` yn ddewisol) ac yn dychwelyd
`true` neu `false`.

### Achos defnydd

Dilysu llinynnau a ddarperir gan ddefnyddwyr (e.e. meysydd ffurflen, dadleuon CLI, gwerthoedd ffurfweddu) i sicrhau eu
bod yn cynrychioli digidau deuaidd yn unig, gyda rhagddodiad `0b`/`0B` yn ddewisol, cyn prosesu pellach.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isBinary` fel gwarchodwr math cyn dosrannu neu drosi llinyn i `BigInt`/`Number` er mwyn osgoi mewnbwn
> annilys.

### Manteision

- Yn derbyn llinynnau deuaidd gyda neu heb y rhagddodiad `0b`/`0B`.
- Yn gwrthod llinynnau gwag a llinynnau gyda bylchau gwyn ar y dechrau/diwedd (ASCII ≤ 32).
- Yn dychwelyd `true`/`false` heb daflu eithriad, gan ei wneud yn ddiogel ar gyfer mewnbynnau anhysbys.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isBinary(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // gwir
const b = isBinary("1010");   // gwir
const c = isBinary("0b1020"); // ffug
const d = isBinary(0b1010);     // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isBinary(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 23:09:34 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>