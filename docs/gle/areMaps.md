# areMaps

## Cur síos

Cinneann `areMaps` an bhfuil eagar ar leith neamhfholamh agus an samplaí `Map` iad a chuid eilimintí go léir.

### Cás úsáide

Bailíochtaigh ionchur anaithnid (m.sh. ó pharsáil JSON, APIanna seachtracha, nó foinsí dinimiciúla) sula gcaitear leis
mar liosta neamhfholamh d’ábhair `Map`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Filleann sé `false` d’eagar folamh; ní fhilleann sé `true` ach nuair atá an t-eagar líonta agus gur `Map` é gach
> eilimint.

### Buntáistí

- Cinntíonn sé gur sampla `Map` é gach eilimint, agus ní fhilleann sé `true` ach nuair a éiríonn leis an seiceáil don
  eagar ar fad.
- Diúltaíonn sé d’eagair fholmha de réir dearaidh, rud a choisceann glacadh de thaisme le “gan sonraí” mar ionchur
  bailí.
- Úsáideach mar chosaint sula ndéantar oibríochtaí atá sainiúil do `Map` (m.sh. `.get()`, `.set()`, atriallú) ar fud
  bailiúcháin.

## Úsáid

### Comhréir

Feidhm:

- `areMaps(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items is guaranteed to be a non-empty array of Map instances at runtime
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false for: empty arrays, or arrays containing any non-Map value
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areMaps(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 16:12:32 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>