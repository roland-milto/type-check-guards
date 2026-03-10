# isWeakMap

## Cur síos

Cinneann sé an bhfuil `value` tugtha ina ásc `WeakMap`.

### Cás úsáide

Úsáid `isWeakMap` nuair a ghlacann tú le luach `unknown` (m.sh., ó API poiblí, córas breiseán, nó cumraíocht
dhinimiciúil) agus nuair is gá duit a fhíorú gur `WeakMap` é sula n-úsáideann tú iompar atá sainiúil do `WeakMap`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Déanann `isWeakMap` seiceáil `instanceof WeakMap`; is garda ama rite é a fhilleann `true` amháin do áscanna `WeakMap`
> fíora.

### Buntáistí

- Seiceáil ama rite shimplí chun a fháil amach an `WeakMap` é luach.
- Cabhraíonn sé le mí-úsáid APIanna a éilíonn `WeakMap` a chosc trí `true`/`false` a thabhairt ar ais in ionad earráid a
  chaitheamh.
- Oibríonn sé le hionchuir `unknown`, rud a fhágann go bhfuil sé áisiúil ag teorainneacha modúil (m.sh., parsáil, sonraí
  seachtracha, nó cód gan chineálú).

## Úsáid

### Comhréir

Feidhm:

- `isWeakMap(value)`

Paraiméadair:

- `value`: An luach le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // is WeakMap é a ag am rith
}

console.log(isWeakMap(a)); // fíor
console.log(isWeakMap(b)); // bréagach
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isWeakMap(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 13:25:04 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>