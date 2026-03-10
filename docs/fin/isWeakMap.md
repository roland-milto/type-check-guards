# isWeakMap

## Kuvaus

Määrittää, onko annettu `value` `WeakMap`-instanssi.

### Käyttötapaus

Käytä `isWeakMap`-funktiota, kun hyväksyt `unknown`-arvon (esim. julkisesta API:sta, liitännäisjärjestelmästä tai
dynaamisesta konfiguraatiosta) ja sinun täytyy varmistaa, että se on `WeakMap`, ennen kuin käytät `WeakMap`-kohtaisia
toimintoja.

> **Huomautus TypeScript-käyttäjille:**
>
> `isWeakMap` suorittaa `instanceof WeakMap` -tarkistuksen; se on ajonaikainen vartija, joka palauttaa `true` vain
> todellisille `WeakMap`-instansseille.

### Edut

- Yksinkertainen ajonaikainen tarkistus sille, onko arvo `WeakMap`.
- Auttaa estämään sellaisten API:en väärinkäyttöä, jotka edellyttävät `WeakMap`-rakennetta, palauttamalla `true`/`false`
  heittämisen sijaan.
- Toimii `unknown`-syötteiden kanssa, mikä tekee siitä kätevän moduulirajoilla (esim. jäsentäminen, ulkoinen data tai
  tyypittämätön koodi).

## Käyttö

### Syntaksi

Funktio:

- `isWeakMap(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a on WeakMap ajonaikana
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isWeakMap(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 13:24:56 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>