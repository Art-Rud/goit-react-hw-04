const style = {
  marginBottom: 50,
  marginTop: 20,
};
function LoadMore({ load }) {
  return (
    <>
      <button onClick={load} style={style}>
        Load More
      </button>
    </>
  );
}
export default LoadMore;
