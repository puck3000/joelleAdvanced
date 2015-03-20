var dest = '../build';
var srcAss = './assets';
var src = './';


module.exports = {

	minifyCss: {
		src: srcAss + "/styles/cssImports/*",
		dest: srcAss + "/styles/"
	},

	styles: {
		src: srcAss + "/styles/main.styl",
		dest: dest + "/assets/styles"
	},

	compileTwig: {
		src: src + "twig/**/*",
		dest: dest + "/"

	},

	browserSync: {
	    server: {
	      // Serve up our build folder
	      baseDir: dest
	    }
  	},

  	plugScripts: {
  		src: srcAss + "/scripts/plugins.js",
  		dest: dest + "/assets/scripts/"

  	},

  	vendorScripts: {
  		src: srcAss + "/scripts/vendor/**/*",
  		dest: dest + "/assets/scripts/vendor"

  	},

  	mainScripts: {
  		src: srcAss + "/scripts/main.js",
  		dest: dest + "/assets/scripts/"
  	},

  	images: {
		src: srcAss + "/img/**",
		dest: dest + "/assets/img/"
	},

	general: {
		watchStyles: srcAss + "/styles/**/*.styl",
		watchTwig: src + "twig/**/*",
		watchScripts: srcAss + "/scripts/**/*"
	}
};