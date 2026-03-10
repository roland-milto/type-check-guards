# areRegExes

## Cur síos

Seiceálann `areRegExes` an bhfuil luach ina eagar líonta nach bhfuil ann ach oibiachtaí `RegExp`.

### Cás úsáide

Bailíochtaigh go bhfuil rogha chumraíochta (m.sh., liosta de phatrúin ceadaithe/diúltaithe) ina eagar neamhfholamh de
shloinn rialta sula n-úsáidtear é le haghaidh meaitseála.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areRegExes` chun `unknown` a chúngú go `RegExp[]` sula ndéanann tú atriall nó sula gcomhcheanglaíonn tú
> patrúin.

### Buntáistí

- Cinntíonn sé gur eagar neamhfholamh é luach ina bhfuil gach eilimint ina shampla de `RegExp`.
- Soláthraíonn sé garda Boole simplí (`true`/`false`) chun ionchur úsáideora nó cumraíocht a bhailíochtú.
- Cabhraíonn sé le hearráidí am rite a chosc nuair a ghlacann cód níos déanaí leis go dtacaíonn gach mír le hoibríochtaí
  slonn rialta.

## Úsáid

### Comhréir

Feidhm:

- `areRegExes(array)`

Paraiméadair:

- `array`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // is eagar de RegExp atá i patterns anseo
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areRegExes(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 23:18:15 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>