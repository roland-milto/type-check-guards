# areStrings

## Disgrifiad

Mae `areStrings` yn gwirio a yw arae yn ddi-wag ac a yw ei holl elfennau yn linynnau, gan ddychwelyd `true` dim ond yn
yr achos hwnnw.

### Achos defnydd

Dilysu data allanol neu ddata a ddarperir gan ddefnyddwyr (e.e., paramedrau ymholiad, llwythi JSON, meysydd CSV) i
sicrhau bod gennych restr o linynnau nad yw'n wag cyn prosesu.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areStrings` i ddilysu araeau anhysbys cyn cymhwyso rhesymeg llinyn-yn-unig; mae'n dychwelyd `false` ar
> gyfer araeau gwag.

### Manteision

- Yn sicrhau bod pob elfen yn llinyn ac yn gwrthod araeau o fathau cymysg drwy ddychwelyd `false`.
- Yn gwrthod araeau gwag, felly mae `true` yn nodi rhestr o linynnau nad yw'n wag yn unig.
- Yn ddefnyddiol fel gwarchodwr amser rhedeg cyflym cyn perfformio gweithrediadau llinyn-yn-unig (e.e., `trim`,
  `toLowerCase`).

## Defnydd

### Cystrawen

Swyddogaeth:

- `areStrings(value)`

Paramedrau:

- `value`: Expected type `string[]`.

### Mewnforio swyddogaeth leol

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // mae input yn string[] nad yw'n wag ar amser rhedeg
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areStrings(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 13:17:47 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>