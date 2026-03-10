# isMap

## Beskrywing

Kontroleer of die gegewe `value` 'n `Map` is, en gee `true` terug as dit is en `false` andersins.

### Gebruikscenario

Gebruik `isMap` wanneer jy 'n `unknown` waarde ontvang (bv. vanaf JSON-ontleding, eksterne API's of gebruikersinvoer) en
moet seker maak dit is 'n `Map` voordat `Map`-bewerkings uitgevoer word.

> **Wenk vir TypeScript-gebruikers:**
>
> `isMap` is 'n looptydwag wat `true` teruggee wanneer die waarde 'n `Map` is en `false` andersins; gebruik dit om
`unknown` te vernou voordat `Map`-API's aangeroep word.

### Voordele

- Bied 'n vinnige looptydkontrole om te bepaal of 'n waarde 'n `Map` is.
- Help om tipefoute te voorkom deur kodepaaie te beskerm wat `Map`-metodes soos `get`, `set` en `has` vereis.
- Werk goed as 'n liggewig valideringsstap wanneer `unknown`-insette hanteer word.

## Gebruik

### Sintaksis

Funksie:

- `isMap(value)`

Parameters:

- `value`: Die waarde om te kontroleer.

### Plaaslike funksie-invoer

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isMap(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isMap](../_analysis/isMap.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 16:03:31 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>