# isSymbol

## Cur síos

Cinneann `isSymbol` an bhfuil luach ar leith den chineál `symbol`, ag filleadh `true` do shiombailí agus `false` murach
sin.

### Cás úsáide

Bailíochtaigh go bhfuil luach `unknown` ina `symbol` sula n-úsáidtear é mar aitheantóir uathúil, mar eochair
chlárlainne, nó mar eochair airí ríofa in oibiachtaí agus i mapaí.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isSymbol` chun `unknown` a chúngú go `symbol` sula nglaotar feidhmeanna a bhaineann le siombailí nó sula
> n-úsáidtear é mar eochair airí ríofa.

### Buntáistí

- Soláthraíonn sé seiceáil ama rite shimplí, iontaofa don chineál príomhúil JavaScript `symbol`.
- Cabhraíonn sé le luachanna `unknown` a chúngú sula n-úsáidtear APIanna atá sainiúil do shiombailí nó sula stóráiltear
  iad mar eochracha.
- Seachnaíonn sé dearbhuithe bréagacha trí `typeof` a úsáid, arb é an bealach canónta é chun luachanna `symbol` a
  bhrath.

## Úsáid

### Comhréir

Feidhm:

- `isSymbol(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // Tá input ina shiombail anseo
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isSymbol(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 14:26:46 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>