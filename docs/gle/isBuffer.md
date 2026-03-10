# isBuffer

## Cur síos

Seiceálann sé an bhfuil luach ina `Buffer` Node.js agus filleann sé `true` nó `false`.

### Cás úsáide

Bailíochtaigh ionchuir ag am rite (m.sh., ualaí API, sonraí comhaid, nó maoláin teachtaireachta) chun a chinntiú gur
`Buffer` é luach sula bpróiseáiltear é, agus faigh `false` go hiontaofa nuair a bhíonn tú ag rith lasmuigh de Node.js
áit nach bhféadfadh `Buffer` a bheith ann.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isBuffer` chun luachanna `unknown` a chúngú go `Buffer` sula nglaotar modhanna atá sainiúil do Buffer.

### Buntáistí

- Aimsíonn sé go sábháilte instaintí `Buffer` Node.js ag úsáid `Buffer.isBuffer`.
- Filleann sé `false` i dtimpeallachtaí nach bhfuil `Buffer` ar fáil iontu, rud a sheachnaíonn earráidí ag am rite.
- Oibríonn sé le hionchur `unknown`, rud a fhágann go bhfuil sé oiriúnach do bhailíochtú ag am rite agus do chúngú
  cineáil.

## Úsáid

### Comhréir

Feidhm:

- `isBuffer(value)`

Paraiméadair:

- `value`: An luach atá le tástáil.

### Iompórtáil feidhme áitiúil

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // sōþ
console.log(isBuffer(b)); // nā

if (isBuffer(a)) {
  // a is a Buffer hēr
  console.log(a.toString("utf8"));
}
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isBuffer(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 16:31:40 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>