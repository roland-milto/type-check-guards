# isWeakSet

## Cur síos

Cinneann sé an `WeakSet` d’oidhrí (objects) é an `value` a thugtar.

### Cás úsáide

Úsáid `isWeakSet` agus ionchur gan chineál á ghlacadh (m.sh. ó APIanna seachtracha, cumraíocht dhinimiciúil, nó
luachanna `unknown`) agus ní mór duit a fhíorú gur `WeakSet` é sula n-úsáideann tú oibríochtaí atá sainiúil do
`WeakSet`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isWeakSet` chun luach `unknown` a chúngú go `WeakSet<object>` ag am rite; tabhair faoi deara nach féidir le
`WeakSet` ach tagairtí oibiachta a bheith ann.

### Buntáistí

- Soláthraíonn sé seiceáil shimplí ag am rite chun a fháil amach an `WeakSet` é luach.
- Cabhraíonn sé le hearráidí cineáil a chosc trína chinntiú nach gcaitear ach le hinstaintí `WeakSet` mar sin.
- Oibríonn sé le haon ionchur `unknown` agus tugann sé toradh soiléir Boole (`true`/`false`).

## Úsáid

### Comhréir

Feidhm:

- `isWeakSet(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // fíor
console.log(isWeakSet(b)); // bréagach

if (isWeakSet(a)) {
  // is WeakSet é a ag am rite
}
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isWeakSet(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 14:14:47 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>