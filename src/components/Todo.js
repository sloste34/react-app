function Todo(props) {
  //함수의 이름은 반드시 대문자로 작성해야 한다.
  function deleteHandler() {
    console.log('Clicked!');
    console.log(props.text);
  }
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
