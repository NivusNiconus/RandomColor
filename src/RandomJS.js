class RandomJS {

	/**
	 * return a number between 0 - maximum
	 * default maximum:§ 100
	 */
	static number (max = 100, min = 0) {
		return Math.round(Math.random() * (max - min)) + min;
	}


	/**
	 * return a random hexadecimal color 
	 */
	static color () {
		let hexNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += hexNumber[RandomJS.number(15)];
		}
		return color;
	}

	/**
	 * return a random gradient
	 */
	static gradient (tilt = RandomJS.number(360)) {
		if (tilt > 360 || tilt < 0) 
			tilt = RandomJS.number(360);
		return "linear-gradient("+ tilt +"deg, "+ RandomJS.color() +", "+ RandomJS.color() +")";
	}


	/*
	 * return a zen sentence
	 */
	static zen (callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/zen');
        xhr.addEventListener('readystatechange', function() {
	        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
	            callback(xhr.responseText);
	        }
        });
        xhr.send(null);
	}

	/*
	 * return a fake user
	 */
	static user (callback) {
		var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://randomuser.me/api/');
        xhr.addEventListener('readystatechange', function() {
	        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
	        	let user = JSON.parse(xhr.responseText);
	       		user.results[0]
	            callback({
	            	"username": user.results[0].login.username,
	            	"lastname": user.results[0].name.last,
	            	"firstname": user.results[0].name.first,
	            	"gender": user.results[0].gender,
	            	"password": user.results[0].login.password,
	            	"dob": user.results[0].dob.date,
	            	"age": user.results[0].dob.age,
	            	"mail": user.results[0].email,
	            	"tel": user.results[0].cell,
	            	"city": user.results[0].location.city,
	            	"postcode": user.results[0].location.postcode,
	            	"country": user.results[0].location.country,
	            	"streetname": user.results[0].location.street.name,
	            	"streetnumber": user.results[0].location.street.number,
	            	"largepicture": user.results[0].picture.large,
	            	"mediumpicture": user.results[0].picture.medium,
	            	"smallpicture": user.results[0].picture.thumbnail    	
	            });
	        }
        });
        xhr.send(null);
	}

	/*
	 * return a random username
	 */
	static username (callback) {
        RandomJS.user(response => {
        	callback(response.username);
        });
	}

	/*
	 * return a random country
	 */
	static country (callback) {
        RandomJS.user(response => {
        	callback(response.country);
        });
	}

	/*
	 * return a random password
	 */
	static password (callback) {
        RandomJS.user(response => {
        	callback(response.password);
        });
	}
}