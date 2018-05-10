var form = document.getElementById('commentForm');

form.onsubmit = function(e) {
    e.preventDefault();
    
    var comment = document.getElementById("comment").value;
    var xhr = new XMLHttpRequest();
    var body = "comment=" + encodeURIComponent(comment);
    xhr.open("POST", 'comments.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(body);
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200 ) {
            var res = JSON.parse(xhr.responseText);
            var property;
            for(prop in res) {
                property = prop
            }
            var div = document.createElement("div");
            var p = document.createElement("p");
            var parentEl = document.getElementById("comments");
            div.className = 'commentItem';
            p.innerHTML = res[property];
            div.appendChild(p);
            parentEl.appendChild(div);
        }
    }
}
