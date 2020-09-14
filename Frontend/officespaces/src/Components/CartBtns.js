import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const CartBtns = ({ isAuthenticated }) => {

  return (
    !isAuthenticated ? '' :
      <div className="fixed-action-btn" >
        <Link
          to="/add_announcement"
          className="btn-floating btn-large waves-effect waves-light purple darken-2 modal-trigger"
        >
          <i className="large material-icons white-text">add</i>
        </Link>
      </div >
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated
})

export default connect(mapStateToProps, null)(CartBtns);
