import React from "react";

const State = () => {
    return (
        <div className="container mt-5">
            <div className="shadow rounded p-4 bg-white">
                <h2 className="text-center mb-4 fw-bold">State Form</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Country Name</label>
                                <select className="form-select">
                                    <option>Select country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">State/District Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter district name"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">State/District Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter district code"
                                />
                            </div>

                            <button type="submit" className="btn btn-dark-grey fw-bold w-100">
                                Add State
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default State;
