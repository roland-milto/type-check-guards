# isFloat

## Disgrifiad

Mae `isFloat` yn penderfynu a yw `value` penodol yn rhif pwynt arnawf terfynol (sef `number` nad yw'n gyfanrif).

### Achos defnydd

Dilysu mewnbwn rhifol a ddarperir gan ddefnyddiwr lle mae angen gwerthoedd ffracsiynol (e.e., prisiau, mesuriadau,
cyfraddau) a gwrthod cyfanrifau, `NaN`, ac anfeidredd.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isFloat` pan fydd angen derbyn mewnbynnau rhifol terfynol nad ydynt yn gyfanrifau yn unig; mae'n gwrthod
> cyfanrifau a rhifau nad ydynt yn derfynol.

### Manteision

- Yn dychwelyd `true` dim ond ar gyfer rhifau terfynol, nad ydynt yn gyfanrifau (yn eithrio cyfanrifau, `NaN`,
  `Infinity`, a `-Infinity`).
- Yn gweithio gydag unrhyw fath o fewnbwn (`unknown`) ac yn culhau'n ddiogel drwy wirio `typeof value === "number"`.
- Yn defnyddio gwarchodwyr rhifol adeiledig (`Number.isInteger`, `Number.isFinite`) ar gyfer ymddygiad rhagweladwy.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isFloat(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio a yw'n rhif pwynt arnawf.

### Mewnforio swyddogaeth leol

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // mae value yn rhif ar amser rhedeg; mae'n gyfyngedig ac nid yn gyfanrif
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isFloat(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 16:07:16 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>