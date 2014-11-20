module.exports = function(grunt) {

  //command availability
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //==========================================================

  //core uglify configuration object
  config = {

    //concatenate vendor scripts
    concat: {
      options: {
        separator: ';'
      },
      files: {
        'out/assets/scripts/vendors.js': [
          'bower_components/impress.js/js/impress.js']
      }
    },
    
    //uglify/minify
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'out/assets/scripts',
          src: ['**/*.js'],
          dest: 'out/assets/scripts/'
        }]
      }
    }
  };

  //==========================================================

  //Project configuration
  grunt.initConfig(config);

};

