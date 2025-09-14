const ToDoFilterAndSearch = ({ filter, setFilter, search, setSearch }) => {
  return (
    <div>
      <label className="label">
        Що обираєш...?
        <select
          className="select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Усі завдання</option>
          <option value="active">В процессі</option>
          <option value="completed">Завершенні</option>
        </select>
      </label>
      <label className="label" htmlFor="search-todo">
        Пошукаєм...?
        <input
          className="input"
          id="search-todo"
          type="search"
          value={search}
          placeholder="Підкажи що ми шукаемо?"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </div>
  );
};

export default ToDoFilterAndSearch;
