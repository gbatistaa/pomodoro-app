export default function RadioInput({ array, name, style, text }) {
  return array.map((value, key) => {
    return (
      <label
        htmlFor={value}
        key={key}
        className={`${style}`}
        style={{ backgroundColor: array[key] }}
      >
        {text}
        <input type="radio" name={name} value={value} id={value} />
      </label>
    );
  });
}
