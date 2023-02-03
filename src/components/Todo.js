function Todo() {
  //함수의 이름은 반드시 대문자로 작성해야 한다.
  return (
    <div className='card'>
      <h2>TITLE</h2>
      <div className='actions'>
        <button className='btn'>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
