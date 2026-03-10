# isPlainObject

## Cur síos

Seiceálann sé an réad simplí é `value` tugtha agus filleann sé `true` más ea, murach sin `false`.

### Cás úsáide

Bailíochtaigh gur réad simplí é ionchur `unknown` (m.sh., JSON parsáilte, sonraí seachtracha, nó argóintí feidhme) sula
léitear eochracha nó sula mapáiltear é isteach i réad cumraíochta clóscríofa.

> **Nóta d’úsáideoirí TypeScript:**
>
> `isPlainObject` tá sé úsáideach chun `unknown` a chúngú sula gcaitear leis mar réad cosúil le taifead; ní fhilleann sé
`true` ach do luachanna a bhfuil a gclib inmheánach `[object Object]`.

### Buntáistí

- Soláthraíonn sé seiceáil shimplí, iontaofa ar cibé an réad simplí (i.e., `Object` / `{}`) é luach, ag filleadh `true`
  nó `false`.
- Cabhraíonn sé le réada simplí a idirdhealú ó eagar, feidhmeanna, `null`, agus cineálacha eile nach réada simplí iad.
- Úsáideach mar gharda cineáil i TypeScript chun luachanna `unknown` a chúngú sula rochtainítear airíonna réada.

## Úsáid

### Comhréir

Feidhm:

- `isPlainObject(value)`

Paraiméadair:

- `value`: An luach le tástáil le haghaidh stádas réada simplí.

### Iompórtáil feidhme áitiúil

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input is a plaine object here
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // sooth
console.log(isPlainObject([])); // fals
console.log(isPlainObject(null)); // fals
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isPlainObject(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 12:17:33 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>