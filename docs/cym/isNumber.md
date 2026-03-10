# isNumber

## Disgrifiad

Mae `isNumber` yn gwirio a yw gwerth yn rhif terfynol, nad yw'n `NaN`.

### Achos defnydd

Dilysu mewnbwn rhifol o ffynonellau nad ydynt yn ymddiriedus (ffurflenni, paramedrau ymholiad, llwythi JSON) cyn
cyfrifiadau, storio, neu wiriadau ystod, gan sicrhau mai dim ond rhifau terfynol sy'n pasio (`true`) a bod popeth arall
yn dychwelyd `false`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isNumber` i ddilysu gwerthoedd `unknown` cyn gwneud rhifyddeg; mae'n gwrthod `NaN`, `Infinity`, a
`-Infinity`.

### Manteision

- Yn dychwelyd `true` dim ond ar gyfer rhifau JavaScript go iawn (gwiriad math ynghyd â gwrthod `NaN` ac anfeidredd).
- Yn atal bygiau dilysu cyffredin lle mae `NaN`, `Infinity`, neu `-Infinity` yn pasio fel rhifau ar ddamwain.
- Yn gweithio'n dda fel gwarchodwr amser rhedeg ar gyfer mewnbwn anhysbys (e.e., JSON, mewnbwn defnyddiwr, APIs
  allanol).
- Syml, cyflym, ac yn rhydd o sgîl-effeithiau.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isNumber(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // mae input yn rhif cyfyngedig dilys
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isNumber(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 13:08:39 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>