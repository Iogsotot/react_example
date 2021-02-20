import PropTypes from "prop-types";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 1rem",
    border: "1px solid green",
    borderRadius: "4px",
    marginBottom: "0.5rem",
  },
  input: {
    marginRight: "1rem",
  },
  index: {
    // marginRight: '0.5rem',
  },
};

function TodoItem({ todo, index, onChange }) {
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong style={styles.index}>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm">&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
