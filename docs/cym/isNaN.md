# isNaN

## Disgrifiad

Yn pennu a yw'r `value` a ddarperir yn `NaN` o fath `number` heb drosi llinynnau.

### Achos defnydd

Dilysu mewnbwn nad yw'n ymddiriedus neu sydd â theipio rhydd (e.e. llwythi tâl API, gwerthoedd ffurflen, JSON wedi'i
pharsio) i ganfod y gwerth arbennig `NaN` a'i drin yn benodol, tra'n trin mewnbynnau nad ydynt yn rifau fel rhai nad
ydynt yn `NaN`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isNaN` pan fydd angen i chi ganfod y gwerth rhifiadol arbennig `NaN` gan sicrhau bod y mewnbwn yn
`number` mewn gwirionedd (dim trosi llinyn-i-rif).

### Manteision

- Yn gwirio a yw gwerth yn `NaN` heb orfodi gwerthoedd nad ydynt yn rifau (e.e. llinynnau) i fod yn rifau.
- Yn dychwelyd `true` dim ond ar gyfer gwerthoedd sydd ill dau o fath `number` ac yn `NaN`.
- Yn ddiogel ar gyfer mewnbynnau `unknown` ac yn osgoi canlyniadau positif ffug o drosiadau ymhlyg.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isNaN(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio a yw'n `NaN` o fath `number`.

### Mewnforio swyddogaeth leol

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // gwir
console.log(isNaN(b)); // ffug
console.log(isNaN(c)); // ffug

if (isNaN(a)) {
  // mae a yn rhif ac yn benodol NaN
}
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isNaN(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 15:45:39 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>