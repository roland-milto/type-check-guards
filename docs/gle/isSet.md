# isSet

## Cur síos

Cinneann sé an `Set` é luach ar leith.

### Cás úsáide

Bailíochtaigh ionchuir ó fhoinsí seachtracha (m.sh., parsáil JSON, ionchur úsáideora, nó APIanna tríú páirtí) chun a
chinntiú gur `Set` é luach sula ndéantar oibríochtaí `Set`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isSet` chun luachanna `unknown` a chúngú sula nglaotar ar APIanna atá sainiúil do `Set` ar nós `.add`, `.has`,
> nó `.size`.

### Buntáistí

- Soláthraíonn sé seiceáil shimplí ag am rite chun a dheimhniú an `Set` é luach.
- Cabhraíonn sé le hearráidí cineáil a chosc trí bhrainseáil luath a cheadú nuair nach `Set` é luach.
- Oibríonn sé le haon ábhar `Set` (folamh nó líonta) agus filleann sé `true`/`false` go comhsheasmhach.

## Úsáid

### Comhréir

Feidhm:

- `isSet(value)`

Paraiméadair:

- `value`: An luach le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // is tacar é a atá ann ag am rite
  console.log(a.size);
}

console.log(isSet(b)); // bréagach

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isSet(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isSet](../_analysis/isSet.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 23:09:43 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>