# isOfType

## Përshkrim

Përcakton nëse një `value` e dhënë përputhet me një varg tipi të specifikuar, duke përdorur `typeof` për tipat primitivë
dhe një mekanizëm rezervë për tipat kompleksë.

### Rast përdorimi

Valido dhe ngushto input-e `unknown` (p.sh., përgjigje API, input i përdoruesit, JSON i parsuar) duke kontrolluar nëse
një vlerë është e një vargu tipi të pritur përpara se të kryesh operacione specifike për tipin.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isOfType` për të degëzuar sipas tipeve në kohë ekzekutimi kur punon me vlera `unknown`; kthen `true`/`false`
> dhe i trajton `null` dhe `undefined` në mënyrë eksplicite.

### Përparësi

- Kontrollon tipat primitivë përmes `typeof` direkt për shpejtësi dhe qartësi.
- Trajton saktë `null` dhe `undefined`, të cilat vetëm `typeof` nuk mund t’i dallojë siç synohet.
- Mbështet vargje tipash komplekse ose të personalizuara përmes një krahasimi rezervë duke përdorur `getTypeOf`.
- Kthen një rezultat të thjeshtë boolean (`true`/`false`) të përshtatshëm për guard-e dhe degëzim.

## Përdorim

### Sintaksë

Funksion:

- `isOfType(value, type)`

Parametra:

- `value`: Vlera për t’u testuar kundrejt `type`.
- `type`: Përfaqësimi si varg i tipit kundrejt të cilit do të bëhet kontrolli.

### Import lokal i funksionit

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input është një numër këtu
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input është një varg këtu
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isOfType(value, type)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 17:06:24 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>