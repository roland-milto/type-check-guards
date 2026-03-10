# areErrors

## Disgrifiad

Yn gwirio a yw arae yn ddi-wag ac yn cynnwys dim ond gwrthrychau `Error`, gan ddychwelyd `true` neu `false`.

### Achos defnydd

Dilysu bod `unknown[]` a ddarperir ar amser-rhedeg (e.e., methiannau wedi'u crynhoi, canlyniadau dilysu, neu ddata
wedi'i ddad-gyfresoli) yn rhestr ddi-wag o wrthrychau `Error` cyn iteru, cofnodi, neu ail-daflu.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Mae `areErrors` yn dychwelyd `true` dim ond ar gyfer arae wedi'i llenwi lle mae pob eitem yn `Error`; mae'n dychwelyd
`false` ar gyfer arae wag neu os nad yw unrhyw elfen yn `Error`.

### Manteision

- Yn sicrhau bod pob elfen yn enghraifft o `Error`, gan alluogi trin a chofnodi gwallau yn ddiogel.
- Yn gwrthod araeau gwag, gan atal cyflwr “dim gwallau” damweiniol rhag cael ei drin fel rhestrau gwallau dilys.
- Yn gweithio'n dda fel gwarchodwr amser-rhedeg wrth ddelio â mewnbynnau `unknown[]` (e.e., o APIs neu flociau `catch`).

## Defnydd

### Cystrawen

Swyddogaeth:

- `areErrors(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am wrthrychau `Error`.

### Mewnforio swyddogaeth leol

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // mae value yn arae nad yw'n wag o wrthrychau Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areErrors(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 12:33:14 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>