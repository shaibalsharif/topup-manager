import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      contact: '',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      // Implement registration logic
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
          <h2 className="text-2xl mb-4">Register</h2>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mb-4 p-2 border"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mb-4 p-2 border"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="mb-4 p-2 border"
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="mb-4 p-2 border"
            required
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">Register</button>
        </form>
      </div>
    );
  };
  
  export default Register;
  