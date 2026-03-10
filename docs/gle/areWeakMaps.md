# areWeakMaps

## Cur síos

Seiceálann `areWeakMaps` an bhfuil luach ina eagar neamhfholamh ina bhfuil gach eilimint ina `WeakMap`, agus filleann sé
`true` sa chás sin amháin agus `false` murach sin.

### Cás úsáide

Bailíochtaigh sonraí ama rite (m.sh. JSON parsáilte, ionchuir breiseán, nó cumraíocht le cineálú scaoilte) chun a
chinntiú gur eagar neamhfholamh de shamplaí `WeakMap` é sula ndéantar atriall agus sula nglaoitear modhanna `WeakMap`;
filleann sé `false` nuair nach `WeakMap` é aon eilimint nó nuair atá an t-eagar folamh.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areWeakMaps` chun ionchur anaithnid a bhailíochtú sula gcaitear leis mar `WeakMap[]` neamhfholamh; filleann sé
`false` ar eagair fholmha.

### Buntáistí

- Cinntíonn sé gur sampla `WeakMap` é gach eilimint san eagar a chuirtear ar fáil.
- Filleann sé `false` ar eagair fholmha, rud a chuireann cosc ar ghlacadh de thaisme le “gan sonraí” mar ionchur bailí.
- Úsáideach mar gharda sula ndéantar oibríochtaí sonracha do `WeakMap` ar gach mír.

## Úsáid

### Comhréir

Feidhm:

- `areWeakMaps(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil le haghaidh samplaí `WeakMap`.

### Iompórtáil feidhme áitiúil

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // is eagar neamhfholamh d’fhoinsí WeakMap é list
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // ní WeakMap[] neamhfholamh é
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areWeakMaps(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 13:37:16 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>