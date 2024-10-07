import Cookies from "js-cookie"

const Dashboard = () => {
    const role = Cookies.get('role');
  
    return (
      <div className="p-6">
        <h1 className="text-3xl">Welcome to the Dashboard</h1>
        <p>Your role is: {role}</p>
      </div>
    );
  };
  
  export default Dashboard;
  