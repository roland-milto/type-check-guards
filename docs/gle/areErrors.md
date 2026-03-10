# areErrors

## Cur síos

Seiceálann sé an bhfuil eagar neamhfholamh ann agus nach bhfuil ann ach oibiachtaí `Error`, ag filleadh `true` nó
`false`.

### Cás úsáide

Bailíochtaigh go bhfuil `unknown[]` a chuirtear ar fáil ag am rite (m.sh., teipeanna comhiomlánaithe, torthaí
bailíochtaithe, nó sonraí díshraithithe) ina liosta neamhfholamh d’oibiachtaí `Error` sula ndéantar atriall, logáil, nó
athchaitheamh.

> **Nóta d’úsáideoirí TypeScript:**
>
> Filleann `areErrors` `true` amháin do eagar líonta ina bhfuil gach mír ina `Error`; filleann sé `false` do eagar
> folamh nó má tá aon eilimint nach `Error` í.

### Buntáistí

- Cinntíonn sé gur sampla `Error` atá i ngach eilimint, rud a chuireann ar chumas láimhseáil agus logáil earráidí go
  sábháilte.
- Diúltaíonn sé d’eagair fholmha, rud a choisceann staid “gan earráidí” de thaisme a chóireáil mar liosta bailí
  earráidí.
- Oibríonn sé go maith mar gharda ama rite agus tú ag déileáil le hionchuir `unknown[]` (m.sh., ó APIanna nó ó bhlocanna
  `catch`).

## Úsáid

### Comhréir

Feidhm:

- `areErrors(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil le haghaidh oibiachtaí `Error`.

### Iompórtáil feidhme áitiúil

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value is a non-empty array of Error objects
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areErrors(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 12:33:40 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>