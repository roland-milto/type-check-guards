# areWeakSets

## Kuvaus

Tarkistaa, onko syöte ei-tyhjä taulukko, jossa jokainen alkio on `WeakSet`, ja palauttaa `true` vain siinä tapauksessa.

### Käyttötapaus

Validoi ajonaikainen syöte (esim. API:sta, konfiguraatiosta tai käyttäjän antamasta datasta), jotta varmistat, että
sinulla on ei-tyhjä lista `WeakSet`-instansseja ennen kuin jatkat logiikkaa, joka riippuu `WeakSet`-käyttäytymisestä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areWeakSets`-funktiota tuntemattoman syötteen validoimiseen ennen kuin käsittelet sitä tyyppinä `WeakSet[]`. Se
> palauttaa `false` tyhjille taulukoille ja ei-taulukoille.

### Edut

- Varmistaa, että jokainen syötematriisin alkio on `WeakSet`.
- Palauttaa tyhjille taulukoille `false`, mikä estää vahingossa syntyvät “kaikki kelvollisia” -tulokset puuttuvasta
  datasta.
- Epäonnistuu turvallisesti palauttamalla `false`, kun syöte ei ole täytetty taulukko (mukaan lukien `null`).
- Hyödyllinen suojana ennen operaatioita, jotka edellyttävät `WeakSet`-instansseja.

## Käyttö

### Syntaksi

Funktio:

- `areWeakSets(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan `WeakSet`-oliot.

### Funktion paikallinen tuonti

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a on ei-tyhjä WeakSet-instanssien taulukko
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areWeakSets(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 14:08:33 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>