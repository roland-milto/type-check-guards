# isNumber

## 설명

`isNumber`는 값이 유한한(non-`NaN`) 숫자인지 확인합니다.

### 사용 사례

계산, 저장 또는 범위 검사 전에 신뢰할 수 없는 출처(폼, 쿼리 파라미터, JSON 페이로드)에서 온 숫자 입력을 검증하여, 유한한 숫자만 `true`로 통과시키고 그 외에는 모두 `false`를 반환하도록
합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 산술 연산을 하기 전에 `unknown` 값을 검증하는 데 `isNumber`를 사용하세요. `NaN`, `Infinity`, `-Infinity`는 거부합니다.

### 장점

- 실제 JavaScript 숫자에 대해서만 `true`를 반환합니다(타입 검사 + `NaN` 및 무한대 거부).
- `NaN`, `Infinity`, 또는 `-Infinity`가 실수로 숫자로 통과하는 흔한 검증 버그를 방지합니다.
- 알 수 없는 입력(예: JSON, 사용자 입력, 외부 API)에 대한 런타임 가드로 잘 동작합니다.
- 단순하고 빠르며 부작용이 없습니다.

## 사용법

### 문법

함수:

- `isNumber(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input은 유효한 유한 숫자입니다
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isNumber(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 1:09:41 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>