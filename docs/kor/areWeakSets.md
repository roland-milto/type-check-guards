# areWeakSets

## 설명

입력이 비어 있지 않은 배열이며 모든 요소가 `WeakSet`인 경우에만 `true`를 반환하는지 확인합니다.

### 사용 사례

런타임 입력(예: API, 구성, 사용자 제공 데이터)을 검증하여, `WeakSet` 동작에 의존하는 로직을 진행하기 전에 비어 있지 않은 `WeakSet` 인스턴스 목록을 확보했는지 확인합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areWeakSets`를 사용해 알 수 없는 입력을 `WeakSet[]`로 취급하기 전에 검증하세요. 빈 배열과 배열이 아닌 값에 대해 `false`를 반환합니다.

### 장점

- 입력 배열의 모든 요소가 `WeakSet`인지 보장합니다.
- 빈 배열에 대해 `false`를 반환하여, 데이터 누락 시 실수로 “모두 유효함” 결과가 나오는 것을 방지합니다.
- 입력이 채워진 배열이 아닐 때(`null` 포함) `false`를 반환하여 안전하게 실패합니다.
- `WeakSet` 인스턴스가 필요로 하는 작업을 수행하기 전에 가드로 사용하기에 유용합니다.

## 사용법

### 문법

함수:

- `areWeakSets(array)`

매개변수:

- `array`: `WeakSet` 객체인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a는 WeakSet 인스턴스로 이루어진 비어 있지 않은 배열입니다
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areWeakSets(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 2:09:19 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>