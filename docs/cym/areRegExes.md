# areRegExes

## Disgrifiad

Mae `areRegExes` yn gwirio a yw gwerth yn arae wedi'i llenwi sy'n cynnwys dim ond gwrthrychau `RegExp`.

### Achos defnydd

Dilysu bod opsiwn ffurfweddiad (e.e., rhestr o batrymau caniatáu/gwrthod) yn arae nad yw'n wag o fynegiannau rheolaidd
cyn ei ddefnyddio ar gyfer paru.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areRegExes` i gulhau `unknown` i `RegExp[]` cyn iteru neu gyfansoddi patrymau.

### Manteision

- Yn sicrhau bod gwerth yn arae nad yw'n wag lle mae pob elfen yn enghraifft `RegExp`.
- Yn darparu gwarchodwr boole syml (`true`/`false`) ar gyfer dilysu mewnbwn defnyddiwr neu ffurfweddiad.
- Yn helpu i atal gwallau amser rhedeg pan fydd cod diweddarach yn tybio bod pob eitem yn cefnogi gweithrediadau
  mynegiant rheolaidd.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areRegExes(array)`

Paramedrau:

- `array`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // mae patterns yn arae o RegExp yma
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areRegExes(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 23:17:21 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>