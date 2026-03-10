# isWeakSet

## Kuvaus

Määrittää, onko annettu `value` objektien `WeakSet`.

### Käyttötapaus

Käytä `isWeakSet`-funktiota, kun vastaanotat tyypittämätöntä syötettä (esim. ulkoisista API-rajapinnoista, dynaamisesta
konfiguraatiosta tai `unknown`-arvoista) ja sinun täytyy varmistaa, että se on `WeakSet` ennen `WeakSet`-kohtaisia
operaatioita.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isWeakSet`-funktiota kaventaaksesi `unknown`-arvon ajonaikaisesti tyyppiin `WeakSet<object>`; huomaa, että
`WeakSet` voi sisältää vain viittauksia objekteihin.

### Edut

- Tarjoaa yksinkertaisen ajonaikaisen tarkistuksen sille, onko arvo `WeakSet`.
- Auttaa ehkäisemään tyyppivirheitä varmistamalla, että vain `WeakSet`-instansseja käsitellään sellaisina.
- Toimii minkä tahansa `unknown`-syötteen kanssa ja palauttaa selkeän totuusarvotuloksen (`true`/`false`).

## Käyttö

### Syntaksi

Funktio:

- `isWeakSet(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a on ajonaikaisesti WeakSet
}
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isWeakSet(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 14:14:42 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>