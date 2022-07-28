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
  console.log(draft);
});

nextState();
