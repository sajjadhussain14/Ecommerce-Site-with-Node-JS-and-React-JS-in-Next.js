import React from 'react'

const Pagination = () => {
    return (
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    )
}

export default Pagination