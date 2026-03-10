# arePromises

## Cur síos

Cinneann `arePromises` an bhfuil gach eilimint in eagar ina ásc `Promise`.

### Cás úsáide

Bailíochtaigh go bhfuil gealltanais amháin i liosta a tógadh go dinimiciúil nó a soláthraíodh go seachtrach sula
ndéantar iad a chomhiomlánú (m.sh., le `Promise.all`).

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `arePromises` chun `unknown[]` a bhailíochtú sula nglaonn tú `Promise.all` nó oibríochtaí eile atá dírithe ar
> ghealltanais amháin; filleann sé `false` ar eagair fholmha.

### Buntáistí

- Cinntíonn sé go bhfuil gach eilimint ina `Promise` sula leanann tú ar aghaidh le loighic shonrach do ghealltanais.
- Filleann sé `false` ar eagair neamh-líonta, rud a choisceann torthaí débhríocha d’ionchuir fholmha.
- Úsáideach mar chosaint ama rite agus tú ag obair le `unknown[]` ó fhoinsí seachtracha.

## Úsáid

### Comhréir

Feidhm:

- `arePromises(array)`

Paraiméadair:

- `array`: An eagar le seiceáil le haghaidh áscanna `Promise`.

### Iompórtáil feidhme áitiúil

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // is eagar de hinstansí Promise ag am rith-am
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.arePromises(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 23:48:16 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>