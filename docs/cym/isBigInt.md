# isBigInt

## Disgrifiad

Mae `isBigInt` yn gwirio a yw gwerth penodol o fath `bigint`, gan ddychwelyd `true` ar gyfer cyntefigion BigInt a
`false` fel arall.

### Achos defnydd

Dilysu a chulhau gwerthoedd sy’n dod o ffynonellau heb deip (e.e., dosrannu JSON, mewnbwn defnyddiwr, APIs allanol) cyn
perfformio cyfrifiadau sy’n benodol i BigInt neu eu storio mewn meysydd sy’n derbyn BigInt yn unig.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isBigInt` i gulhau `unknown` i `bigint` cyn gwneud rhifyddeg BigInt (e.e., `+`, `*`) sy’n gofyn am
> weithredynnau BigInt.

### Manteision

- Yn darparu gwiriad amser rhedeg syml a dibynadwy ar gyfer y math cyntefig `bigint`.
- Yn helpu i gulhau gwerthoedd `unknown` cyn perfformio gweithrediadau sy’n benodol i BigInt yn unig.
- Yn osgoi canlyniadau positif ffug: mae rhifau arferol, llinynnau, a mathau eraill yn dychwelyd `false`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isBigInt(value)`

Paramedrau:

- `value`: Y gwerth i’w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // gwir
console.log(isBigInt(10));  // ffug
console.log(isBigInt("10")); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isBigInt(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 23:31:34 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>