# areHexadecimals

## Disgrifiad

Yn gwirio a yw pob elfen mewn arae yn llinyn hecsadegol, gan ddychwelyd `true` dim ond ar gyfer araeau nad ydynt yn wag
lle mae pob eitem yn ddilys.

### Achos defnydd

Defnyddiwch `areHexadecimals` i ddilysu mewnbwn defnyddiwr neu ddata allanol (e.e., IDau, siecsymiau, codau lliw heb '#'
ar y dechrau) cyn perfformio dadansoddi hecsadegol neu brosesu pellach.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areHexadecimals` i ddilysu mewnbwn anhysbys cyn ei ddadansoddi neu drosi gwerthoedd (er enghraifft, cyn
`parseInt(value, 16)` neu drosiadau BigInt).

### Manteision

- Yn dilysu bod pob elfen yn llinyn hecsadegol ac yn dychwelyd `true` dim ond pan fo pob eitem yn cyfateb.
- Yn gwrthod araeau gwag yn fwriadol, gan ddychwelyd `false` pan fo data mewnbwn ar goll.
- Yn darparu canlyniad boole syml (`true`/`false`) sy'n addas ar gyfer gwarchodwyr a dilysu dychwelyd-cynnar.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areHexadecimals(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am elfennau sy'n llinynnau hecsadegol.

### Mewnforio swyddogaeth leol

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areHexadecimals(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 23:05:47 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>