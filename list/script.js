function addRow(selectedComponent) {
    if (!document.getElementById(selectedComponent) && selectedComponent != "") {
        var table = document.querySelector(".carbuilder tbody");
        var row = table.insertRow(-1);
        row.id = selectedComponent;

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = selectedComponent;
        cell2.innerHTML = "<button>+</button>";
        cell3.innerHTML = "";
        cell4.innerHTML = "";
        cell5.innerHTML = "";

        // Reset the dropdown menu
        document.querySelector("select[name='components']").value = "";
    }
}
