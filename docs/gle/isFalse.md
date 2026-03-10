# isFalse

## Cur síos

Seiceálann `isFalse` an bhfuil luach tugtha cothrom go docht leis an litriú Boole `false`.

### Cás úsáide

Bailíochtaigh sonraí anaithnid (m.sh., ó JSON, paraiméadair iarratais, nó ionchur úsáideora) nuair nár cheart ach an
luach Boole follasach `false` a chóireáil mar bhratach bhailí, agus ba cheart gach rud eile a dhiúltú.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isFalse` nuair is gá duit glacadh leis an litriú `false` amháin agus gach luach bréagach eile a dhiúltú; ní
> fhilleann sé `true` ach do `value === false`.

### Buntáistí

- Soláthraíonn sé seiceáil dhian ar an litriú Boole `false` gan comhshó.
- Cabhraíonn sé le `false` a idirdhealú ó luachanna eile bréagacha cosúil le `0`, `""`, `null`, agus `undefined`.
- Feabhsaíonn sé inléiteacht trí rún a dhéanamh follasach agus ionchur anaithnid á bhailíochtú.

## Úsáid

### Comhréir

Feidhm:

- `isFalse(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input is exactly false here
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isFalse(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 16:21:37 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>