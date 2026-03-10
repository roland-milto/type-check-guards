# isOctal

## Kuvaus

Määrittää, onko arvo kelvollinen oktaalilitteraalimerkkijono (esim. `0o755`).

### Käyttötapaus

Validoi käyttäjän syöte tai konfiguraatioarvot, jotka on ilmaistava oktaalilitteraalimerkkijonona (esimerkiksi
tiedosto-oikeusmoodit kuten `0o644`) ennen niiden jäsentämistä tai muuntamista.

> **Huomautus TypeScript-käyttäjille:**
>
> `isOctal` on tyyppivartija (`value is string`). `true`-tuloksen jälkeen TypeScript kaventaa tarkistetun muuttujan
> tyypiksi `string`.

### Edut

- Tarjoaa tiukan tyyppivartijan: palauttaa `true` vain, kun syöte on merkkijono, joka vastaa oktaalilitteraalin muotoa.
- Hylkää tyhjät merkkijonot sekä merkkijonot, joissa on alussa/lopussa välilyöntejä (ASCII-ohjaus-/välilyöntimerkit),
  mikä vähentää tahattomia osumia.
- Tukee valinnaista etumerkkiä ja ei välitä kirjainkoosta `0o`/`0O`-etuliitteessä.
- On salliva ei-merkkijonoisille syötteille palauttamalla `false` heittämisen sijaan.

## Käyttö

### Syntaksi

Funktio:

- `isOctal(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // true
console.log(isOctal(b)); // true
console.log(isOctal(c)); // false
console.log(isOctal(d)); // false

if (isOctal(a)) {
  // a on tässä merkkijono
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isOctal(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 14:45:02 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>