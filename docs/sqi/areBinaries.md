# areBinaries

## Përshkrim

Kontrollon nëse vlera e dhënë është një varg jo-bosh me vargje binare të vlefshme dhe kthen `true` vetëm nëse të gjithë
elementët kalojnë validimin.

### Rast përdorimi

Përdor `areBinaries` kur merr një listë të panjohur (p.sh., nga JSON, formularë ose API) dhe duhet të sigurohesh që
është një varg jo-bosh me vargje binare përpara se ta analizosh ose ta përpunosh.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areBinaries` për të validuar input të panjohur përpara se të konvertosh vargjet binare në numra/BigInt;
> siguron që vargu të mos jetë bosh dhe që çdo element të jetë një varg binar i vlefshëm.

### Përparësi

- Vërteton që një vlerë është një varg jo-bosh ku çdo element është një varg binar i vlefshëm.
- Kthen një rezultat të thjeshtë boolean (`true`/`false`) të përshtatshëm për guard-e, kthime të hershme dhe validim të
  inputit.
- Parandalon gabimet e mëvonshme të analizimit duke refuzuar vargje që përmbajnë ndonjë hyrje jo-binare.

## Përdorim

### Sintaksë

Funksion:

- `areBinaries(array)`

Parametra:

- `array`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // e vërtetë
console.log(areBinaries(b)); // e rreme
console.log(areBinaries([])); // e rreme
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areBinaries(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 23:15:59 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>