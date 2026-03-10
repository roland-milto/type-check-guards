# isPrimitive

## Cur síos

Cinneann `isPrimitive` an bhfuil luach ar leith ina phríomhchineál (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Cás úsáide

Bailíochtaigh ionchuir ag am rite (m.sh., réimsí ualaigh API, luachanna cumraíochta, nó sonraí a sholáthraíonn
úsáideoir) chun a chinntiú gur príomhchineál é luach sula ndéantar sraitheú, logáil, nó sula gcuirtear oibríochtaí
príomhchineálacha amháin i bhfeidhm.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isPrimitive` chun ionchuir `unknown` a chosaint sula gcaitear leo mar oibiachtaí nó feidhmeanna; filleann sé
`true` do phríomhchineálacha agus `false` d’oibiachtaí agus d’fheidhmeanna.

### Buntáistí

- Seiceáil thapa, gan leithdháileadh, chun a fháil amach an príomhchineál (primitive) JavaScript é luach.
- Déileálann sé le `null` mar phríomhchineál i gceart (cé go bhfuil `typeof null` ina `"object"`).
- Cabhraíonn sé le luachanna `unknown` a chúngú sula ndéantar oibríochtaí atá dírithe ar oibiachtaí amháin.

## Úsáid

### Comhréir

Feidhm:

- `isPrimitive(value)`

Paraiméadair:

- `value`: An luach le seiceáil an bhfuil sé de chineál príomhchineál.

### Iompórtáil feidhme áitiúil

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isPrimitive(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 23:56:15 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>