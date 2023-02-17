import AttendeesTable from "../AttendeesTable/AttendeesTable";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <img className="logo" src={require("./logo.png")} alt="" />
        <img src={require("./right.png")} alt="" />
      </div>
      <AttendeesTable />
    </div>
  );
};

export default Home;
