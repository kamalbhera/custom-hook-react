import './App.css';
import useFetch from './custom-hook/useFetch';

function App() {

  const url = "https://jsonplaceholder.typicode.com/users";

  const { data, loading, error } = useFetch(url);
  console.log(data);
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>React Custom Hook Demo</h2>
      <h3 style={{ textAlign: 'center' }}><u>useFetch Hook to fetch data from Server:</u></h3>
      {loading && <h4 style={{ textAlign: 'center' }}>Loading...</h4>}
      <div style={{ textAlign: 'center' }}>
        <ul style={{ textAlign: 'center' }}>
          {data && data.map((item, index) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
      {error && <div>{JSON.stringify(error)}</div>}
    </div>
  );
}

export default App;
