# isError

## Bschrybig

Prüeft, öb e gegebnigi `value` e Instanz vo `Error` isch.

### Aawändig

Bruuch `isError`, wänn du e `unknown`-Wert überchunsch (zum Bispil us eme `catch`-Block, eme Callback oder ere externe
Bibliothek) und du sicher wotsch feschtstelle, öb s e `Error` isch, bevor du `message`, `name` oder `stack` lisisch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isError`, zum `unknown`-Wärt (z. B. us `catch`) z schütze, bevor du si als `Error` behandlisch.

### Vorteil

- Bietet e eifachi Laufzyt-Prüefig, öb e Wert e `Error`-Instanz isch.
- Hilft, unbekannti Iigabewärt iizschränke, bevor mer uf `Error`-Eigeschafte wie `message` oder `stack` zuegrifft.
- Verringert s Risiko vo Laufzyt-Uusnahme, wänn mer Wärt us `catch`, externe APIs oder untypisierte Quelle verarbeit.

## Verwendig

### Syntax

Funktion:

- `isError(value)`

Parameter:

- `value`: De Wert, wo mer gäge de `Error`-Typ prüeft.

### Lokale Funktions-Import

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isError(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isError](../_analysis/isError.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 12:45:31 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>