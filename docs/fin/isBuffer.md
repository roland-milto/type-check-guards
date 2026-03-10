# isBuffer

## Kuvaus

Tarkistaa, onko arvo Node.js:n `Buffer`, ja palauttaa `true` tai `false`.

### Käyttötapaus

Validoi syötteet ajonaikaisesti (esim. API-payloadit, tiedostodata tai viestipuskurit) varmistaaksesi, että arvo on
`Buffer` ennen sen käsittelyä, ja saat luotettavasti `false`-tuloksen, kun suoritetaan Node.js:n ulkopuolella, missä
`Buffer` ei välttämättä ole olemassa.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isBuffer`-funktiota kaventaaksesi `unknown`-arvot tyypiksi `Buffer` ennen Buffer-kohtaisten metodien
> kutsumista.

### Edut

- Tunnistaa Node.js:n `Buffer`-instanssit turvallisesti käyttämällä `Buffer.isBuffer`-metodia.
- Palauttaa `false` ympäristöissä, joissa `Buffer` ei ole käytettävissä, mikä välttää ajonaikaiset virheet.
- Toimii `unknown`-syötteellä, joten se soveltuu ajonaikaiseen validointiin ja tyypin kaventamiseen.

## Käyttö

### Syntaksi

Funktio:

- `isBuffer(value)`

Parametrit:

- `value`: Testattava arvo.

### Funktion paikallinen tuonti

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // tosi
console.log(isBuffer(b)); // epätosi

if (isBuffer(a)) {
  // a on tässä Buffer
  console.log(a.toString("utf8"));
}
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isBuffer(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 16:31:30 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>