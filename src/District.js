import React from "react";

const District = () => {
    const districtData = [
        { id: 1, country: "India", state: "Uttar Pradesh", name: "Siddharthnagar", code: "55" },
        { id: 2, country: "India", state: "Uttar Pradesh", name: "Ayodhya", code: "42" },
    ];

    return (
        <div className="container mt-5">
            <div className="shadow rounded p-4 bg-white">
                <h2 className="text-center fw-bold mb-4">District Form</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Country Name</label>
                                <select className="form-select">
                                    <option>Select country</option>
                                    <option>India</option>
                                    <option>Srilanka</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">State Name</label>
                                <select className="form-select">
                                    <option>Select State</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Haryana</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">District Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter district name"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">District Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter district code"
                                />
                            </div>

                            <button type="submit" className="btn btn-dark-grey fw-bold w-100">
                                Add District
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="mt-5 shadow rounded p-3 bg-white">
                <h4 className="fw-bold mb-3">District List</h4>
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>District Name</th>
                            <th>District Code</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {districtData.map((district) => (
                            <tr key={district.id}>
                                <td>{district.id}</td>
                                <td>{district.country}</td>
                                <td>{district.state}</td>
                                <td>{district.name}</td>
                                <td>{district.code}</td>
                                <td>
                                    <button className="btn btn-custom-lightblue btn-sm text-white">Edit</button>
                                    <button className="btn btn-custom-darkorange btn-sm text-white">Delete</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default District;
