import { List } from "react-virtualized";
import "react-virtualized/styles.css";
import useFetch from "../customHook/useFetch";

// Main Component
const Windowing = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  // Each row renderrer
  const rowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        {data[index].body}
      </div>
    );
  };

  return (
    <div style={{ border: "1px solid red" }}>
      <h2>Windowing / List Viewing and API Integration</h2>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <List
          width={500}
          height={500}
          rowCount={data ? data.length : 0}
          rowHeight={100}
          rowRenderer={rowRenderer}
        />
      )}
    </div>
  );
};

export default Windowing;
