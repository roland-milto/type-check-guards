# isPrimitive

## Kuvaus

`isPrimitive` määrittää, onko annettu arvo primitiivi (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Käyttötapaus

Validoi syötteet ajonaikaisesti (esim. API-payloadin kentät, konfiguraatioarvot tai käyttäjän antama data)
varmistaaksesi, että arvo on primitiivi ennen serialisointia, lokitusta tai primitiiveille tarkoitettujen operaatioiden
soveltamista.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isPrimitive`-funktiota suojaamaan `unknown`-syötteet ennen kuin käsittelet niitä olioina tai funktioina; se
> palauttaa `true` primitiiveille ja `false` olioille ja funktioille.

### Edut

- Nopea, allokaatioita välttävä tarkistus sille, onko arvo JavaScriptin primitiivi.
- Käsittelee `null`-arvon oikein primitiivinä (vaikka `typeof null` on `"object"`).
- Auttaa rajaamaan `unknown`-arvoja ennen pelkille olioille tarkoitettujen operaatioiden suorittamista.

## Käyttö

### Syntaksi

Funktio:

- `isPrimitive(value)`

Parametrit:

- `value`: Arvo, josta tarkistetaan, onko se primitiivityyppiä.

### Funktion paikallinen tuonti

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isPrimitive(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 23:56:05 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>