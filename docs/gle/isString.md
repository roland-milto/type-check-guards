# isString

## Cur síos

Cinneann `isString` an bhfuil luach ar leith ina shreang.

### Cás úsáide

Bailíochtaigh ionchur úsáideora, réimsí ualaigh API, nó luachanna cumraíochta ag am rite chun a chinntiú gur sreang é
luach sula gcuirtear oibríochtaí sreinge i bhfeidhm (m.sh., bearradh, scoilteadh, tiontú cás).

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isString` chun luachanna `unknown` nó luachanna le cineálú scaoilte a bhailíochtú sula nglaotar modhanna
> sreinge; ní fhilleann sé `true` ach nuair atá `typeof value === "string"`.

### Buntáistí

- Seiceáil shimplí agus thapa ag úsáid `typeof`.
- Filleann sé toradh Boole intuartha: `true` do shreanga, murach sin `false`.
- Oibríonn sé do shreanga folmha agus neamhfholmha araon.
- Úsáideach mar gharda éadrom ag am rite sula ndéantar oibríochtaí atá sainiúil do shreanga.

## Úsáid

### Comhréir

Feidhm:

- `isString(value)`

Paraiméadair:

- `value`: An luach atá le tástáil le haghaidh cineál sreinge.

### Iompórtáil feidhme áitiúil

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // tá ionchur ina shreang anseo
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isString(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isString](../_analysis/isString.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 13:14:00 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>