import produce from 'immer';

const originalState = [
  {
    id: 1,
    todo: '123',
    checked: true,
  },
  {
    id: 2,
    todo: 'immer로 불변성 유지하기',
    checked: false,
  },
];

const nextState = produce(originalState, (draft) => {
  //id가 2인 항목의 checked값을 true로 설정
  const todo = draft.find((t) => t.id === 2);
  todo.checked = true;
  //배열에 새로운 데이터 추가
  draft.push({
    id: 3,
    todo: '3번째 데이터',
    checked: false,
  });
  // id가 1인 항목을 제거
  draft.splice(
    draft.findIndex((t) => t.id === 1),
    1
  );
});

nextState();
