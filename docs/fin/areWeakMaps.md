# areWeakMaps

## Kuvaus

`areWeakMaps` tarkistaa, onko arvo ei-tyhjä taulukko, jossa jokainen alkio on `WeakMap`, ja palauttaa `true` vain siinä
tapauksessa ja muuten `false`.

### Käyttötapaus

Validoi ajonaikainen data (esim. jäsennetty JSON, liitännäisten syötteet tai löyhästi tyypitetty konfiguraatio)
varmistaaksesi, että se on ei-tyhjä taulukko `WeakMap`-instansseja ennen iterointia ja `WeakMap`-metodien kutsumista;
palauttaa `false`, jos jokin alkio ei ole `WeakMap` tai jos taulukko on tyhjä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areWeakMaps`-funktiota tuntemattoman syötteen validoimiseen ennen kuin käsittelet sitä ei-tyhjänä `WeakMap[]`
> -taulukkona; se palauttaa `false` tyhjille taulukoille.

### Edut

- Varmistaa, että jokainen annetun taulukon alkio on `WeakMap`-instanssi.
- Palauttaa `false` tyhjille taulukoille, mikä estää “ei dataa” -tilanteen vahingossa hyväksymisen kelvolliseksi
  syötteeksi.
- Hyödyllinen suojatarkistuksena ennen `WeakMap`-kohtaisia operaatioita kaikille alkioille.

## Käyttö

### Syntaksi

Funktio:

- `areWeakMaps(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan `WeakMap`-instanssit.

### Funktion paikallinen tuonti

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list on ei-tyhjä taulukko WeakMap-instansseja
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // ei ei-tyhjä WeakMap[]
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areWeakMaps(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 13:37:04 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>