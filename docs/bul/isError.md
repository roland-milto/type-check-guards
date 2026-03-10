# isError

## Описание

Проверява дали дадена `value` е инстанция на `Error`.

### Случай на употреба

Използвайте `isError`, когато получите стойност от тип `unknown` (например от блок `catch`, callback или външна
библиотека) и трябва безопасно да определите дали е `Error`, преди да прочетете `message`, `name` или `stack`.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isError`, за да защитите стойности от тип `unknown` (напр. от `catch`), преди да ги третирате като
`Error`.

### Предимства

- Предоставя проста проверка по време на изпълнение дали дадена стойност е инстанция на `Error`.
- Помага за стесняване на неизвестни входни данни преди достъп до свойства на `Error`, като `message` или `stack`.
- Намалява риска от изключения по време на изпълнение при обработка на стойности от `catch`, външни API или нетипизирани
  източници.

## Използване

### Синтаксис

Функция:

- `isError(value)`

Параметри:

- `value`: Стойността, която да се провери спрямо типа `Error`.

### Локален импорт на функция

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

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isError(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isError](../_analysis/isError.md)

<br>

---

<small>Файлът беше генериран на 6 February 2026 at 12:44:50 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>