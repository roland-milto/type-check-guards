# isFinite

## Disgrifiad

Yn pennu a yw `value` penodol yn `number` terfynol.

### Achos defnydd

Defnyddiwch `isFinite` i ddilysu mewnbwn anhysbys (e.e., o JSON, ffurflenni, neu APIs) cyn perfformio cyfrifiadau
rhifiadol, gan sicrhau bod y gwerth yn rhif go iawn, terfynol.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Mae `isFinite` yn dychwelyd `true` dim ond ar gyfer rhifau terfynol; mae'n dychwelyd `false` ar gyfer `NaN`,
`Infinity`, ac unrhyw werth nad yw'n rhif.

### Manteision

- Yn defnyddio'r `Number.isFinite` adeiledig ar gyfer gwiriad terfynoldeb dibynadwy.
- Yn dychwelyd `true` dim ond ar gyfer rhifau terfynol; yn dychwelyd `false` ar gyfer `NaN`, `Infinity`, a mewnbynnau
  nad ydynt yn rhif.
- Rhagfynegiad syml, heb sgil-effeithiau, sy'n addas ar gyfer dilysu a rhesymeg gwarchod.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isFinite(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio am derfynoldeb.

### Mewnforio swyddogaeth leol

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers yw: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // mae value yn rhif cyfyngedig yma
  const doubled = value * 2;
  console.log(doubled);
}
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isFinite(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 16:29:25 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>