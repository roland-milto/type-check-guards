# areEqual

## Disgrifiad

Mae `areEqual` yn gwirio a yw pob elfen mewn arae yn hafal i werth disgwyliedig penodol, gan ddychwelyd `true` dim ond
ar gyfer araeau nad ydynt yn wag lle mae pob eitem yn cyfateb.

### Achos defnydd

Dilysu bod rhestr yn cynnwys un gwerth a ganiateir yn unig (e.e., bod pob baner statws yn `true`, bod pob rôl yn
`"admin"`, neu fod pob cofnod rhifol yn hafal i gysonyn gofynnol) tra'n trin mewnbwn gwag fel annilys (`false`).

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areEqual` pan fydd angen gwiriad llym ar gyfer pob eitem; mae'n dychwelyd `false` ar gyfer araeau gwag ac
> ar gyfer unrhyw fewnbwn nad yw'n arae neu nad yw wedi'i lenwi.

### Manteision

- Yn dychwelyd `true` dim ond pan fo pob elfen yn cyfateb i'r gwerth disgwyliedig; fel arall yn dychwelyd `false`.
- Yn methu'n gyflym: yn rhoi'r gorau i wirio cyn gynted ag y canfyddir elfen nad yw'n cyfateb.
- Yn amddiffyn rhag mewnbwn annilys drwy ddychwelyd `false` pan nad yw'r mewnbwn yn arae wedi'i llenwi.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areEqual(value, expected)`

Paramedrau:

- `value`: Yr arae i'w gwirio.
- `expected`: Yr elfen i gymharu pob eitem yn yr arae yn ei herbyn.

### Mewnforio swyddogaeth leol

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areEqual(value, expected)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 23:50:06 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>