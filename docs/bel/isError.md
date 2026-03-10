# isError

## Апісанне

Правярае, ці з'яўляецца зададзенае `value` асобнікам `Error`.

### Выкарыстанне

Выкарыстоўвайце `isError`, калі вы атрымліваеце значэнне тыпу `unknown` (напрыклад, з блока `catch`, з callback або са
знешняй бібліятэкі) і вам трэба бяспечна вызначыць, ці з'яўляецца яно `Error`, перад чытаннем `message`, `name` або
`stack`.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isError`, каб абараніць значэнні тыпу `unknown` (напрыклад, з `catch`) перад тым, як разглядаць іх як
`Error`.

### Перавагі

- Забяспечвае простую праверку падчас выканання, ці з'яўляецца значэнне асобнікам `Error`.
- Дапамагае звузіць невядомыя ўваходныя даныя перад доступам да ўласцівасцяў `Error`, такіх як `message` або `stack`.
- Зніжае рызыку выключэнняў падчас выканання пры апрацоўцы значэнняў з `catch`, знешніх API або нетыпізаваных крыніц.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isError(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць адносна тыпу `Error`.

### Лакальны імпарт функцыі

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

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isError(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isError](../_analysis/isError.md)

<br>

---

<small>Файл быў створаны 6 February 2026 at 12:44:44 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>