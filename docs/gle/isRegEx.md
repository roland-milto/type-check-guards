# isRegEx

## Cur síos

Cinneann sé an instaint `RegExp` é luach a chuirtear ar fáil.

### Cás úsáide

Bailíochtaigh luachanna a sholáthraíonn úsáideoirí nó luachanna dinimiciúla (m.sh., cumraíocht, ualach pá API, ionchuir
breiseáin) sula gcaitear leo mar shlonn rialta.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isRegEx` chun luachanna `unknown` (nó aontais) a chúngú sula n-úsáidtear airíonna nó modhanna atá sainiúil do
> RegExp; ní fhilleann sé `true` ach do luachanna atá ina n-instaintí de `RegExp`.

### Buntáistí

- Soláthraíonn sé garda cineáil simplí ag am rite chun a sheiceáil an `RegExp` é luach.
- Cabhraíonn sé le hearráidí a chosc nuair a bhíonn an cód ag súil le slonn rialta (m.sh., sula nglaotar `test`, `exec`,
  nó sula léitear `source`).
- Oibríonn sé le litriú regex agus le hinstaintí a chruthaítear trí `new RegExp(...)`.
- Filleann sé toradh soiléir Boole (`true`/`false`) gan earráid a chaitheamh do hionchuir nach regex iad.

## Úsáid

### Comhréir

Feidhm:

- `isRegEx(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input es un RegExp ci
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isRegEx(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 23:29:24 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>