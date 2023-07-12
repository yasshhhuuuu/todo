var my_result = document.getElementById('result')
function Add_ToDo()
{
    var x = document.getElementById('To_do').value
    const node = document.createElement('div')
    node.className = "list-group-item list-group-item-info mb-2"
    const textn = document.createTextNode(x)
    node.appendChild(textn)
    var b = document.createElement('button')
    b.className = "btn btn-danger"
    b.textContent = "Delete"
    b.onclick = delete_ToDo
    b.style = "float: right;"
    node.appendChild(b)
    var e = document.createElement('button')
    e.className = "btn btn-warning"
    e.textContent = "Edit"
    e.onclick = edit_ToDo
    e.style = "float: right;"
    node.appendChild(e)
    my_result.appendChild(node)
    document.getElementById('To_do').value = ""
}

function Clear_ToDo(){
    my_result.innerHTML = ""
}

function delete_ToDo(e){
    e.target.parentElement.remove()
}

function edit_ToDo(e){
    const newdiv = document.createElement('div')
    newdiv.className = "container text-center mt-3"
    var i = document.createElement('input')
    i.className = "form-control"
    i.setAttribute("type","text")
    newdiv.appendChild(i)
    var b1 = document.createElement('button')
    b1.className = "btn btn-success mt-2"
    b1.textContent = "Update"
    b1.onclick = edit_text
    newdiv.appendChild(b1)
    var b2 = document.createElement('button')
    b2.className = "btn btn-danger mt-2"
    b2.textContent = "Close"
    b2.onclick = Close_edit
    newdiv.appendChild(b2)
    e.target.parentElement.appendChild(newdiv)
}

function edit_text(e){
    y = e.target.parentElement.firstChild.value
    const textnode1 = document.createTextNode(y)
    e.target.parentElement.parentElement.replaceChild(textnode1,e.target.parentElement.parentElement.firstChild)
    e.target.parentElement.remove()

}
function Close_edit(e){
    e.target.parentElement.remove()
}