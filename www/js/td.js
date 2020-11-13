  function addlist() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("in").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue !== '')
    {
      document.getElementById("node").appendChild(li);
    }
    var cl = document.createElement("SPAN");
    var t = document.createTextNode("×");
    cl.appendChild(t);
    cl.className="close";
    li.appendChild(cl);
    cl.onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
  }