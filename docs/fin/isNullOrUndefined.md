# isNullOrUndefined

## Kuvaus

Tarkistaa, onko annettu arvo `null` tai `undefined`.

### Käyttötapaus

Käytä `isNullOrUndefined`-funktiota, kun sinun täytyy käsitellä sekä `null` että `undefined` “ei arvoa” -tapauksina,
esimerkiksi valinnaisten syötteiden validoinnissa, API-payloadien normalisoinnissa tai koodipolkujen suojaamisessa ennen
mahdollisesti puuttuvan arvon dereferointia.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isNullOrUndefined`-funktiota suojautuaksesi puuttuvilta arvoilta ennen ominaisuuksien käyttämistä tai metodien
> kutsumista; se palauttaa `true` vain arvoille `null` ja `undefined`.

### Edut

- Tarjoaa selkeän, uudelleenkäytettävän suojauksen `null`- ja `undefined`-arvojen havaitsemiseen yhdessä paikassa.
- Palauttaa yksinkertaisen totuusarvon (`true`/`false`), jota on helppo yhdistellä ehdoissa ja validoinneissa.
- Auttaa välttämään yleisiä ajonaikaisia virheitä tarkistamalla puuttuvat arvot ennen ominaisuuksien käyttämistä tai
  metodien kutsumista.

## Käyttö

### Syntaksi

Funktio:

- `isNullOrUndefined(value)`

Parametrit:

- `value`: Arvo, joka tarkistetaan `null`- tai `undefined`-arvon varalta.

### Funktion paikallinen tuonti

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // käsittele puuttuva arvo
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isNullOrUndefined(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 00:33:38 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>