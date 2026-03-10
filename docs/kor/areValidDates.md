# areValidDates

## 설명

배열이 비어 있지 않고 전부 유효한 `Date` 객체로만 구성되어 있는지 판단합니다.

### 사용 사례

`areValidDates`를 사용해 사용자 제공 또는 API 제공 배열을 날짜 기반 작업(정렬, 범위 검사, 포맷팅) 전에 검증하여, 모든 항목이 실제로 유효한 `Date` 객체이며 목록이 비어 있지 않음을
보장합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areValidDates`는 빈 배열에 대해 `false`를 반환합니다. 검증 단계로 의존하기 전에 해당 배열이 비어 있지 않아야 한다는 의도인지 확인하세요.

### 장점

- 모든 요소가 유효한 `Date` 인스턴스일 때에만 `true`를 반환합니다(`new Date('invalid')` 같은 잘못된 날짜는 제외).
- 빈 입력은 `false`를 반환하여 거부하므로, 의미 있는 비어 있지 않은 날짜 목록만 허용하도록 보장합니다.
- 다른 검증과 쉽게 조합할 수 있는 간단한 불리언 가드 스타일의 검사를 제공합니다.

## 사용법

### 문법

함수:

- `areValidDates(array)`

매개변수:

- `array`: `Date` 객체를 포함할 수 있는, 검사할 배열입니다.

### 로컬 함수 임포트

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // 참
console.log(areValidDates(b)); // 거짓
console.log(areValidDates(c)); // 거짓
console.log(areValidDates(d)); // 거짓

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areValidDates(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 2:32:33 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>