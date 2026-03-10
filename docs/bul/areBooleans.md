# areBooleans

## Описание

`areBooleans` проверява дали даден непразен масив съдържа само булеви стойности, като връща `true`, ако е така, и
`false` в противен случай.

### Случай на употреба

Валидирайте предоставени от потребителя или външни данни (напр. JSON payload-и, параметри на заявка, конфигурационни
масиви), за да се уверите, че непразен списък съдържа само булеви стойности, преди да приложите булева логика или да го
подадете към API-та, които очакват `boolean[]`.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areBooleans`, за да валидирате `unknown[]`, преди да го третирате като `boolean[]`; функцията връща
`false` за празни масиви, така че обработете този случай изрично, ако трябва да се допуска празен списък.

### Предимства

- Връща `true` само когато всеки елемент е булева стойност и входът е непразен масив.
- Предотвратява фалшиви положителни резултати, като отхвърля празни масиви (връща `false`).
- Работи добре като проверка по време на изпълнение преди операции само с булеви стойности (напр. `every`, `some`,
  логически редукции).

## Използване

### Синтаксис

Функция:

- `areBooleans(array)`

Параметри:

- `array`: Масивът, който трябва да бъде проверен за булеви елементи.

### Локален импорт на функция

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areBooleans(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 14:39:26 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>