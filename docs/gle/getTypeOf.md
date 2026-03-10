# getTypeOf

## Cur síos

Filleann `getTypeOf` lipéad cineáil mionsonraithe, inléite ag daoine do luach ar leith, lena n-áirítear cineálacha
uimhriúla scagtha agus cineálacha oibiachta sonracha.

### Cás úsáide

Úsáid `getTypeOf` chun braiteadh cineáil a normalú i mbailíochtú ionchuir agus i ndiagnóisic—mar shampla, chun `nan` a
dhiúltú, glacadh le haitheantais `integer` amháin, déileáil le teaghráin uimhriúla cosúil le `decimal` ar bhealach
difriúil ó `string` shimplí, nó chun cineálacha oibiachta beachta cosúil le `date` agus `regexp` a logáil.

> **Nóta d’úsáideoirí TypeScript:**
>
> Is é `DataTypeAsString | string` an cineál fillte. Caith leis mar lipéad tuairisciúil; déan comparáid le litreacha
> aitheanta cosúil le `integer`, `float`, `nan`, `array`, `null`, agus `undefined` agus tú ag brainseáil.

### Buntáistí

- Filleann sé teaghrán cineáil níos mionsonraithe ná `typeof` JavaScript, lena n-áirítear fo-chineálacha uimhriúla
  cosúil le `integer`, `float`, agus `nan`.
- Déanann sé idirdhealú idir `null` agus `undefined` go sainráite mar `null` agus `undefined`.
- Aithníonn sé formáidí coitianta teaghrán uimhriúil agus tuairiscíonn sé iad mar `binary`, `octal`, `decimal`, nó
  `hexadecimal` in ionad `string` shimplí.
- Aithníonn sé eagar mar `array` agus úsáideann sé `Object.prototype.toString` chun ainmneacha cineáil oibiachta
  sonracha a sholáthar (m.sh., `date`, `regexp`, `map`, `set`).
- Úsáideach le haghaidh bailíochtaithe, logála, agus dífhabhtaithe nuair a theastaíonn lipéid chineáil chomhsheasmhacha,
  inléite ag daoine.

## Úsáid

### Comhréir

Feidhm:

- `getTypeOf(value)`

Paraiméadair:

- `value`: An luach ar a bhfuil an cineál sonraí le cinneadh.

### Iompórtáil feidhme áitiúil

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Exemplarie preoues
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.getTypeOf(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 13:06:31 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>