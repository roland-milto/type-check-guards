# areOctals

## Beskrywing

`areOctals` bepaal of die verskafde waarde ’n nie-leë skikking van geldige oktale stringe is.

### Gebruikscenario

Gebruik `areOctals` wanneer jy gebruikersinvoer, konfigurasiewaardes, of API-payloads valideer wat oktale literale moet
bevat (bv. lêertoestemmingsmodusse soos `0o755`) en jy leë skikkings of enige ongeldige inskrywings wil verwerp deur
`false` terug te gee.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areOctals` om te verseker jy het ’n nie-leë `unknown[]` waar elke inskrywing ’n geldige oktale string is
> voordat jy omskakel (bv. via `Number(...)` of pasgemaakte ontleding).

### Voordele

- Valideer dat ’n waarde ’n nie-leë skikking is waar elke element ’n oktale string is, en gee slegs `true` terug wanneer
  alle items slaag.
- Misluk vinnig: gee `false` terug sodra ’n nie-oktale element gevind word.
- Nuttig as ’n wag voor ontleding of omskakeling van oktale stringe om looptydfoute en inkonsekwente invoerhantering te
  vermy.

## Gebruik

### Sintaksis

Funksie:

- `areOctals(array)`

Parameters:

- `array`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // waarde is 'n nie-leë skikking van oktale stringe
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areOctals(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:43:49 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>