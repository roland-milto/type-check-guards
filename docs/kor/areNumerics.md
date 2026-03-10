# areNumerics

## 설명

`areNumerics`는 값이 비어 있지 않은 배열이며 모든 요소가 숫자인지 확인합니다.

### 사용 사례

`areNumerics`를 사용해 외부 또는 타입이 지정되지 않은 데이터(예: JSON 페이로드, 쿼리 파라미터, 폼 입력)를 합계, 평균 또는 기타 숫자 연산을 계산하기 전에 검증하세요. 입력이 비어 있지 않은
숫자 배열인지 확인하고, 그렇지 않으면 `false`를 반환합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areNumerics`를 사용해 `unknown` 입력을 숫자 배열로 취급하기 전에 가드하세요. 배열이 아니거나 빈 배열이면 `false`를 반환합니다.

### 장점

- 입력이 비어 있지 않은 배열이며 모든 요소가 숫자일 때만 `true`를 반환합니다.
- 빠르게 실패합니다: 숫자가 아닌 요소를 발견하는 즉시 검사를 중단하고 `false`를 반환합니다.
- 숫자 연산을 수행하기 전에 알 수 없는 입력을 안전하게 검증하는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `areNumerics(array)`

매개변수:

- `array`: 숫자 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // 참
console.log(areNumerics(b)); // 참
console.log(areNumerics(c)); // 거짓
console.log(areNumerics(d)); // 거짓
console.log(areNumerics(e)); // 거짓

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areNumerics(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오후 4:05:54 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>