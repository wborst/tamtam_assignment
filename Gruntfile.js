/*
 Grunt set-up:
 npm install -g grunt-cli
 npm install -g grunt-init
 npm init

 Requirements:
 npm install grunt@devel --save-dev
 npm install grunt-contrib-watch --save-dev
 npm install grunt-contrib-jshint --save-dev
 At time of testing I needed more up to date version of jshint: npm install https://github.com/gruntjs/grunt-contrib-jshint/archive/7fd70e86c5a8d489095fa81589d95dccb8eb3a46.tar.gz --save-dev
 npm install grunt-contrib-uglify --save-dev
 npm install grunt-contrib-requirejs --save-dev
 npm install grunt-contrib-sass --save-dev
 npm install grunt-contrib-imagemin --save-dev
 npm install grunt-contrib-htmlmin --save-dev

 */


// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/**/*.js']
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/tamtam.min.js': ['src/js/jquery.js', 'src/js/unslider.js','src/js/tamtam.js']
        }
      }
    },

    sass: {
      dist: {
        options: {
          compass: true,
          style: 'compressed'
        //   sourcemap: true
        },
        files: {
          'dist/css/app.css': 'src/scss/app.scss'
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'dist/css/app.min.css': 'dist/css/app.css'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      scripts: {
        files: '**/*.js',
        tasks: ['uglify']
     }
    }
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['watch']);

};
