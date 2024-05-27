export default function RadioInput({ array, name, style }) {
  return array.map((font, key) => {
    return (
      <label htmlFor={font} key={key} className={style}>
        <p>Aa</p>
        <input type="radio" name={name} value={font} />
      </label>
    );
  });
}
