import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Registered:", form);
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md border border-[#e6d9c8] p-8">
        <h2 className="text-3xl font-bold text-center text-[#4A2E14] mb-2">
          Create an Account
        </h2>
        <p className="text-center text-[#6B4F4F] mb-6">
          Join Doc-Type-Converter and start converting instantly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#4A2E14] text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#d6c3a3] rounded-md focus:ring-2 focus:ring-[#8B5E3C] outline-none"
            />
          </div>

          <div>
            <label className="block text-[#4A2E14] text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#d6c3a3] rounded-md focus:ring-2 focus:ring-[#8B5E3C] outline-none"
            />
          </div>

          <div>
            <label className="block text-[#4A2E14] text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#d6c3a3] rounded-md focus:ring-2 focus:ring-[#8B5E3C] outline-none"
            />
          </div>

          <div>
            <label className="block text-[#4A2E14] text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#d6c3a3] rounded-md focus:ring-2 focus:ring-[#8B5E3C] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B5E3C] hover:bg-[#734a2e] text-white py-2 rounded-md font-medium shadow-md transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-[#6B4F4F] mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#8B5E3C] font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
