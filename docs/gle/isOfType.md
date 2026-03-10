# isOfType

## Cur síos

Cinneann sé an gcomhoireann `value` ar leith le teaghrán cineáil sonraithe, ag úsáid `typeof` do phríomhchineálacha agus
cúltaca do chineálacha casta.

### Cás úsáide

Bailíochtaigh agus caolaigh ionchuir `unknown` (m.sh. freagraí API, ionchur úsáideora, JSON parsáilte) trí sheiceáil an
bhfuil luach de theaghrán cineáil a bhfuiltear ag súil leis sula ndéantar oibríochtaí a bhaineann go sonrach leis an
gcineál.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isOfType` chun brainseáil a dhéanamh ar chineálacha ag am rite agus tú ag obair le luachanna `unknown`;
> filleann sé `true`/`false` agus déileálann sé le `null` agus `undefined` go sainráite.

### Buntáistí

- Seiceálann sé príomhchineálacha trí `typeof` díreach ar mhaithe le luas agus soiléireacht.
- Láimhseálann sé `null` agus `undefined` i gceart, rud nach féidir le `typeof` amháin idirdhealú mar a bheartaítear.
- Tacaíonn sé le teaghráin chineáil chasta nó shaincheaptha trí chomparáid chúltaca ag úsáid `getTypeOf`.
- Filleann sé toradh simplí Boole (`true`/`false`) atá oiriúnach do ghardaí agus do bhrainseáil.

## Úsáid

### Comhréir

Feidhm:

- `isOfType(value, type)`

Paraiméadair:

- `value`: An luach le tástáil i gcoinne an `type`.
- `type`: Léiriú teaghráin ar an gcineál le seiceáil ina choinne.

### Iompórtáil feidhme áitiúil

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // is uimhir é input anseo
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // is teaghrán é input anseo
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isOfType(value, type)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 16:59:43 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>