import React from 'react'
import { Link } from 'react-router-dom'

const CartBtns = () => {
    return (
        <div className="fixed-action-btn">
            <Link to="/add_announcement" className="btn-floating btn-large waves-effect waves-light purple darken-2 modal-trigger">
                <i className="large material-icons white-text">add</i>
            </Link>
        </div>
    )
}
export default CartBtns;