import React from 'react';
import FilterLink from './FilterLink';
import {todolistFilters} from './actions/action';

const Filters = () => {

    return (
        <div>
            <FilterLink filter={todolistFilters.SHOW_ALL}><i class="fas fa-clipboard-list" style={{color:'white'}}></i> All</FilterLink>
            <FilterLink filter={todolistFilters.SHOW_ACTIVE}><i class="fas fa-list-alt" style={{color:'white'}}></i>Active</FilterLink>
            <FilterLink filter={todolistFilters.SHOW_COMPLETED}><i class="fas fa-check-square" style={{color:'white'}}></i>IsDone</FilterLink>
        </div>
    )
}

export default Filters;