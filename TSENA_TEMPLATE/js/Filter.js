function filterTable(columns, rank=1) {
    let input, filter, table, tr, td, i, txtValue
    input = document.querySelectorAll("main input")[rank - 1]
    filter = input.value.toUpperCase()
    table = document.querySelectorAll("table.productList")[rank - 1]
    tr = table.querySelectorAll("table.productList tbody tr")

    for (i = 0; i < tr.length; i++) {
        for (let j = 0; j < columns.length; j++) {
            td = tr[i].querySelector(`td:nth-child(${columns[j]})`)
            if (td) {
                txtValue = td.textContent || td.innerText
                tr[i].style.display = (txtValue.toUpperCase().indexOf(filter) > -1) ? "":"none"
                if (tr[i].style.display != "none") {
                    break
                }
            }
        }
    }
}