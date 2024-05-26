export default function ColorSettings(style) {
  return (
    <section className={style.colorSettings}>
      <h3>COLOR</h3>
      <div className="">
        <label htmlFor="red">
          <input type="radio" name="color" id="red" value="#f87070" />
        </label>
        <label htmlFor="cyan">
          <input type="radio" name="color" id="cyan" value="#70f2f8" />
        </label>
        <label htmlFor="pink">
          <input type="radio" name="color" id="pink" value="#d881f8" />
        </label>
      </div>
    </section>
  );
}