export async function signIn({ email, password }) {
  console.log('server: sign in');
  await new Promise((r) => setTimeout(r, 300));
  if (email === 'aaa@gmail.com') return { result: null, error: '이미 있는 아이디 입니다.' };
  return { result: { username: '권해링' }, error: null };
}
export async function login({ email, password }) {
  console.log('server: login');
  await new Promise((r) => setTimeout(r, 300));
  if (email === 'aaa@gmail.com' && password === '1234') return { result: { username: '권혜리' } };
  return { result: null, error: '아이디와 패스워드를 확인해주세요.' };
}
export async function logout() {
  await new Promise((r) => setTimeout(r, 100));
  console.log('server: logout');
}

export function saveTodos(todos, username) {
  if (!username) return;
  localStorage.setItem('todos-' + username, JSON.stringify(todos || []));
}

export function getTodos(username) {
  if (!username) return [];
  const savedTodos = JSON.parse(localStorage.getItem('todos-' + username));
  return savedTodos || [];
}
