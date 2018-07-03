/* 

 * To change this license header, choose License Headers in Project Properties.

 * To change this template file, choose Tools | Templates

 * and open the template in the editor.

 */

module.exports = function (grunt) {

    // Project configuration.

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
	autoprefixer: {
	  options: {
	    // Task-specific options go here.
	    browsers: ['last 2 versions', 'ie 8', 'ie 9']
	  },
	  dist: {
	    src: 'src/styles.css',
	    dest: 'dist/stylesprefixed.css'
	    }
	  },
          cssmin:
         {
              target:
              {
                  files: 
                  {
                    'dist/stylesprefixed.min.css': ['dist/stylesprefixed.css']
                  }
              }
          },
          concat: 
	  {
              dist: 
		  {
                  src: [
                    'src/*.ts'
                    ],
                  dest: 'dist/main.concat.ts'
            	  }
          },
          uglify:
         {
              target:
              {
                  files: 
                  {
                   // 'dist/main.min.ts': ['dist/main.concat.ts']
                  }
              }
          },
	   imagemin: {
	        dist: {
			files: [{
				expand: true,
				cwd: 'src',
				src: '*.{gif,GIF,jpg,JPG,png,PNG,ico}',
				dest: 'dist'
			}]
		}
	  }

    });

    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask("default", ['autoprefixer', 'cssmin', 'concat', 'uglify', 'imagemin']);
};
