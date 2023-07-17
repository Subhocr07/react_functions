import logo from "./logo.svg";
import "./App.css";
import Headings from "./component/Heading";
import Navbar from "./component/Navbar";
import UserDetails from "./component/UserDetails";
import Moloi from "./component/Moloi";
import ShowList from "./component/ShowList";
import Pagination from "./component/Pagination";
import BackendDrivenPagination from "./component/BackendDrivenPagination";

function App() {
  return (
    <div className="App">
      <Headings></Headings>
      {/* <ShowList /> */}
      {/* <Pagination /> */}
      <BackendDrivenPagination />
      {/* <Headings />
      <Navbar />
      <UserDetails /> */}
    </div>
  );
}

export default App;
