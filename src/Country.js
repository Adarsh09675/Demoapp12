import React from "react";

const Country = () => {
    return (
        <div className="container mt-5">
            <div className="shadow rounded p-4 bg-white">
                <h2 className="text-center mb-4 fw-bold">Country Form</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Country Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Country Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Country Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Country Code"
                                />
                            </div>
                            <button type="submit" className="btn btn-dark-grey fw-bold w-100">
                                Add Country
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
