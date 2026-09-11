import "./App.css";
import type { Ember } from "./assets/types/Ember";

function App() {
  const emberek: Array<Ember> = [
    { nev: "John", kor: 30, varos: "Tata" },
    { nev: "Vajk", kor: 300, varos: "Gána" },
    { nev: "John pork", kor: 3, varos: "Worchester" },
  ];

  emberek.push({ nev: "x", kor: 15, varos: "szeged" });

  const generateRow = (e: Ember) => {
    return (
      <tr>
        <td>{e.nev}</td>
        <td>{e.kor}</td>
        <td>{e.varos}</td>
      </tr>
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Kor</th>
            <th>Város</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>John doe</th>
            <th>30</th>
            <th>Tata</th>
          </tr>
          {emberek.map((i) => generateRow(i))}
        </tbody>
      </table>
    </>
  );
}

export default App;
