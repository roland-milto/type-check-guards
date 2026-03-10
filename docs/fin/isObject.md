# isObject

## Kuvaus

Määrittää, onko annettu `value` `object` (pois lukien `null`).

### Käyttötapaus

Käytä `isObject`-funktiota tuntemattomien syötteiden (esim. jäsennetty JSON, API-vastaukset, tapahtumakuormat)
validointiin ennen ominaisuuksien käyttöä, jotta varmistat arvon olevan objekti eikä `null`.

> **Huomautus TypeScript-käyttäjille:**
>
> `isObject` on ajonaikainen vartija, joka palauttaa boolean-arvon; se ei kavennu tiettyyn objektimuotoon. Yhdistä se
> lisätarkistuksiin (esim. ominaisuuden olemassaolo), kun tarvitset vahvempaa tyypitystä.

### Edut

- Palauttaa `true` vain ei-`null`-arvoille, joiden `typeof` on `"object"`.
- Ehkäisee yleisen JavaScript-ansan, jossa `null` muuten tulkittaisiin objektiksi.
- Toimii tavallisille objekteille ja sisäänrakennettujen objektien instansseille (esim. `Date`, `RegExp`).
- Yksinkertainen ja nopea ajonaikainen tarkistus, joka sopii puolustavaan ohjelmointiin ja syötteiden validointiin.

## Käyttö

### Syntaksi

Funktio:

- `isObject(value)`

Parametrit:

- `value`: Arvo, joka tarkistetaan sen varalta, onko se `object`.

### Funktion paikallinen tuonti

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input on ajonaikaisesti ei-null objekti
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isObject(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isObject](../_analysis/isObject.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 00:18:24 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>