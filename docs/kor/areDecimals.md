# areDecimals

## 설명

배열의 모든 요소가 10진수 숫자인지, 그리고 배열이 채워져 있는지 확인하여 `true` 또는 `false`를 반환합니다.

### 사용 사례

사용자가 제공한 목록(예: CSV 열 또는 폼 입력)을 검증하여, 파싱이나 계산 전에 배열이 비어 있지 않고 모든 항목이 10진수 값인지 확인합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `unknown[]`가 비어 있지 않고 모든 요소가 10진수 표현인지 빠르게 불리언으로 확인해야 할 때 `areDecimals`를 사용하세요.

### 장점

- 항목을 검증하기 전에 입력이 채워진 배열인지 확인하여, 빈 목록을 실수로 허용하는 일을 방지합니다.
- 모든 요소를 `isDecimal`로 검증하므로, 혼합되었거나 유효하지 않은 값이 있으면 즉시 `false`를 반환합니다.
- 가드 및 조기 반환(early-return) 검증 흐름에 적합한 간단한 불리언 결과(`true`/`false`)를 제공합니다.

## 사용법

### 문법

함수:

- `areDecimals(array)`

매개변수:

- `array`: 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // 참
console.log(areDecimals(b)); // 거짓
console.log(areDecimals(c)); // 거짓
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areDecimals(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 3:57:47 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>