
import React from "react";

export default function DealershipForm() {
  const banks = [
    "State Bank of India", "Punjab National Bank", "Bank of Baroda", "Canara Bank",
    "Union Bank of India", "Bank of India", "Indian Bank", "Central Bank of India",
    "UCO Bank", "Bank of Maharashtra", "Punjab & Sind Bank", "HDFC Bank", "ICICI Bank",
    "Axis Bank", "IDBI Bank", "Yes Bank", "Kotak Mahindra Bank", "IndusInd Bank",
    "Federal Bank", "South Indian Bank", "RBL Bank", "Karnataka Bank", "City Union Bank",
    "Dhanlaxmi Bank", "Tamilnad Mercantile Bank", "Jammu & Kashmir Bank", "Bandhan Bank",
    "IDFC First Bank", "AU Small Finance Bank", "Equitas Small Finance Bank",
    "Ujjivan Small Finance Bank", "Jana Small Finance Bank", "Suryoday Small Finance Bank",
    "North East Small Finance Bank", "Fincare Small Finance Bank", "ESAF Small Finance Bank", "Other"
  ];

  return (
    <div className="card">
      <h1 style={{ textAlign: "center", color: "#0a4d8c" }}>R K ENTERPRISES Dealership Application Form</h1>

      <form action="https://formspree.io/f/mayvlwgj" method="POST">
        <label>Business Name</label>
        <input type="text" name="businessName" required />

        <label>Contact Person</label>
        <input type="text" name="contactPerson" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Phone Number</label>
        <input type="tel" name="phone" required />

        <label>Address</label>
        <textarea name="address" rows="3" required></textarea>

        <label>Type of Business</label>
        <select name="businessType" required>
          {["Limited Company", "Pvt Ltd Co.", "Partnership", "Proprietorship", "Individual", "HUF", "Other"].map(type => (
            <option key={type}>{type}</option>
          ))}
        </select>

        <label>Products Interested In</label>
        <select name="productsInterested" required>
          {["Drip", "Mini Sprinkler", "Both", "Other"].map(p => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <label>Bank Name</label>
        <select name="bankName" required>
          {banks.map(bank => (
            <option key={bank}>{bank}</option>
          ))}
        </select>

        <label>Bank Account Number</label>
        <input type="text" name="accountNumber" required />

        <label>IFSC Code</label>
        <input type="text" name="ifscCode" required />

        <label>Previous Dealership (if any)</label>
        <textarea name="previousDealership" rows="2" />

        <label>Turnover for Last 3 Years</label>
        <input type="text" name="turnover1" placeholder="Year 1" />
        <input type="text" name="turnover2" placeholder="Year 2" />
        <input type="text" name="turnover3" placeholder="Year 3" />

        <div style={{ marginTop: "1rem" }}>
          <input type="checkbox" name="declaration" required />
          <label> Declaration (All information provided is true and correct)</label>
        </div>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button type="submit" style={{ padding: "0.6rem 2rem", fontSize: "1rem", background: "#0a4d8c", color: "white", borderRadius: "5px" }}>Submit</button>
        </div>
      </form>
    </div>
  );
}
