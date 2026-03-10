# areBuffers

## Cur síos

Seiceálann `areBuffers` an bhfuil an luach a chuirtear ar fáil ina eagar neamhfholamh, líonta ina bhfuil gach eilimint
ina `Buffer`, ag filleadh `true` más amhlaidh agus `false` murach sin.

### Cás úsáide

Bailíochtaigh eagair smután atá ag teacht isteach (m.sh., ó shruthanna, uaslódálacha comhad, nó paicéid líonra) chun a
chinntiú gur samplaí `Buffer` iad na codanna go léir sula ndéantar iad a chomhcheangal, a dhíchódú, nó a chur ar aghaidh
chuig feidhmeanna cripteagrafaíochta nó próiseála dénártha.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areBuffers` chun `unknown[]` a bhailíochtú sula nglaotar ar APIanna atá sainiúil do Buffer ar nós
`Buffer.concat`, ag cinntiú nach bhfilleann an fheidhm `true` ach nuair is `Buffer` gach eilimint.

### Buntáistí

- Cinntíonn sé gur sampla `Buffer` de chuid Node.js é gach eilimint san ionchur, agus ní fhilleann sé `true` ach nuair a
  mheaitseálann an t-eagar iomlán.
- Diúltaíonn sé d’ionchuir neamhbhailí go luath trí eagar neamhfholamh, líonta a éileamh; filleann sé `false` ar eagair
  fholmha nó ar neamh-eagair.
- Úsáideach mar gharda sula ndéantar oibríochtaí atá dírithe ar mhaoláin amháin (m.sh., comhcheangal, haisiú, prótacail
  dhénártha).

## Úsáid

### Comhréir

Feidhm:

- `areBuffers(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh samplaí maoláin.

### Iompórtáil feidhme áitiúil

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areBuffers(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 16:25:17 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>