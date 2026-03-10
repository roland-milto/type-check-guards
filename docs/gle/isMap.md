# isMap

## Cur síos

Seiceálann sé an `Map` é an `value` a thugtar, ag filleadh `true` más ea agus `false` murach sin.

### Cás úsáide

Úsáid `isMap` nuair a fhaigheann tú luach `unknown` (m.sh., ó pharsáil JSON, ó APIanna seachtracha, nó ó ionchur
úsáideora) agus nuair is gá a chinntiú gur `Map` é sula ndéantar oibríochtaí `Map`.

> **Nóta d’úsáideoirí TypeScript:**
>
> `isMap` is cosantóir ag am rite a fhilleann `true` nuair is `Map` é an luach agus `false` murach sin; bain úsáid as
> chun `unknown` a chúngú sula nglaotar ar APIanna `Map`.

### Buntáistí

- Soláthraíonn sé seiceáil thapa ag am rite chun a fháil amach an `Map` é luach.
- Cabhraíonn sé le hearráidí cineáil a chosc trí chosaint a chur ar chosáin chóid a éilíonn modhanna `Map` ar nós `get`,
  `set`, agus `has`.
- Oibríonn sé go maith mar chéim bhailíochtaithe éadrom agus ionchuir `unknown` á láimhseáil.

## Úsáid

### Comhréir

Feidhm:

- `isMap(value)`

Paraiméadair:

- `value`: An luach le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isMap(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isMap](../_analysis/isMap.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 16:04:31 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>