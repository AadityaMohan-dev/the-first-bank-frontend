import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    gender: '',
    address: '',
    stateOfOrigin: '',
    accountNumber: '',
    email: '',
    password: '',
    phoneNumber: '',
    alternativePhoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-up logic here (e.g., send data to API)
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center pb-6">
      <div className="w-full max-w-4xl bg-white p-4 md:p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-[#2E8B57] mb-6">Create Account</h2>

        <form onSubmit={handleSubmit}>
          {/* First Row: Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition"
                placeholder="Enter your last name"
                required
              />
            </div>

            <div>
              <label htmlFor="otherName" className="block text-sm font-medium text-gray-700">
                Other Name
              </label>
              <input
                type="text"
                id="otherName"
                name="otherName"
                value={formData.otherName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition"
                placeholder="Enter your other name"
              />
            </div>
          </div>

          {/* Second Row: Email and Password Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Third Row: Gender and State of Origin Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="stateOfOrigin" className="block text-sm font-medium text-gray-700">
                State of Origin
              </label>
              <input
                type="text"
                id="stateOfOrigin"
                name="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition"
                placeholder="Enter your state of origin"
                required
              />
            </div>
          </div>

          {/* Fourth Row: Address Field */}
          <div className="mb-5">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Fifth Row: Phone and Alternative Phone Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="alternativePhoneNumber" className="block text-sm font-medium text-gray-700">
                Alternative Phone Number
              </label>
              <input
                type="text"
                id="alternativePhoneNumber"
                name="alternativePhoneNumber"
                value={formData.alternativePhoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition"
                placeholder="Enter alternative phone number"
              />
            </div>
          </div>

          {/* Submit Button with Text "Create Account" */}
          <button
            type="submit"
            className="w-full bg-[#2E8B57] text-white px-4 py-2 rounded-lg hover:bg-[#276D47] focus:outline-none transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
