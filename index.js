module.exports = function (el) {
	el.getContext = function() {
		return {
			fillRect: function() {},
			clearRect: function(){},
			getImageData: function(x, y, w, h) {
				return  {
					data: new Array(w*h*4)
				};
			},
			putImageData: function() {},
			createImageData: function(){ return []},
			setTransform: function(){},
			drawImage: function(){},
			save: function(){},
			fillText: function(){},
			restore: function(){},
			beginPath: function(){},
			moveTo: function(){},
			lineTo: function(){},
			closePath: function(){},
			stroke: function(){},
			translate: function(){},
			scale: function(){},
			rotate: function(){},
			arc: function(){},
			fill: function(){},
		};
	}
};