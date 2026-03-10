# isPlainObject

## Kuvaus

Tarkistaa, onko annettu `value` tavallinen objekti ja palauttaa `true`, jos on, muuten `false`.

### Käyttötapaus

Varmista, että `unknown`-syöte (esim. jäsennetty JSON, ulkoinen data tai funktion argumentit) on tavallinen objekti
ennen avainten lukemista tai sen muuntamista tyypitetyksi konfiguraatio-objektiksi.

> **Huomautus TypeScript-käyttäjille:**
>
> `isPlainObject` on hyödyllinen `unknown`-arvon rajaamiseen ennen kuin sitä käsitellään record-tyyppisenä objektina; se
> palauttaa `true` vain arvoille, joiden sisäinen tagi on `[object Object]`.

### Edut

- Tarjoaa yksinkertaisen ja luotettavan tarkistuksen sille, onko arvo tavallinen objekti (eli `Object` / `{}`),
  palauttaen `true` tai `false`.
- Auttaa erottamaan tavalliset objektit taulukoista, funktioista, `null`-arvosta ja muista ei-tavallisten objektien
  tyypeistä.
- Hyödyllinen TypeScriptin tyyppivartijana `unknown`-arvojen rajaamiseen ennen objektin ominaisuuksien käyttämistä.

## Käyttö

### Syntaksi

Funktio:

- `isPlainObject(value)`

Parametrit:

- `value`: Arvo, josta testataan onko se tavallinen objekti.

### Funktion paikallinen tuonti

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input on tässä tavallinen olio
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isPlainObject(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 12:17:24 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>