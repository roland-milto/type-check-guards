# isTrue

## Cur síos

Cinneann `isTrue` an bhfuil luach tugtha cothrom go docht le `true`.

### Cás úsáide

Úsáid `isTrue` chun bratacha, lasca gnéithe, nó luachanna cumraíochta a bhailíochtú nuair nach mór glacadh leis an
litriú `true` amháin agus gach rud eile a láimhseáil mar `false`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isTrue` nuair is gá duit glacadh leis an litriú Boole `true` amháin, ní hamháin luachanna truthy.

### Buntáistí

- Soláthraíonn sé seiceáil dhian ar an litriú Boole `true` (gan comhshó).
- Cabhraíonn sé le `true` a idirdhealú ó luachanna truthy cosúil le `1`, `"true"`, nó `{}`.
- Iompar simplí, intuartha atá oiriúnach do ghardaí agus do phíblínte bailíochtaithe.

## Úsáid

### Comhréir

Feidhm:

- `isTrue(value)`

Paraiméadair:

- `value`: An luach le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // soþ
const b = isTrue(1);         // fals
const c = isTrue("true");   // fals

if (isTrue(a)) {
  // a is soþ her
}
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isTrue(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 13:42:21 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>