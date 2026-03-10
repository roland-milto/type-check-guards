# areNumbers

## 설명

`areNumbers`는 값이 비어 있지 않은 배열이고 모든 요소가 숫자인지 확인합니다.

### 사용 사례

합계, 평균 또는 기타 숫자 집계를 계산하기 전에 사용자 제공 데이터나 API 제공 데이터가 비어 있지 않은 숫자 배열인지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areNumbers`를 사용해 숫자 계산을 수행하기 전에 알 수 없는 배열을 검증하세요. 이 함수는 빈 배열과 숫자가 아닌 값이 하나라도 포함된 배열에 대해 `false`를 반환합니다.

### 장점

- 입력이 비어 있지 않은 배열이며 모든 요소가 숫자일 때만 `true`를 반환합니다.
- 빈 배열과 배열이 아닌 입력을 거부하여 거짓 양성을 방지합니다.
- 런타임 오류를 피하기 위해 숫자 연산(예: 합계, 평균) 전에 가드로 사용하기에 유용합니다.

## 사용법

### 문법

함수:

- `areNumbers(array)`

매개변수:

- `array`: 숫자 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areNumbers(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 1:04:50 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>