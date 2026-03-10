# arePromises

## Disgrifiad

Mae `arePromises` yn penderfynu a yw pob elfen mewn arae yn enghreifftiau o `Promise`.

### Achos defnydd

Dilysu bod rhestr a adeiladwyd yn ddeinamig neu a ddarparwyd yn allanol yn cynnwys addewidion yn unig cyn eu
cydgrynhoi (e.e., gyda `Promise.all`).

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `arePromises` i ddilysu `unknown[]` cyn galw `Promise.all` neu weithrediadau eraill sy'n gweithio gyda
> Promise yn unig; mae'n dychwelyd `false` ar gyfer araeau gwag.

### Manteision

- Yn sicrhau bod pob elfen yn `Promise` cyn i chi fwrw ymlaen â rhesymeg benodol i addewidion.
- Yn dychwelyd `false` ar gyfer araeau heb eu llenwi, gan atal canlyniadau amwys ar gyfer mewnbynnau gwag.
- Yn ddefnyddiol fel gwarchodwr amser rhedeg wrth weithio gyda `unknown[]` o ffynonellau allanol.

## Defnydd

### Cystrawen

Swyddogaeth:

- `arePromises(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am enghreifftiau o Promise.

### Mewnforio swyddogaeth leol

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // mae values yn arae o enghreifftiau Promise ar amser rhedeg
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.arePromises(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 23:47:57 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>