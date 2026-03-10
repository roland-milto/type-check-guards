# areOneOfType

## Disgrifiad

Mae `areOneOfType` yn gwirio a yw pob elfen mewn arae nad yw’n wag yn un o’r mathau amser-rhedeg penodedig.

### Achos defnydd

Dilysu data sy’n dod i mewn (e.e., JSON wedi’i pharsio) lle mae’n rhaid i faes fod yn arae nad yw’n wag ac y mae ei
eitemau wedi’u cyfyngu i set hysbys o fathau cyntefig; dychwelyd `false` pan fo’r arae yn wag neu’n cynnwys unrhyw fath
na chaniateir.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Mae’r swyddogaeth hon yn dychwelyd boolean ac nid yw’n culhau mathau elfennau’r arae ar amser cyfansoddi; defnyddiwch
> hi fel cam dilysu amser-rhedeg cyn prosesu pellach.

### Manteision

- Yn sicrhau bod pob elfen mewn arae yn cyfateb i o leiaf un math amser-rhedeg a ganiateir, gan ddychwelyd `true` dim
  ond pan fydd yr arae gyfan yn pasio.
- Yn gwrthod mewnbynnau annilys yn gynnar: yn dychwelyd `false` pan fo `array` neu `types` yn wag neu ddim yn arae
  wedi’i llenwi.
- Yn ddefnyddiol ar gyfer dilysu casgliadau o fathau cymysg (e.e., rhifau a llinynnau) gydag un alwad i `areOneOfType`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areOneOfType(array, types)`

Paramedrau:

- `array`: Arae o elfennau i’w gwirio yn erbyn y mathau a ddarperir.
- `types`: Arae o linynnau sy’n cynrychioli’r mathau data i’w gwirio yn eu herbyn.

### Mewnforio swyddogaeth leol

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areOneOfType(array, types)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 23:36:28 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>