/**
 * Error
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Error() {
  return (
    <main aria-labelledby="page-title">
      <h2 tabIndex="0" id="page-title" className="error-msg">
        Page not found
      </h2>
    </main>
  );
}
