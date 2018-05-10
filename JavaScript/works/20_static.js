function Article() {
	Article.count++;
}

Article.count = 0;

Article.showCount = function () {
	alert(this.count);
}
new Article();
new Article();
new Article();
new Article();
Article.showCount();

function User() {
	this.sayHi = function() {
		console.log(this.name);
	}
}

User.createFromData = function(userData) {
	var user = new User;
	user.name = userData.name;
	
}