# areDates

## 설명

`areDates`는 주어진 배열이 채워져 있고 `Date` 객체만 포함하는지 판단하며, 모든 요소가 유효한 날짜일 때만 `true`를 반환합니다.

### 사용 사례

`areDates`를 사용해 알 수 없는 입력(예: 파싱된 JSON, 폼 데이터, API 페이로드)을 검증한 뒤, 시간 기준 정렬, 포맷팅, 범위 계산과 같은 날짜 전용 로직을 실행하세요.

> **TypeScript 사용자를 위한 참고:**
>
> 비어 있지 않은 배열에서 모든 요소가 `Date`일 때만 `true`를 반환하며, 빈 배열은 `false`를 반환합니다.

### 장점

- 내용을 검증하기 전에 배열이 비어 있지 않음을 보장하여, 빈 입력에 대해 `true`가 반환되는 것을 방지합니다.
- 모든 요소가 `Date` 인스턴스인지 확인하며, 첫 번째 불일치가 발생하면 즉시 `false`를 반환합니다.
- 배열 항목에 대해 날짜 전용 작업을 수행하기 전에 가드 스타일의 검사로 유용합니다.

## 사용법

### 문법

함수:

- `areDates(array)`

매개변수:

- `array`: `Date` 객체인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // 참
console.log(areDates(b)); // 거짓
console.log(areDates(c)); // 거짓

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areDates(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areDates](../_analysis/areDates.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 3:30:56 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>