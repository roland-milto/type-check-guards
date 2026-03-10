# areJson

## Disgrifiad

Yn gwirio a yw pob elfen mewn arae yn llinyn JSON, gan ddychwelyd `true` dim ond os yw’r arae wedi’i llenwi a bod pob
eitem yn JSON dilys; fel arall yn dychwelyd `false`.

### Achos defnydd

Dilysu data sy’n dod i mewn (e.e., o baramedrau ymholiad, newidynnau amgylchedd, neu APIs allanol) lle rydych yn disgwyl
arae o linynnau wedi’u hamgodio fel JSON ac eisiau gwrthod araeau gwag neu unrhyw gofnodion nad ydynt yn JSON.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areJson` pan fydd angen i chi ddilysu bod `unknown[]` yn cynnwys llinynnau JSON yn unig cyn eu parsio (
> e.e., gyda `JSON.parse`).

### Manteision

- Yn dychwelyd `true` dim ond pan fo pob elfen yn llinyn JSON dilys; fel arall yn dychwelyd `false`.
- Yn methu’n gyflym: yn rhoi’r gorau i wirio cyn gynted ag y canfyddir elfen nad yw’n JSON.
- Yn gwrthod araeau gwag yn fwriadol, gan ddychwelyd `false` ar gyfer mewnbwn heb ei lenwi.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areJson(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio am elfennau sy’n llinynnau JSON.

### Mewnforio swyddogaeth leol

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // gwir
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // ffug
const empty = areJson([]); // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areJson(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areJson](../_analysis/areJson.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 16:15:30 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>