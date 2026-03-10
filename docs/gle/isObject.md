# isObject

## Cur síos

Cinneann an bhfuil `value` tugtha ina oibiacht (`object`) (gan `null` a áireamh).

### Cás úsáide

Úsáid `isObject` chun ionchuir anaithnid a bhailíochtú (m.sh., JSON parsáilte, freagraí API, ualaí imeachta) sula
rochtainítear airíonna, ag cinntiú gur oibiacht é an luach agus nach `null` é.

> **Nóta d’úsáideoirí TypeScript:**
>
> `isObject` is garda ama rite é a fhilleann boolean; ní dhéanann sé caolú go cruth oibiachta ar leith. Comhcheangail é
> le seiceálacha breise (m.sh., annacht airí) nuair a theastaíonn clóscríobh níos láidre uait.

### Buntáistí

- Filleann `true` amháin do luachanna neamh-`null` a bhfuil a `typeof` mar `"object"`.
- Cuireann sé cosc ar an ngaiste coitianta JavaScript ina ndéileálfaí le `null` mar oibiacht murach sin.
- Oibríonn sé do ghnáth-oibiachtaí agus d’áscanna oibiachta ionsuite (m.sh., `Date`, `RegExp`).
- Seiceáil shimplí, thapa ag am rite atá oiriúnach do ríomhchlárú cosantach agus do bhailíochtú ionchuir.

## Úsáid

### Comhréir

Feidhm:

- `isObject(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil an oibiacht (`object`) é.

### Iompórtáil feidhme áitiúil

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input is a non-null object at runtime
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isObject(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isObject](../_analysis/isObject.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 00:18:31 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>