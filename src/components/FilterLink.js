import React from 'react';
import { connect } from 'react-redux';
import { setTodoListFilter } from '../actions';
import { NavLink } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.todolistFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setTodoListFilter(ownProps.filter))
})


const FilterLink = ({filter, active, children, onClick}) => {
    return (
        <NavLink
            exact
            to={filter === 'SHOW_ALL' ? '/': `/${filter}`}
            activeStyle={{
                textDecoration: 'none',
                color: 'black',
            }}
            // onClick ={onClick}
            // disabled={active}
            // style={{marginLeft:'4px'}}
        >
            {children}
        </NavLink>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);