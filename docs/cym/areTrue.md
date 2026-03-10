# areTrue

## Disgrifiad

Yn gwirio a yw arae ddi-wag yn cynnwys dim ond y gwerthoedd booleaidd `true`.

### Achos defnydd

Defnyddiwch `areTrue` i ddilysu bod set o ragamodau neu faneri nodwedd i gyd wedi'u galluogi (pob gwerth yn `true`) cyn
parhau, gan drin mewnbynnau gwag neu gamffurfiedig fel rhai nad ydynt yn bodloni (`false`).

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Mae `areTrue` yn dychwelyd `false` ar gyfer arae wag ac ar gyfer araeau sy'n cynnwys unrhyw werth nad yw'n union
`true`.

### Manteision

- Yn dychwelyd `true` dim ond pan fo pob elfen yn union `true` ac mae'r arae yn ddi-wag.
- Yn methu'n gyflym: yn dychwelyd `false` cyn gynted ag y canfyddir gwerth nad yw'n `true`.
- Yn gwrthod mewnbynnau annilys (nad ydynt yn araeau neu araeau gwag) drwy ddychwelyd `false`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areTrue(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am bob gwerth `true`.

### Mewnforio swyddogaeth leol

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areTrue(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 13:50:47 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>