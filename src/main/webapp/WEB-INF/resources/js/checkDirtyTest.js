var time = 1;

var interval = setInterval(function() {
	if (time <= 1200) {
		if (typeof CKEDITOR !== "undefined") {
			for ( var i in CKEDITOR.instances) {
				var editor = CKEDITOR.instances[i];
				console.log("check editor " + editor.name);
				if (editor.checkDirty()) {
					console.log("it's dirty, extend session");
					Liferay.Session.extend();
					break;
				} else {
					console.log("not dirty");
				}
			}
		}
		time++;
	} else {
		clearInterval(interval);
	}
}, 6000);