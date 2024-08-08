import React from "react";
import styles from "./manage.module.css";

const ManageRequests = () => {
  return (
    <div className={styles.body}>
      <h3>Requests to manage</h3>
      <h1>24</h1>
      <p>
        Verify all requests.
        <br />
        Manage permissions.
      </p>
      <button>Check requests</button>
    </div>
  );
};

export default ManageRequests;
