# isBoolean

## Cur síos

Cinneann sé an bhfuil luach ar leith ina `boolean`.

### Cás úsáide

Bailíochtaigh sonraí seachtracha nó gan chineál (m.sh., athróga timpeallachta, ualaí JSON, paraiméadair iarratais) chun
a chinntiú gur `boolean` é luach sula n-úsáidtear é i loighic choinníollach.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isBoolean` chun `unknown` a chúngú go `boolean` sula gcuirtear oibríochtaí booleán i bhfeidhm.

### Buntáistí

- Seiceáil ama rite simplí agus tapa ag úsáid `typeof`.
- Cabhraíonn sé le hionchur anaithnid a bhailíochtú sula gcuirtear loighic shonrach do bhooleán i bhfeidhm.
- Filleann sé toradh intuartha `boolean` (`true`/`false`).

## Úsáid

### Comhréir

Feidhm:

- `isBoolean(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // tá an t-ionchur ina bholán anseo
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isBoolean(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 14:36:25 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>