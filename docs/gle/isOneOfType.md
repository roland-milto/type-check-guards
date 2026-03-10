# isOneOfType

## Cur síos

Cinneann `isOneOfType` an meaitseálann `value` ar leith ar a laghad ceann amháin de na sreanga cineáil a chuirtear ar
fáil, ag filleadh `true` má aimsítear aon mheaitseáil agus `false` murach sin.

### Cás úsáide

Bailíochtaigh sonraí scaoilte-chineálaithe nó seachtracha (m.sh., JSON parsáilte, paraiméadair iarratais) trí
ilchineálacha ama rite inghlactha (mar `number` nó `string`) a cheadú sula leanfar ar aghaidh le loighic bhreise.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isOneOfType` nuair is mian leat seiceáil ama rite go meaitseálann luach aon cheann de roinnt cineálacha
> ceadaithe; filleann sé `true` má mheaitseálann cineál amháin ar a laghad, nó `false` murach sin.

### Buntáistí

- Seiceálann sé luach i gcoinne ilchineálacha ceadaithe in aon ghlao amháin, ag filleadh `true` ar an gcéad mheaitseáil.
- Oibríonn sé le hionchuir `unknown`, rud a fhágann go bhfuil sé úsáideach ag teorainneacha ama rite (m.sh., sonraí
  seachtracha, ionchur úsáideora).
- Toradh simplí Boole (`true`/`false`) a oireann go maith do loighic choinníollach agus do fhilleadh luath.

## Úsáid

### Comhréir

Feidhm:

- `isOneOfType(value, types)`

Paraiméadair:

- `value`: An luach atá le seiceáil i gcoinne na gcineálacha sonraithe.
- `types`: Eagar de shreanga cineáil a léiríonn cineálacha féideartha an luacha.

### Iompórtáil feidhme áitiúil

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input is an object at runtime
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isOneOfType(value, types)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 23:43:18 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>